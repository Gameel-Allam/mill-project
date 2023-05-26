import { useState } from "react";
import styles from "./GateAddModal.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, FormControlLabel, InputBase, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import { useFormik } from "formik";
import { GateAddModalValidation } from "../../Schema/GateSchema/GateAddModalSchema";
import EditIcon from "@mui/icons-material/Edit";
const GateEditModal = ({visitDate}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit=()=>{
    console.log(formik.values)
  }
  const formik = useFormik({
    initialValues: {
        visitId:visitDate.visitId,
        visitReason:visitDate.visitReason, //ok
        visitType:visitDate.visitType, //from srs new field
        
        visitor:{
        cardId:visitDate.visitor.cardId, //identityCard ==>visitor.cardId
        name:visitDate.visitor.name   //visitorName ==> visitor.name
      },
      entity:{
        name:visitDate.entity.name,  // new fieldAdd sourcePlace  هل دروب داون ولا انبت عادي
        entityType:visitDate.entity.entityType //types is known in srs sourcePlace ==> entity.entityType
      },
      car:{
        driverName:visitDate.car.driverName, //ok
        type:visitDate.car.type,  //from srs new field
        condition:visitDate.car.condition, //from srs new field radio field
        name:visitDate.car.name, //carType =>car.name
        firstPlateNumber:visitDate.car.firstPlateNumber,
        secondPlateNumber:visitDate.car.secondPlateNumber //secind num
      }
    },
    validationSchema: GateAddModalValidation,
    onSubmit
  });
  return (
    <>
      <Button
        variant="contained"
        color="warning"
        endIcon={<EditIcon />}
        className="mx-2 my-2"
        onClick={handleClickOpen}
      >
        <span className="mx-2">تعديل</span>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={true}
        >
           <div className={styles.common__Modal}>

      <DialogTitle id="alert-dialog-title" className="text-center pt-0">
      <img             
      src="/src/assets/egyptLogo.png"
      alt="Egypt"
      width={150}
      className="my-4"
      />
      </DialogTitle>
      <DialogContent>

        <form action="" onSubmit={formik.handleSubmit}>
          
                  {/* اسم الزائر */}
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-2">اسم الزائر</label>
                  <div className="col-10">
                  <InputBase fullWidth  name='visitor.name'value={formik.values.visitor.name} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder="ادخل اسم الزائر" className={formik.errors.visitor?.name && formik.touched.visitor?.name ?`${styles.error__field}`:`${styles.normal__field}`}/>
                  </div>
                </span>
                  {formik.errors.visitor?.name && formik.touched.visitor?.name && <p className={styles.error}>{formik.errors.visitor.name}</p>}

                  {/* رقم البطاقة */}
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3 col-2">رقم البطاقة</label>
                  <div className="col-10">
                  <InputBase fullWidth name="visitor.cardId" dir="rtl" value={formik.values.visitor.cardId} onChange={formik.handleChange}  onBlur={formik.handleBlur} placeholder="ادخل رقم البطاقة"
                  className={formik.errors.visitor?.cardId && formik.touched.visitor?.cardId?`${styles.error__field}`:`${styles.normal__field}`} 
                  type="number"
                  />
                  </div>
                </span>
                  {formik.errors.visitor?.cardId && formik.touched.visitor?.cardId && <p className={styles.error}>{formik.errors.visitor.cardId}</p>}

                  {/* نوع الزيارة */}

                  <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" col-2"> نوع الزيارة</label>
                  <FormControl variant="filled" fullWidth={true}>
                  <Select
                        labelId="demo-simple-select-standard-label2"
                        id="demo-simple-select-standard2"
                        name="visitType"
                        value={formik.values.visitType} 
                        onChange={formik.handleChange}
                        error={formik.errors.visit?.visitType && formik.touched.visit?.visitType}
                        onBlur={formik.handleBlur}
                        >
                        <MenuItem value={'زيارة قمح'} name='visit'id='a'>زيارة قمح</MenuItem>
                        <MenuItem value={'زيارة عادية'} name='visit'id='aa'>زيارة عادية</MenuItem>
                        <MenuItem value={'زيارة معدات'} name='visit'id='aaa'>زيارة معدات</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                {formik.errors.visit?.visitType && formik.touched.visit?.visitType && <p className={styles.error}>{formik.errors.visitType}</p>}

{/* اسم السائق */}

                  <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">اسم السائق</label>
                  <InputBase fullWidth  name="car.driverName" dir="rtl" value={formik.values.car.driverName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="ادخل اسم السائق"
                  className={formik.errors.car?.driverName && formik.touched.car?.driverName?`${styles.error__field}`:`${styles.normal__field}`}
                  />
                </span>
                  {formik.errors.car?.driverName && formik.touched.car?.driverName && <p className={styles.error}>{formik.errors.car.driverName}</p>}

{/* رقم السيارة */}
                <span className="d-flex flex-row justify-content-between align-items-center">
                  <label htmlFor="" className=" my-3 col-2">رقم السيارة</label>
                  <div className="col-10 d-flex flex-row justify-content-between">
                  <InputBase placeholder="الرقم الاول" value={formik.values.car.firstPlateNumber} onChange={formik.handleChange} name="car.firstPlateNumber"
                  className={`col-5 ${formik.errors.car?.firstPlateNumber && formik.touched.car?.firstPlateNumber?`${styles.error__field}`:`${styles.normal__field}`}`}
                  onBlur={formik.handleBlur}
                  type="number"
                  />
                  <InputBase  placeholder="الرقم الثاني" value={formik.values.car.secondPlateNumber} onChange={formik.handleChange} name="car.secondPlateNumber"
                  className={`col-5 ${formik.errors.car?.secondPlateNumber && formik.touched.car?.secondPlateNumber?`${styles.error__field}`:`${styles.normal__field}`}`}
                  onBlur={formik.handleBlur}
                  type="number"
                  />
                  </div>
                </span>
                   {(formik.errors.car?.firstPlateNumber || formik.errors.car?.secondPlateNumber) && (formik.touched.car?.firstPlateNumber || formik.touched.car?.secondPlateNumber)&& <p className={styles.error}>برجاء ادخال رقم سيارة صحيح</p>}
                  {/* نوع السيارة */}
                  <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">اسم السيارة</label>
                  <InputBase fullWidth name="car.name" dir="rtl" value={formik.values.car.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.car?.name && formik.touched.car?.name?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل نوع السيارة"/>
                </span>
                  
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" col-2"> نوع السيارة</label>
                  <FormControl variant="filled" fullWidth={true}>
                  <Select
                        labelId="demo-simple-select-standard-label2"
                        id="demo-simple-select-standard2"
                        name="car.type"
                        value={formik.values.car.type} 
                        onChange={formik.handleChange}
                        error={formik.errors.car?.type && formik.touched.car?.type}
                        onBlur={formik.handleBlur}
                        >
                        <MenuItem value={'سيارة قمح'} name='visit'id='a'>سيارة قمح</MenuItem>
                        <MenuItem value={'سيارة عادية'} name='visit'id='aa'>سيارة عادية</MenuItem>
                        <MenuItem value={'سيارة معدات'} name='visit'id='aaa'>سيارة معدات</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                   {/*حالة السيارة  */}
                   <span className="d-flex flex-row align-items-center">
                  <label htmlFor="" className=" my-3 col-3">حالة السيارة</label>
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={formik.values.car.condition} 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      >
                            <FormControlLabel value="جيدة" control={<Radio />} label="جيدة" name="car.condition" />
                            <FormControlLabel value="سيئة" control={<Radio />} label="سيئة"  name="car.condition" />
                    </RadioGroup>
                </span>

            {/* الجهة التابع لها */}
                  <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" col-2">الجهة التابع لها</label>
                  <FormControl variant="filled" fullWidth={true}>
                  <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formik.values.entity.entityType} 
                        onChange={formik.handleChange}
                        label="الجهة التابع لها"
                        name='entity.entityType'
                        error={formik.errors.entity?.entityType && formik.touched.entity?.entityType}
                        onBlur={formik.handleBlur}
                        >
                        <MenuItem value={'مطاحن'} >مطاحن</MenuItem>
                        <MenuItem value={'هناجر'}>هناجر</MenuItem>
                        <MenuItem value={'اخري'}>اخري</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                {formik.errors.entity?.entityType && formik.touched.entity?.entityType && <p className={styles.error}>{formik.errors.entity.entityType}</p>}
                
                 {/* اسم الجهة  */}
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">اسم الجهة التابع لها</label>
                  <InputBase fullWidth name="entity.name" dir="rtl" value={formik.values.entity.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.entity?.name && formik.touched.entity?.name?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل نوع السيارة"/>
                </span>
                {formik.errors.entity?.name && formik.touched.entity?.name && <p className={styles.error}>{formik.errors.entity.name}</p>}


                {/* سبب الزيارة */}

                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-2"> سبب الزيارة</label>
                  <InputBase fullWidth  name="visitReason" value={formik.values.visitReason} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.visit?.visitReason && formik.touched.visit?.visitReason?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل سبب الزيارة"/>
                </span>
                {formik.errors.visit?.visitReason && formik.touched.visit?.visitReason && <p className={styles.error}>{formik.errors.visitReason}</p>}
                <div className="d-flex flex-row my-3 justify-content-end">
                <DialogActions className="d-flex p-0">
                  <Button type="submit"  variant="contained" className={styles.create__visit__btn} color="success">حفظ</Button>
                  <Button onClick={handleClose} variant="contained" className={`me-3 ms-0 ${styles.create__visit__btn}`} color="error">
                    الغاء
                  </Button>
                </DialogActions>
                </div>
        </form>
</DialogContent>
      </div>
        </Dialog>
      </>
  );
};

export default GateEditModal;

import { useState } from "react";
import styles from "./GateTable.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
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

  const formik=useFormik({
    initialValues:{
      visitorName:visitDate.visitorName,
      identityCard:visitDate.identityCard,
      driverName:visitDate.driverName,
      firstNum:'',
      secondNum:'',
      thirdNum:'',
      carType:visitDate.carType,
      visitType:visitDate.visitType,
      sourcePlace:visitDate.sourcePlace,
      resoneOfvisit:visitDate.resoneOfvisit,
    },
    validationSchema:GateAddModalValidation
  })
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
          <DialogTitle id="alert-dialog-title" className="text-center pt-0">
            <img src="http://www.msit.gov.eg/assets/images/20230508103156916.jpg" alt="Egypt" width={80}/>
          </DialogTitle>
          <DialogContent>
          <form action="" onSubmit={formik.handleSubmit}>
                <span className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className="col-2">اسم الزائر</label>
                  <div className="col-10">
                  <TextField fullWidth error={formik.errors.visitorName && formik.touched.visitorName} id="visitorName" dir="rtl" value={formik.values.visitorName} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.visitorName && formik.touched.visitorName?`${styles.error__field}`:""} placeholder="ادخل اسم الزائر"/>
                  </div>
                </span>
                  {formik.errors.visitorName && formik.touched.visitorName && <p className={styles.error}>{formik.errors.visitorName}</p>}
                  

                <span className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" my-2 col-2">رقم البطاقة</label>
                  <div className="col-10">
                  <TextField fullWidth  error={formik.errors.identityCard && formik.touched.identityCard} id="identityCard" dir="rtl" value={formik.values.identityCard} onChange={formik.handleChange}  onBlur={formik.handleBlur} placeholder="ادخل رقم البطاقة"type="number"/>
                  </div>
                </span>
                  {formik.errors.identityCard && formik.touched.identityCard && <p className={styles.error}>{formik.errors.identityCard}</p>}
                <span className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" my-2  col-2">اسم السائق</label>
                  <TextField fullWidth error={formik.errors.driverName && formik.touched.driverName} id="driverName" dir="rtl" value={formik.values.driverName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="ادخل اسم السائق"/>
                </span>
                  {formik.errors.driverName && formik.touched.driverName && <p className={styles.error}>{formik.errors.driverName}</p>}

                <span className="d-flex flex-row justify-content-between align-items-center">
                  <label htmlFor="" className=" my-2 col-2">رقم السيارة</label>
                  <div className="col-10 d-flex flex-row justify-content-between">
                  <TextField  dir="rtl" className="col-3" label="الرقم الاول" value={formik.values.firstNum} onChange={formik.handleChange} name="firstNum"/>
                  <TextField dir="rtl" className="col-3" label="الرقم الثاني" value={formik.values.secondNum} onChange={formik.handleChange} name="secondNum"/>
                  <TextField  dir="rtl" className="col-3" label="الرقم الثالث" value={formik.values.thirdNum} onChange={formik.handleChange} name="thirdNum"/>
                  </div>
                </span>

                <span className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" my-2  col-2">نوع السيارة</label>
                  <TextField fullWidth id="carType" dir="rtl" value={formik.values.carType} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.carType && formik.touched.carType} placeholder="ادخل نوع السيارة"/>
                </span>
              
                <span className="d-flex flex-row align-items-center">
                  <label htmlFor="" className=" my-2 col-3">نوع الزيارة</label>
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={formik.values.visitType} 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                            <FormControlLabel value="عادية" control={<Radio />} label="عادية" name="visitType" />
                            <FormControlLabel value="قمح" control={<Radio />} label="قمح"  name="visitType" />
                            <FormControlLabel value="معدات" control={<Radio />} label="معدات"  name="visitType" />
                    </RadioGroup>
                </span>
                    {formik.errors.visitType && formik.touched.visitType && <p className={styles.error}>{formik.errors.visitType}</p>}
                
                <span className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" col-2">الجهة التابع لها</label>
                  <FormControl variant="filled" fullWidth={true}>
                  <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formik.values.sourcePlace} 
                        onChange={formik.handleChange}
                        label="Age"
                        name='sourcePlace'
                        error={formik.errors.sourcePlace && formik.touched.sourcePlace}
                        onBlur={formik.handleBlur}
                      >
                        <MenuItem value={'مطاحن بنها'} name='mile'id='a'>مطحن بنها</MenuItem>
                        <MenuItem value={'مطاحن منوف'} name='mile'id='b'>مطاحن منوف</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                {formik.errors.sourcePlace && formik.touched.sourcePlace && <p className={styles.error}>{formik.errors.sourcePlace}</p>}

                <span className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className="col-2"> سبب الزيارة</label>
                  <TextField fullWidth  id="resoneOfvisit" dir="rtl"  value={formik.values.resoneOfvisit} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.resoneOfvisit && formik.touched.resoneOfvisit} placeholder="ادخل سبب الزيارة"/>
                </span>
                {formik.errors.resoneOfvisit && formik.touched.resoneOfvisit && <p className={styles.error}>{formik.errors.resoneOfvisit}</p>}
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
        </Dialog>
      </>
  );
};

export default GateEditModal;

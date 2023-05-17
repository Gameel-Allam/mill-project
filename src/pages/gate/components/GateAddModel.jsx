import { useState } from "react";
// import styles from "./GateTable.module.scss";
import styles from "./GateAddModal.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, FormControlLabel, InputBase,  MenuItem, Radio, RadioGroup, Select } from "@mui/material";
=======
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import { GateAddModalValidation } from "../../Schema/GateSchema/GateAddModalSchema";
const GateAddmodal = () => {
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
const formik=useFormik({
  initialValues:{
    visitorName:'',
    identityCard:'',
    driverName:'',
    firstNum:'',
    secondNum:'',
    thirdNum:'',
    carType:'',
    visitType:'',
    sourcePlace:'',
    otherSourcePlace:'',
    resoneOfvisit:'',

  },
  validationSchema:GateAddModalValidation,
  onSubmit
})
  const formik = useFormik({
    initialValues: {
      visitorName: "",
      identityCard: "",
      driverName: "",
      firstNum: "",
      secondNum: "",
      thirdNum: "",
      carType: "",
      visitType: "",
      sourcePlace: "",
      resoneOfvisit: "",
    },
    validationSchema: GateAddModalValidation,
  });
  return (
    <>
      <Button
        variant="contained"
        className={`my-3 ${styles.create__visit__btn}`}
        onClick={handleClickOpen}
        endIcon={<AddIcon />}
      >
        <span className="mx-2">اضافة</span>
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
            src="http://www.msit.gov.eg/assets/images/20230508103156916.jpg"
            alt="Egypt"
            width={80}
          />
        </DialogTitle>
        <DialogContent>
              <form action="" onSubmit={formik.handleSubmit}>
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-2">اسم الزائر</label>
                  <div className="col-10">
                  <InputBase fullWidth  id="visitorName" dir="rtl" value={formik.values.visitorName} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.visitorName && formik.touched.visitorName?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل اسم الزائر"/>
                  </div>
                </span>
                  {formik.errors.visitorName && formik.touched.visitorName && <p className={styles.error}>{formik.errors.visitorName}</p>}
                  

                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3 col-2">رقم البطاقة</label>
                  <div className="col-10">
                  <InputBase fullWidth id="identityCard" dir="rtl" value={formik.values.identityCard} onChange={formik.handleChange}  onBlur={formik.handleBlur} placeholder="ادخل رقم البطاقة"
                  className={formik.errors.identityCard && formik.touched.identityCard?`${styles.error__field}`:`${styles.normal__field}`} 
                  type="number"
                  />
                  </div>
                </span>
                  {formik.errors.identityCard && formik.touched.identityCard && <p className={styles.error}>{formik.errors.identityCard}</p>}
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">اسم السائق</label>
                  <InputBase fullWidth  id="driverName" dir="rtl" value={formik.values.driverName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="ادخل اسم السائق" name="driverName"
                  className={formik.errors.driverName && formik.touched.driverName?`${styles.error__field}`:`${styles.normal__field}`}
                  />
                </span>
                  {formik.errors.driverName && formik.touched.driverName && <p className={styles.error}>{formik.errors.driverName}</p>}

                <span className="d-flex flex-row justify-content-between align-items-center">
                  <label htmlFor="" className=" my-3 col-2">رقم السيارة</label>
                  <div className="col-10 d-flex flex-row justify-content-between">
                  <InputBase  dir="rtl" placeholder="الرقم الاول" value={formik.values.firstNum} onChange={formik.handleChange} name="firstNum"
                  className={`col-3 ${formik.errors.firstNum && formik.touched.firstNum?`${styles.error__field}`:`${styles.normal__field}`}`}
                  onBlur={formik.handleBlur}
                  type="number"
                  />
                  <InputBase dir="rtl" placeholder="الرقم الثاني" value={formik.values.secondNum} onChange={formik.handleChange} name="secondNum"
                  className={`col-3 ${formik.errors.secondNum && formik.touched.secondNum?`${styles.error__field}`:`${styles.normal__field}`}`}
                  onBlur={formik.handleBlur}
                  type="number"
                  />
                  <InputBase  dir="rtl" placeholder="الرقم الثالث" value={formik.values.thirdNum} onChange={formik.handleChange} name="thirdNum"
                   className={`col-3 ${formik.errors.thirdNum && formik.touched.thirdNum?`${styles.error__field}`:`${styles.normal__field}`}`}
                   onBlur={formik.handleBlur}
                   type="number"
                   />
                  </div>
                </span>
                   {(formik.errors.firstNum || formik.errors.secondNum || formik.errors.thirdNum) && (formik.touched.firstNum || formik.touched.secondNum || formik.touched.thirdNum)&& <p className={styles.error}>برجاء ادخال رقم سيارة صحيح</p>}

                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">نوع السيارة</label>
                  <InputBase fullWidth id="carType" dir="rtl" value={formik.values.carType} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.carType && formik.touched.carType?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل نوع السيارة"/>
                </span>
              
                <span className="d-flex flex-row align-items-center">
                  <label htmlFor="" className=" my-3 col-3">نوع الزيارة</label>
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
                
                <span className="d-flex flex-row my-3 align-items-center">
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
                        <MenuItem value={'مطاحن منوف'} name='mile'id='a'>مطحن منوف</MenuItem>
                        <MenuItem value={'اخري'} name='mile'id='a'>اخري</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                {formik.errors.sourcePlace && formik.touched.sourcePlace && <p className={styles.error}>{formik.errors.sourcePlace}</p>}

                {formik.values.sourcePlace=='اخري'?
                <>
                <span className="d-flex flex-row my-3 align-items-center">
                <label htmlFor="" className=" my-3  col-2">الجهة او المؤسسة</label>
                <InputBase fullWidth id="otherSourcePlace" dir="rtl" value={formik.values.otherSourcePlace} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.otherSourcePlace && formik.touched.otherSourcePlace?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل  الجهة التابع لها" name="otherSourcePlace"/>
              </span>
              {formik.errors.otherSourcePlace && formik.touched.otherSourcePlace && <p className={styles.error}>{formik.errors.otherSourcePlace}</p>}
                </>
                :
                ""
              }

                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-2"> سبب الزيارة</label>
                  <InputBase fullWidth  id="resoneOfvisit" dir="rtl"  value={formik.values.resoneOfvisit} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.errors.resoneOfvisit && formik.touched.resoneOfvisit?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل سبب الزيارة"/>
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
          {/* <DialogContentText id="alert-dialog-description"> */}
          <form action="">
            <span className="d-flex flex-row my-2 align-items-center">
              <label htmlFor="" className="col-2">
                اسم الزائر
              </label>
              <TextField
                fullWidth
                label="اسم الزائر"
                id="visitorName"
                dir="rtl"
                value={formik.values.visitorName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </span>

            <span className="d-flex flex-row my-2 align-items-center">
              <label htmlFor="" className=" my-2  col-2">
                رقم البطاقة
              </label>
              <TextField
                fullWidth
                label="رقم البطاقة"
                id="identityCard"
                dir="rtl"
                value={formik.values.identityCard}
                onChange={formik.handleChange}
              />
            </span>

            <span className="d-flex flex-row my-2 align-items-center">
              <label htmlFor="" className=" my-2  col-2">
                اسم السائق
              </label>
              <TextField
                fullWidth
                label="اسم السائق"
                id="driverName"
                dir="rtl"
                value={formik.values.driverName}
                onChange={formik.handleChange}
              />
            </span>

            <span className="d-flex flex-row justify-content-between align-items-center">
              <label htmlFor="" className=" my-2 col-2">
                رقم السيارة
              </label>
              <TextField
                label="الرقم الاول"
                id="firstnum"
                dir="rtl"
                className="col-3"
                value={formik.values.firstNum}
                onChange={formik.handleChange}
                name="firstnum"
              />
              <TextField
                label="الرقم الثاني"
                id="secondnum"
                dir="rtl"
                className="mx-4 col-3"
                value={formik.values.secondNum}
                onChange={formik.handleChange}
              />
              <TextField
                label="الرقم الثالث"
                id="thirdnum"
                dir="rtl"
                className="col-3"
                value={formik.values.thirdNum}
                onChange={formik.handleChange}
              />
            </span>

            <span className="d-flex flex-row my-2 align-items-center">
              <label htmlFor="" className=" my-2  col-2">
                نوع السيارة
              </label>
              <TextField
                fullWidth
                label="نوع السيارة"
                id="carType"
                dir="rtl"
                value={formik.values.carType}
                onChange={formik.handleChange}
              />
            </span>

            <span className="d-flex flex-row align-items-center">
              <label htmlFor="" className=" my-2 col-3">
                نوع الزيارة
              </label>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={formik.values.visitType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <FormControlLabel
                  value="normal"
                  control={<Radio />}
                  label="عادية"
                  name="visitType"
                />
                <FormControlLabel
                  value="wheat"
                  control={<Radio />}
                  label="قمح"
                  name="visitType"
                />
                <FormControlLabel
                  value="equipment"
                  control={<Radio />}
                  label="معدات"
                  name="visitType"
                />
              </RadioGroup>
            </span>

            <span className="d-flex flex-row my-2 align-items-center">
              <label htmlFor="" className=" col-2">
                الجهة التابع لها
              </label>
              <FormControl variant="filled" fullWidth={true}>
                <InputLabel id="demo-simple-select-standard-label">
                  الجهة التابع الها
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formik.values.sourcePlace}
                  onChange={formik.handleChange}
                  label="Age"
                  name="sourcePlace"
                >
                  {/* <MenuItem value="">
                        <em>غير ذلك</em>
                      </MenuItem> */}
                  <MenuItem value={"مطاحن بنها"} name="mile" id="a">
                    مطحن بنها
                  </MenuItem>
                  <MenuItem value={20} name="mile" id="b">
                    مطاحن منوف
                  </MenuItem>
                  <MenuItem value={30} name="mile" id="c">
                    مطاحن شبين
                  </MenuItem>
                </Select>
              </FormControl>
            </span>

            <span className="d-flex flex-row my-2 align-items-center">
              <label htmlFor="" className="col-2">
                {" "}
                سبب الزيارة
              </label>
              <TextField
                fullWidth
                label="سبب الزيارة"
                id="resoneOfvisit"
                dir="rtl"
                value={formik.values.resoneOfvisit}
                onChange={formik.handleChange}
              />
            </span>
            <div className="d-flex flex-row my-3 justify-content-end">
              <DialogActions className="d-flex p-0">
                <Button
                  onClick={handleClose}
                  variant="contained"
                  className={styles.create__visit__btn}
                >
                  حفظ
                </Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  className={`me-3 ms-0 ${styles.create__visit__btn}`}
                >
                  الغاء
                </Button>
              </DialogActions>
            </div>
          </form>
          {/* </DialogContentText> */}
        </DialogContent>
              </div>
      </Dialog>
    </>
  );
};

export default GateAddmodal;

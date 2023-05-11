import { useState } from "react";
import styles from "./GateTable.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
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
            <DialogContentText id="alert-dialog-description">
                <form action="">
                  <span className="d-flex flex-row my-2 align-items-center">
                    <label htmlFor="" className="col-2">اسم الزائر</label>
                    <TextField fullWidth label="اسم الزائر" id="visitorName" dir="rtl" value={formik.values.visitorName} onChange={formik.handleChange} onBlur={formik.handleBlur}/> 
                  </span>
  
                  <span className="d-flex flex-row my-2 align-items-center">
                    <label htmlFor="" className=" my-2  col-2">رقم البطاقة</label>
                    <TextField fullWidth label="رقم البطاقة" id="identityCard" dir="rtl" value={formik.values.identityCard} onChange={formik.handleChange}/>
                  </span>
  
                  <span className="d-flex flex-row my-2 align-items-center">
                    <label htmlFor="" className=" my-2  col-2">اسم السائق</label>
                    <TextField fullWidth label="اسم السائق" id="driverName" dir="rtl" value={formik.values.driverName} onChange={formik.handleChange}/>
                  </span>
  
                  <span className="d-flex flex-row justify-content-between align-items-center">
                    <label htmlFor="" className=" my-2 col-2">رقم السيارة</label>
                    <TextField label="الرقم الاول" id="firstnum" dir="rtl" className="col-3"  value={formik.values.firstNum} onChange={formik.handleChange} name="firstnum"/>
                    <TextField label="الرقم الثاني" id="secondnum" dir="rtl" className="mx-4 col-3"  value={formik.values.secondNum} onChange={formik.handleChange}/>
                    <TextField label="الرقم الثالث" id="thirdnum" dir="rtl" className="col-3"  value={formik.values.thirdNum} onChange={formik.handleChange}/>
                  </span>
  
                  <span className="d-flex flex-row my-2 align-items-center">
                    <label htmlFor="" className=" my-2  col-2">نوع السيارة</label>
                    <TextField fullWidth label="نوع السيارة" id="carType" dir="rtl" value={formik.values.carType} onChange={formik.handleChange}/>
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
                  
                  <span className="d-flex flex-row my-2 align-items-center">
                    <label htmlFor="" className=" col-2">الجهة التابع لها</label>
                    <FormControl variant="filled" fullWidth={true}>
                      <InputLabel id="demo-simple-select-standard-label">الجهة التابع الها</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={formik.values.sourcePlace} 
                        onChange={formik.handleChange}
                        label="Age"
                        name='sourcePlace'
                      >
                        {/* <MenuItem value="">
                          <em>غير ذلك</em>
                        </MenuItem> */}
                        <MenuItem value={'مطاحن بنها'} name='mile'id='a'>مطحن بنها</MenuItem>
                        <MenuItem value={20} name='mile'id='b'>مطاحن منوف</MenuItem>
                        <MenuItem value={30} name='mile'id='c'>مطاحن شبين</MenuItem>
                      </Select>
                    </FormControl>
                  </span>
  
                  <span className="d-flex flex-row my-2 align-items-center">
                    <label htmlFor="" className="col-2"> سبب الزيارة</label>
                    <TextField fullWidth label="سبب الزيارة" id="resoneOfvisit" dir="rtl"  value={formik.values.resoneOfvisit} onChange={formik.handleChange}/>
                  </span>
                  <div className="d-flex flex-row my-3 justify-content-end">
                  <DialogActions className="d-flex p-0">
                    <Button onClick={handleClose} variant="contained" className={styles.create__visit__btn}>حفظ</Button>
                    <Button onClick={handleClose} variant="contained" className={`me-3 ms-0 ${styles.create__visit__btn}`}>
                      الغاء
                    </Button>
                  </DialogActions>
                  </div>
                </form>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </>
  );
};

export default GateEditModal;

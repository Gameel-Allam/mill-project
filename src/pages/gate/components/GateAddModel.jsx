import { useState } from "react";
import styles from "./GateTable.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
const GateAddmodal = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
// should change by formik
const [age, setAge] = useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};
  return (
    <div>
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
        <DialogTitle id="alert-dialog-title" className="text-center">
          <img src="http://www.msit.gov.eg/assets/images/20230508103156916.jpg" alt="Egypt" width={80}/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <form action="">
                <div className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className="col-2">اسم الزائر</label>
                  <TextField fullWidth label="اسم الزائر" id="visitorName" dir="rtl"/>
                </div>

                <div className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" my-2  col-2">رقم البطاقة</label>
                  <TextField fullWidth label="رقم البطاقة" id="identityCard" dir="rtl"/>
                </div>

                <div className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" my-2  col-2">اسم السائق</label>
                  <TextField fullWidth label="اسم السائق" id="driverName" dir="rtl"/>
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center">
                  <label htmlFor="" className=" my-2 col-2">رقم السيارة</label>
                  <TextField label="الرقم الاول" id="firstnum" dir="rtl" className="col-3"/>
                  <TextField label="الرقم الثاني" id="secondnum" dir="rtl" className="mx-4 col-3"/>
                  <TextField label="الرقم الثالث" id="thirdnum" dir="rtl" className="col-3"/>
                </div>

                <div className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" my-2  col-2">نوع السيارة</label>
                  <TextField fullWidth label="نوع السيارة" id="carType" dir="rtl"/>
                </div>
                
                <div className="d-flex flex-row align-items-center">
                  <label htmlFor="" className=" my-2 col-3">نوع الزيارة</label>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                          <FormControlLabel value="normal" control={<Radio />} label="عادية" />
                          <FormControlLabel value="wheat" control={<Radio />} label="قمح" />
                          <FormControlLabel value="equipment" control={<Radio />} label="معدات" />
                  </RadioGroup>
                </div>
                
                <div className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className="col-2">اسم السائق</label>
                  <TextField fullWidth label="اسم السائق" id="driverName" dir="rtl" />
                </div>

                <div className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className=" col-2">الجهة التابع لها</label>
                  <FormControl variant="filled" fullWidth={true}>
                    <InputLabel id="demo-simple-select-standard-label">الجهة التابع الها</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>مطحن بنها</MenuItem>
                      <MenuItem value={20}>مطاحن منوف</MenuItem>
                      <MenuItem value={30}>مطاحن شبين</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="d-flex flex-row my-2 align-items-center">
                  <label htmlFor="" className="col-2"> سبب الزيارة</label>
                  <TextField fullWidth label="سبب الزيارة" id="driverName" dir="rtl" />
                </div>
              </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>حفظ</Button>
          <Button onClick={handleClose} autoFocus>
            الغاء
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GateAddmodal;

import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import styles from './ScaleEditModal.module.scss';
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import {FormControlLabel,Radio, RadioGroup} from "@mui/material";
import { useFormik } from "formik";
import { ScaleAddModalValidation } from "../../../Schema/ScaleSchema/ScaleAddModalSchema";
import EditIcon from '@mui/icons-material/Edit';
const ScaleEditModal = ({visitDate}) => {
  const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

   const formik=useFormik({
    initialValues:{
      weightSerialNumber:visitDate.weightSerialNumber,
      carWeightEmpty:visitDate.carWeightEmpty,
      carWeightWithLoad:visitDate.carWeightWithLoad,
      loadRealWeight:visitDate.loadRealWeight,
      typeOfOperation:visitDate.typeOfOperation,
    },
    validationSchema:ScaleAddModalValidation
  })
  console.log(visitDate)
    return (
      <>
    <Button variant="contained" color="warning" endIcon={<EditIcon/>} className='mx-2 my-2' onClick={handleClickOpen} >
      <span className='mx-2'>تعديل</span>
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
                <form action="">
                  <span className="d-flex flex-row my-2 align-items-center my-5">
                    <label htmlFor="" className="col-2">رقم كارت الوزن</label>
                    <TextField fullWidth label="رقم كارت الوزن" id="weightSerialNumber" dir="rtl" value={formik.values.weightSerialNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/> 
                  </span>
  
                  <span className="d-flex flex-row justify-content-start align-items-center my-5">
                    <label htmlFor="" className=" my-2 col-2">وزن السيارة</label>
                    <TextField label="الوزن الفارغ" id="carWeightEmpty" dir="rtl" className="col-3"  value={formik.values.carWeightEmpty} onChange={formik.handleChange} name="carWeightEmpty"/>
                    <TextField label="الوزن القائم" id="carWeightWithLoad" dir="rtl" className="mx-4 col-3"  value={formik.values.carWeightWithLoad} onChange={formik.handleChange}/>
                  </span>                    
                  <span className="d-flex flex-row align-items-center my-5">
                    <label htmlFor="" className=" my-2 col-2">نوع العملية</label>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={formik.values.typeOfOperation} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                              <FormControlLabel value="صادر محلي" control={<Radio />} label="صادر محلي " name="typeOfOperation" />
                              <FormControlLabel value=" وارد محلي" control={<Radio />} label="وارد محلي"  name="typeOfOperation" />
                                <div className="w-100"></div>
                              <FormControlLabel value= "صادر مستورد" control={<Radio />} label="صادر مستورد "  name="typeOfOperation" />
                              <FormControlLabel value="وارد مستورد" control={<Radio />} label="وارد مستورد"  name="typeOfOperation" />
                      </RadioGroup>
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
          </DialogContent>
        </Dialog>
      </>
  )
}
export default ScaleEditModal
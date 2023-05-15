import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import styles from './ScaleAddModal.module.scss';
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import TextField from '@mui/material/TextField';
import {FormControlLabel,Radio, RadioGroup} from "@mui/material";
import { useFormik } from "formik";
import { ScaleAddModalValidation } from "../../../Schema/ScaleSchema/ScaleAddModalSchema";

const ScaleAddModal = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const formik=useFormik({
      initialValues:{
        weightSerialNumber:'',
        carWeightEmpty:'',
        carWeightWithLoad:'',
        loadRealWeight:'',
        typeOfOperation:'',
      },
      validationSchema:ScaleAddModalValidation
    })
    console.log(formik.values)
      return (
        <>
          <Button
            variant="text"
            className={`my-3 ${styles.create__visit__btn}`}
            onClick={handleClickOpen}
            endIcon={<AddIcon />}
            color="success"
          >
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
          >
            <div className={styles.visit__Modal}> 

            <DialogTitle id="alert-dialog-title" className="text-center pt-0">
              <img src="http://www.msit.gov.eg/assets/images/20230508103156916.jpg" alt="Egypt" width={80}/>
            </DialogTitle>
            <DialogContent>
                  <form action="">
                    <span className="d-flex flex-row my-2 align-items-center my-5">
                      <label htmlFor="" className="col-2 mx-2">رقم كارت الوزن</label>
                      <TextField fullWidth  id="weightSerialNumber" dir="rtl" value={formik.values.weightSerialNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.weightSerialNumber && formik.touched.weightSerialNumber} className={styles.input__field}/> 
                    </span>
                    {formik.errors.weightSerialNumber && formik.touched.weightSerialNumber && <p className={styles.error}>{formik.errors.weightSerialNumber}</p>}
                    <span className="d-flex flex-row justify-content-start align-items-center my-5">
                      <label htmlFor="" className=" my-2 col-2 mx-2">وزن السيارة</label>
                      <TextField  id="carWeightEmpty" dir="rtl" className="col-3"  value={formik.values.carWeightEmpty} onChange={formik.handleChange} name="carWeightEmpty"/>
                      <TextField  id="carWeightWithLoad" dir="rtl" className="mx-4 col-3"  value={formik.values.carWeightWithLoad} onChange={formik.handleChange}/>
                    </span>                    
                    <span className="d-flex flex-row align-items-center my-5">
                      <label htmlFor="" className=" my-2 col-2 mx-2">نوع العملية</label>
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
                              <FormControlLabel value= "صادر مستورد  " control={<Radio />} label="صادر مستورد"  name="typeOfOperation" />
                              <FormControlLabel value=" وارد مستورد " control={<Radio />} label="وارد مستورد"  name="typeOfOperation" />
                      </RadioGroup>
                    </span>
                    <div className="d-flex flex-row my-3 justify-content-end">
                    <DialogActions className="d-flex p-0">
                      <Button onClick={handleClose} variant="contained" color="success"className={styles.create__visit__btn}>حفظ</Button>
                      <Button onClick={handleClose} variant="contained" className={`me-3 ms-0 ${styles.create__visit__btn}`}>
                        الغاء
                      </Button>
                    </DialogActions>
                    </div>
                  </form>
            </DialogContent>
                        </div>
          </Dialog>
        </>
  )
}

export default ScaleAddModal
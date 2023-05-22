import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import styles from './ScaleAddModal.module.scss';
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import {FormControl, FormControlLabel,InputBase,InputLabel,MenuItem,Radio, RadioGroup, Select} from "@mui/material";
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
    // SendTo 
    const onSubmit=()=>{
      console.log(formik.values)
    }
    const [loss,setLoss]=useState('')
    const calculateLoss=()=>{
      setLoss('10كيلو')
      formik.values.lossInWheat=loss
    }
    const formik=useFormik({
      initialValues:{
        weightSerialNumber:'',
        carWeightEmpty:'',
        carWeightWithLoad:'',
        typeOfOperation:'',
        portRealWeight:'',
        lossInWheat:loss,
        weightUnit:''
      },
      validationSchema:ScaleAddModalValidation,
      onSubmit
    })
        // calculate loss in wheat 

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
            <div className={styles.common__Modal}> 

            <DialogTitle id="alert-dialog-title" className="text-center pt-0">
              <img src="/src/assets/egyptLogo.png" alt="Egypt" width={80}/>
            </DialogTitle>
            <DialogContent>
                  <form action=""  onSubmit={formik.handleSubmit}>
                    <span className="d-flex flex-row my-2 align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">رقم كارت الوزن</label>
                      <InputBase fullWidth  id="weightSerialNumber" dir="rtl" value={formik.values.weightSerialNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.weightSerialNumber && formik.touched.weightSerialNumber} 
                      placeholder="ادخل رقم كارت الوزن"
                      className={formik.errors.weightSerialNumber && formik.touched.weightSerialNumber?`${styles.error__field}`:`${styles.normal__field}`}
                      type="number"
                      /> 
                    </span>
                    {formik.errors.weightSerialNumber && formik.touched.weightSerialNumber && <p className={styles.error}>{formik.errors.weightSerialNumber}</p>}

                    <span className="d-flex flex-row justify-content-start align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">وزن السيارة</label>
                      <InputBase  id="carWeightEmpty" dir="rtl" value={formik.values.carWeightEmpty} onChange={formik.handleChange} name="carWeightEmpty"
                      className={`col-3 ${formik.errors.carWeightEmpty && formik.touched.carWeightEmpty?`${styles.error__field}`:`${styles.normal__field}`}`}
                      onBlur={formik.handleBlur}
                      placeholder="الوزن الفارغ"
                      type="number"
                      />

                      <InputBase  id="carWeightWithLoad" dir="rtl" value={formik.values.carWeightWithLoad} onChange={formik.handleChange}
                      className={`mx-3 col-3 ${formik.errors.carWeightWithLoad && formik.touched.carWeightWithLoad?`${styles.error__field}`:`${styles.normal__field}`}`}
                      onBlur={formik.handleBlur}
                      placeholder="الوزن القائم"
                      type="number"
                      />

                  <span className="d-flex flex-row col-3 align-items-center">
                  <FormControl variant="filled" fullWidth={true}>
                  <InputLabel id="demo-simple-select-standard-label">وحدة القياس</InputLabel>
                  <Select
                        labelId="demo-simple-select-standard-label"
                        id="weightUnit"
                        value={formik.values.weightUnit} 
                        onChange={formik.handleChange}
                        name='weightUnit'
                        error={formik.errors.weightUnit && formik.touched.weightUnit}
                        onBlur={formik.handleBlur}
                        placeholder="وحدة القياس"
                        >
                        <MenuItem value={'الكيلو'} >الكيلو</MenuItem>
                        <MenuItem value={'الطن'}>الطن</MenuItem>
                        <MenuItem value={'الجرام'}>الجرام</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                    </span>   
                    {(formik.errors.carWeightEmpty ||formik.errors.carWeightWithLoad) && (formik.touched.carWeightEmpty ||formik.touched.carWeightWithLoad) && <p className={styles.error}>برجاء ادخال وزن السيارة فارغة والوزن القائم وتحديد وحدة القياس</p>}
{/* العجز */}
                    <span className="d-flex flex-row align-items-center mt-5">
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
                              <FormControlLabel value=" وارد محلي" control={<Radio />} label="وارد محلي"  name="typeOfOperation" className="mx-4"/>
                                <div className="w-100"></div>
                              <FormControlLabel value= "صادر مستورد  " control={<Radio />} label="صادر مستورد"  name="typeOfOperation" />
                              <FormControlLabel value="وارد مستورد" control={<Radio />} label="وارد مستورد"  name="typeOfOperation" className="mx-3"/>
                      </RadioGroup>
                    </span>
                    {formik.errors.typeOfOperation && formik.touched.typeOfOperation && <p className={styles.error}>{formik.errors.typeOfOperation}</p>}

                    {
                      formik.values.typeOfOperation==="وارد مستورد"?
                      <>
                    <span className="d-flex flex-row justify-content-start align-items-center my-4">
                    <label htmlFor="" className="col-2 mx-2">وزن الميناء</label>
                    <InputBase  id="portRealWeight" dir="rtl" value={formik.values.portRealWeight} onChange={formik.handleChange} name="portRealWeight"
                    className={`col-3 ${formik.errors.portRealWeight && formik.touched.portRealWeight?`${styles.error__field}`:`${styles.normal__field}`}`}
                    onBlur={formik.handleBlur}
                    placeholder="وزن الشحن"
                    type="number"
                    />
                    </span>
                    {formik.errors.portRealWeight && formik.touched.portRealWeight && <p className={styles.error}>{formik.errors.portRealWeight}</p>}
                    <span className="d-flex flex-row justify-content-center align-items-center my-4 col-12">
                      <Button onClick={()=>calculateLoss()} variant="contained" color="info"className={`col-4 ${styles.calc__weight__btn}`}>احسب العجز </Button>
                    </span>
                      <span className="d-flex flex-row justify-content-start align-items-center my-3">
                      <label htmlFor="" className="col-2 mx-2">العجز</label>
                      <InputBase  id="lossInWheat" dir="rtl" value={formik.values.lossInWheat} 
                      onChange={formik.handleChange} 
                      name="lossInWheat"
                      className={`col-3 ${styles.disabled__field}`}
                      onBlur={formik.handleBlur}
                      disabled
                      />
                    </span>
                      </>
                      :
                      ""
                    }
                    <div className="d-flex flex-row my-3 justify-content-end">
                    <DialogActions className="d-flex p-0">
                      <Button type="submit" variant="outlined" color="success"className={styles.create__visit__btn}>حفظ</Button>
                      <Button onClick={handleClose} variant="outlined" className={`me-3 ms-0 ${styles.create__visit__btn}`}>
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
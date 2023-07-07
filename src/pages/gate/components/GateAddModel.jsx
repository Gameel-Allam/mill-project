import { useState } from "react";
// import styles from "./GateTable.module.scss";
import styles from "./GateAddModal.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab, FormControl, FormControlLabel, InputBase,  InputLabel,  MenuItem,Radio,RadioGroup,Select } from "@mui/material";
import {FieldArray, Form, Formik, useFormik } from "formik";
import { PulseLoader} from "react-spinners";
import { GateAddModalValidation } from "../../Schema/GateSchema/GateAddModalSchema";
import { useDispatch } from "react-redux";
import { AddVisitData } from "../../../features/gate/GateActions";

const GateAddmodal = () => {

// ************ Handle Modal Open and Close ************
  const [open, setOpen] = useState(false);
  const date = new Date();
  const timestamp = date.toISOString();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch=useDispatch();
  const onSubmit=()=>{
    if(formik.isValid){
      console.log(formik.values)
      setTimeout(() => {
        dispatch(AddVisitData(formik.values))
        formik.resetForm()
        handleClose()
      }, 400);
    }
  }

const formik=useFormik({
  initialValues:{
          createdBy:"الحج محمود",
          createdOn: timestamp,
          visitReason:'', 
          visitType:'', 
        // visitor:{
        //   cardId:'', 
        //   name:''  
        // },
        // entity:{
          entityName:'',  
          entityType:'',
        // },
        drivernames:[''],
        cars:[{
          carType:'',  
          carCondition:'', 
          carName:'', 
          plateNumber:['',''], 
          // firstPlateNumber:'',
          // secondPlateNumber:'',
          // plateNumbers:''
          // driverName:'',
        }],
        visitors:[{visitorName:'',visitorCardId:''}],
        // car:{
        //   type:'',  
        //   condition:'', 
        //   name:'', 
        //   // plateNumber:['',''], 
        //   firstPlateNumber:'',
        //   secondPlateNumber:'',
        //   driverName:'',
        // },
      },
  validationSchema:GateAddModalValidation,
  onSubmit,
  isSubmitting:false
})
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
            src="/src/assets/egyptLogo.png"
            alt="Egypt"
            width={150}
            className="my-4"
          />
        </DialogTitle>
        <DialogContent>
        <Formik 
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
        onSubmit={formik.handleSubmit}
        validateOnBlur={true}
        validateOnChange={true}
        // validateOnMount={true}
        >
          <Form>
          
                  {/* اسم الزائر */}
                {/* <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-2">اسم الزائر</label>
                  <div className="col-10">
                  <InputBase 
                  fullWidth 
                  name='visitor.name'
                  {...formik.getFieldProps('visitor.name')} 
                  placeholder="ادخل اسم الزائر" 
                  className={formik.errors.visitor?.name && formik.touched.visitor?.name ?`${styles.error__field}`:`${styles.normal__field}`}
                  />
                  </div>
                </span>
                  {formik.errors.visitor?.name && formik.touched.visitor?.name && <p className={styles.error}>{formik.errors.visitor.name}</p>} */}
                
                  {/* رقم البطاقة */}
                {/* <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3 col-2">رقم البطاقة</label>
                  <div className="col-10">
                  <InputBase 
                  fullWidth 
                  name="visitor.cardId"  
                  {...formik.getFieldProps('visitor.cardId')}
                  placeholder="ادخل رقم البطاقة"
                  className={formik.errors.visitor?.cardId && formik.touched.visitor?.cardId?`${styles.error__field}`:`${styles.normal__field}`} 
                  type="number"
                  />
                  </div>
                </span>
                  {formik.errors.visitor?.cardId && formik.touched.visitor?.cardId && <p className={styles.error}>{formik.errors.visitor.cardId}</p>} */}

                {/* بيانات الزائر بعد التعديل */}
<               span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">بيانات الزائر</label>
                
                  <FieldArray name="visitors">
                    {
                      (filedArrayProps )=>{
                        const {push,remove,form} = filedArrayProps
                        const {values} = form
                        const {visitors} = values
                        return <div className="d-flex flex-column col-10">
                        {
                        visitors.map((visitor,index)=>(
                          <div key={index} className="col-12 ">
                            <InputBase  
                            fullWidth
                            name={`visitors[${index}].name`}
                            {...formik.getFieldProps(`visitors[${index}].visitorName`)} 
                            className={`col-10  my-3 ${formik.errors.visitors?.[index]?.visitorName && formik.touched.visitors?.[index]?.visitorName?`${styles.error__field}`:`${styles.normal__field}`}`} placeholder="ادخل اسم الزائر"
                            />
                            {formik.errors.visitors?.[index]?.visitorName && formik.touched.visitors?.[index]?.visitorName && <p className={styles.error}>{formik.errors.visitors?.[index]?.visitorName}</p>}
                            <InputBase  
                            fullWidth
                            name={`visitors[${index}].visitorCardId`}
                            {...formik.getFieldProps(`visitors[${index}].visitorCardId`)} 
                            className={`col-10 my-3 ${formik.errors.visitors?.[index]?.visitorCardId && formik.touched.visitors?.[index]?.visitorCardId?`${styles.error__field}`:`${styles.normal__field}`}`} placeholder="ادخل الرقم القومي"
                            type="number"
                            />
                            {formik.errors.visitors?.[index]?.visitorCardId && formik.touched.visitors?.[index]?.visitorCardId && <p className={styles.error}>{formik.errors.visitors?.[index]?.visitorCardId}</p>}
                            
                            <Fab color="primary" onClick={() => push({ visitorName: '', visitorCardId: '' })}>
                              <AddIcon />
                            </Fab>
                            {
                              index>0 && <Fab color="secondary" onClick={()=>remove(index)}>
                               <DeleteIcon/>
                              </Fab>
                            }
                          </div>
                        )
                        )
                        }
                        </div>
                      }
                    }
                  </FieldArray>
                </span>
                  {/* نوع الزيارة */}

                  <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" col-2"> نوع الزيارة</label>
                  <FormControl variant="filled" fullWidth={true}>
                  <Select
                        labelId="demo-simple-select-standard-label2"
                        id="demo-simple-select-standard2"
                        name="visitType"
                        {...formik.getFieldProps('visitType')}
                        error={formik.errors.visitType && formik.touched.visitType}
                        className={styles.drop__style}
                        >
                        <MenuItem value={'زيارة قمح'} name='visit'id='a'>زيارة قمح</MenuItem>
                        <MenuItem value={'زيارة عادية'} name='visit'id='aa'>زيارة عادية</MenuItem>
                        <MenuItem value={'زيارة معدات'} name='visit'id='aaa'>زيارة معدات</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                {formik.errors.visit?.visitType && formik.touched.visitType && <p className={styles.error}>{formik.errors.visitType}</p>}
                
                 {/* اسم الجهة  */}
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">اسم الجهة التابع لها</label>
                  <InputBase 
                  fullWidth 
                  name="entityName" 
                  {...formik.getFieldProps('entityName')} 
                  className={formik.errors.entityName && formik.touched.entityName?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل اسم الجهة التابع لها"
                  />
                </span>
                {formik.errors.entityName && formik.touched.entityName && <p className={styles.error}>{formik.errors.entityName}</p>}

                {/* سبب الزيارة */}

                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-2"> سبب الزيارة</label>
                  <InputBase 
                  fullWidth  
                  name="visitReason" 
                  {...formik.getFieldProps('visitReason')} 
                  className={formik.errors.visitReason && formik.touched.visitReason?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل سبب الزيارة"
                  />
                </span>
                {formik.errors.visitReason && formik.touched.visitReason && <p className={styles.error}>{formik.errors.visitReason}</p>}
                {/* الجهة التابع لها */}
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" col-2">الجهة التابع لها</label>
                  <FormControl variant="filled" fullWidth={true}>
                  <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="الجهة التابع لها"
                        name='entityType'
                        {...formik.getFieldProps('entityType')}
                        error={formik.errors.entityType && formik.touched.entityType}
                        >
                        <MenuItem value={'مطاحن'} >مطاحن</MenuItem>
                        <MenuItem value={'هناجر'}>هناجر</MenuItem>
                        <MenuItem value={'اخري'}>اخري</MenuItem>
                      </Select>
                    </FormControl>
                </span>
                {formik.errors.entityType && formik.touched.entityType && <p className={styles.error}>{formik.errors.entityType}</p>}
              {/* drivernames */}
              <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">بيانات سائق السيارة</label>
                
                  <FieldArray name="drivernames">
                    {
                      (filedArrayProps )=>{
                        const {push,remove,form} = filedArrayProps
                        const {values} = form
                        const {drivernames} = values
                        return <div className="d-flex flex-column col-10">
                        {
                        drivernames.map((driver,index)=>(
                          <div key={index} className="col-12 ">
                            <InputBase  
                            fullWidth
                            name={`drivernames[${index}]`}
                            {...formik.getFieldProps(`drivernames[${index}]`)} 
                            className={`col-10  my-3 ${formik.errors.drivernames?.[index] && formik.touched.drivernames?.[index]?`${styles.error__field}`:`${styles.normal__field}`}`} placeholder="ادخل اسم السائق"
                            />
                            <Fab color="primary" onClick={() => push('')}>
                              <AddIcon />
                            </Fab>
                            {
                              index>0 && <Fab color="secondary" onClick={()=>remove(index)}>
                               <DeleteIcon/>
                              </Fab>
                            }
                          </div>
                        )
                        )
                        }
                        </div>
                      }
                    }
                  </FieldArray>
                </span>
                {/* السيارة بعد التعديل */}
                <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-2"> بيانات السيارة</label>
                  <FieldArray name="cars">
                    {
                      (filedArrayProps )=>{
                        const {push,remove,form} = filedArrayProps
                        const {values} = form
                        const {cars} = values
                        return <div className="d-flex flex-column col-10">
                        {
                        cars.map((car,index)=>(
                          <div key={index} className="col-12 ">
                            {/* car name */}
                            <InputBase
                            fullWidth
                            name={`cars[${index}].carName`}
                            {...formik.getFieldProps(`cars[${index}].carName`)}
                            className={formik.errors.cars?.[index]?.carName && formik.touched.cars?.[index]?.carName?`${styles.error__field}`:`${styles.normal__field}`}
                            placeholder="ادخل اسم السيارة"
                            />
                            {formik.errors.cars?.[index]?.carName && formik.touched.cars?.[index]?.carName && <p className={styles.error}>{formik.errors.cars?.[index]?.carName}</p>}
                            {/* driver name */}
                            {/* <InputBase
                            fullWidth
                            name={`car[${index}].driverName`}
                            {...formik.getFieldProps(`car[${index}].driverName`)}
                            className={`my-3 ${formik.errors.car?.[index]?.driverName && formik.touched.car?.[index]?.driverName?`${styles.error__field}`:`${styles.normal__field}`}`}
                            placeholder="ادخل اسم السائق"
                            />
                            {formik.errors.car?.[index]?.driverName && formik.touched.car?.[index]?.driverName && <p className={styles.error}>{formik.errors.car?.[index]?.driverName}</p>} */}
                            {/* car number */}
                            {/* <InputBase
                            fullWidth
                            name={`cars[${index}].plateNumbers`}
                            {...formik.getFieldProps(`cars[${index}].plateNumbers`)}
                            className={formik.errors.cars?.[index]?.plateNumbers && formik.touched.cars?.[index]?.plateNumbers?`${styles.error__field}`:`${styles.normal__field}`}
                            placeholder="ادخل اسم السيارة"
                            />
                            {formik.errors.cars?.[index]?.plateNumbers && formik.touched.cars?.[index]?.plateNumbers && <p className={styles.error}>{formik.errors.cars?.[index]?.plateNumbers}</p>} */}
                            <div className="col-12 d-flex flex-row justify-content-between"  >

                            <InputBase
                            
                            name={`cars[${index}].plateNumber[0]`}
                            {...formik.getFieldProps(`cars[${index}].plateNumber[0]`)}
                            className={`my-3 col-5 ms-5 ${formik.errors.cars?.[index]?.plateNumber[0] && formik.touched.cars?.[index]?.plateNumber[0]?`${styles.error__field}`:`${styles.normal__field}`}`}
                            placeholder="ادخل رقم السيارة الاول"
                            type="number"
                            />
                            <InputBase
                            
                            name={`cars[${index}].plateNumber[1]`}
                            {...formik.getFieldProps(`cars[${index}].plateNumber[1]`)}
                            className={`my-3 col-5 ${formik.errors.cars?.[index]?.plateNumber[1] && formik.touched.cars?.[index]?.plateNumber[1]?`${styles.error__field}`:`${styles.normal__field}`}`}
                            placeholder="ادخل رقم السيارة الثاني"
                            type="number"
                            />
                            {(formik.errors.cars?.[index]?.plateNumber[0] && formik.touched.cars?.[index]?.plateNumber[0])&&( formik.errors.cars?.[index]?.plateNumber[1] && formik.touched.cars?.[index]?.plateNumber[1] ) && <p className={styles.error}>fv</p>}
                              </div>
                            {/* car condition */}
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name={`cars[${index}].carCondition`}
                              className="my-3"
                              {...formik.getFieldProps(`cars[${index}].carCondition`)}
                              value={formik.values.cars?.[index]?.carCondition || ""}
                              >
                                    <FormControlLabel value="جيدة" control={<Radio />} label="جيدة" />
                                    <FormControlLabel value="سيئة" control={<Radio />} label="سيئة"  />
                            </RadioGroup>
                            {/* نوع السيارة */}
                            <FormControl variant="filled" fullWidth={true} key={index}>
                              <InputLabel id="demo-simple-select-standard-label">نوع السيارة</InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="نوع السيارة"
                                name={`cars[${index}].carType`}
                                className={`${styles.drop__style} my-3`}
                                {...formik.getFieldProps(`cars[${index}].carType`)}
                                error={formik.errors.cars?.[index]?.carType && formik.touched.cars?.[index]?.carType}
                                placeholder="ادخل نوع السيارة"
                                value={formik.values.cars?.[index]?.carType || ""}
                                >
                                <MenuItem value={'سيارة قمح'} >سيارة قمح</MenuItem>
                                <MenuItem value={'سيارة عادية'}>سيارة عادية</MenuItem>
                                <MenuItem value={'سيارة معدات'}>سيارة معدات</MenuItem>
                              </Select>
                            </FormControl>
                            <Fab color="primary" onClick={() => push({ carName: '',firstPlateNumber:'',secondPlateNumber:'' ,carCondition:'',carType:''})}>
                            {/* <Fab color="primary" onClick={() => push({ carName: '', driverName: '' ,firstPlateNumber:'',secondPlateNumber:'',condition:'',type:''})}> */}
                              <AddIcon />
                            </Fab>
                            {
                              index>0 && <Fab color="secondary" onClick={()=>remove(index)}>
                               <DeleteIcon/>
                              </Fab>
                            }
                          </div>
                        )
                        )
                        }
                        </div>
                      }
                    }
                  </FieldArray>
                </span>
{/* (1)اسم السائق */}

                  {/* <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">اسم السائق</label>
                  <InputBase 
                  fullWidth  
                  name="car.driverName"  
                  {...formik.getFieldProps('car.driverName')} 
                  placeholder="ادخل اسم السائق"
                  className={formik.errors.car?.driverName && formik.touched.car?.driverName?`${styles.error__field}`:`${styles.normal__field}`}
                  />
                </span>
                  {formik.errors.car?.driverName && formik.touched.car?.driverName && <p className={styles.error}>{formik.errors.car.driverName}</p>} */}
{/* (2)رقم السيارة */}
                {/* <span className="d-flex flex-row justify-content-between align-items-center">
                  <label htmlFor="" className=" my-3 col-2">رقم السيارة</label>
                  <div className="col-10 d-flex flex-row justify-content-between">
                  <InputBase 
                  placeholder="الرقم الاول" 
                  {...formik.getFieldProps('car.firstPlateNumber')} 
                  name="car.firstPlateNumber"
                  className={`col-5 ${formik.errors.car?.firstPlateNumber && formik.touched.car?.firstPlateNumber?`${styles.error__field}`:`${styles.normal__field}`}`}
                  type="number"
                  />
                //احتمال اشغل ده
                  <InputBase  
                  placeholder="الرقم الثاني" 
                  {...formik.getFieldProps('car.secondPlateNumber')} 
                  name="car.secondPlateNumber"
                  className={`col-5 ${formik.errors.car?.secondPlateNumber && formik.touched.car?.secondPlateNumber?`${styles.error__field}`:`${styles.normal__field}`}`}
                  type="number"
                  />  */}
                                      {/* <InputBase 
                    placeholder="الرقم الاول" 
                    {...formik.getFieldProps('car.plateNumber[0]')} 
                    name="car.plateNumber[0]"
                    className={`col-5 ${formik.errors.car?.plateNumber[0] && formik.touched.car?.plateNumber[0]?`${styles.error__field}`:`${styles.normal__field}`}`}
                    type="number"
                    />
                    <InputBase  
                    placeholder="الرقم الثاني" 
                    {...formik.getFieldProps('car.plateNumber[1]')} 
                    name="car.plateNumber[1]"
                    className={`col-5 ${formik.errors.car?.plateNumber[1] && formik.touched.car?.plateNumber[1]?`${styles.error__field}`:`${styles.normal__field}`}`}
                    type="number"
                    /> 
                  </div> */}
                  {/* </div>
                </span>
                   {(formik.errors.car?.firstPlateNumber || formik.errors.car?.secondPlateNumber) && (formik.touched.car?.firstPlateNumber || formik.touched.car?.secondPlateNumber)&& <p className={styles.error}>برجاء ادخال رقم سيارة صحيح</p>} */}
                   {/* {(formik.errors.car?.plateNumber[0] || formik.errors.car?.plateNumber[1]) && (formik.touched.car?.plateNumber[0] || formik.touched.car?.plateNumber[1])&& <p className={styles.error}>برجاء ادخال رقم سيارة صحيح</p>} */}
                  {/* اسم السيارة (3)*/}
                  {/* <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">اسم السيارة</label>
                  <InputBase 
                  fullWidth 
                  name="car.name" 
                  {...formik.getFieldProps('car.name')}  
                  className={formik.errors.car?.name && formik.touched.car?.name?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل نوع السيارة"
                  />
                </span> */}
                  {/* نوع السيارة)(4) */}
                {/* <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" col-2"> نوع السيارة</label>
                  <FormControl variant="filled" fullWidth={true}>
                  <Select
                        labelId="demo-simple-select-standard-label2"
                        id="demo-simple-select-standard2"
                        name="car.type"
                        {...formik.getFieldProps('car.type')}
                        error={formik.errors.car?.type && formik.touched.car?.type}
                        className={styles.drop__style}
                        >
                        <MenuItem value={'سيارة قمح'} name='visit'id='a'>سيارة قمح</MenuItem>
                        <MenuItem value={'سيارة عادية'} name='visit'id='aa'>سيارة عادية</MenuItem>
                        <MenuItem value={'سيارة معدات'} name='visit'id='aaa'>سيارة معدات</MenuItem>
                      </Select>
                    </FormControl>
                </span> */}
                   {/*حالة السيارة(5) */}
                   {/* <span className="d-flex flex-row align-items-center">
                  <label htmlFor="" className=" my-3 col-3">حالة السيارة</label>
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="car.condition"
                      {...formik.getFieldProps('car.condition')}
                      >
                            <FormControlLabel value="جيدة" control={<Radio />} label="جيدة" name="car.condition" />
                            <FormControlLabel value="سيئة" control={<Radio />} label="سيئة"  name="car.condition" />
                    </RadioGroup>
                </span> */}


                 {/* تجربة الجهة  */}
                 {/* <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">رقم  السيارة </label>
                  <InputBase 
                  fullWidth 
                  name="car.plateNumber[0]" 
                  {...formik.getFieldProps('car.plateNumber[0]')} 
                  className={formik.errors.car?.plateNumber[0] && formik.touched.car?.plateNumber[0]?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل نوع السيارة"
                  type="number"
                  />
                  <InputBase 
                  fullWidth 
                  name="car.plateNumber[1]" 
                  {...formik.getFieldProps('car.plateNumber[1]')} 
                  className={formik.errors.car?.plateNumber[1] && formik.touched.car?.plateNumber[1]?`${styles.error__field}`:`${styles.normal__field}`} placeholder="ادخل نوع السيارة"
                  type="number"
                  />
                </span> */}
                {/* <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className=" my-3  col-2">بيانات الزائر</label>
                
                  <FieldArray name="visitor">
                    {
                      (filedArrayProps )=>{
                        console.log(filedArrayProps)
                        const {push,remove,form} = filedArrayProps
                        const {values} = form
                        const {visitor} = values
                        return <div className="d-flex flex-column col-10">
                        {
                        visitor.map((test,index)=>(
                          <div key={index} className="col-12 ">
                            <InputBase  
                            name={`test[${index}].name`}
                            {...formik.getFieldProps(`test[${index}].name`)} 
                            className={`col-10  my-3 ${formik.errors.visitor?.[index]?.name && formik.touched.visitor?.[index]?.name?`${styles.error__field}`:`${styles.normal__field}`}`} placeholder="ادخل اسم الزائر"
                            />
                            <InputBase  
                            name={`visitor[${index}].cardId`}
                            {...formik.getFieldProps(`visitor[${index}].cardId`)} 
                            className={`col-10 my-3 ${formik.errors.visitor?.[index]?.cardId && formik.touched.visitor?.[index]?.cardId?`${styles.error__field}`:`${styles.normal__field}`}`} placeholder="ادخل الرقم القومي"
                            />
                              <button onClick={()=>push({name:'',cardId:''})}>{' '}+</button>
                            {
                              index>0 && <button onClick={()=>remove(index)}>-</button>
                            }
                          </div>
                        )
                        )
                        }
                        </div>
                      }
                    }
                  </FieldArray>
                </span> */}


                <div className="d-flex flex-row my-3 justify-content-end">
                <DialogActions className="d-flex p-0">
                  <Button type="submit"  variant="outlined" className={`${styles.create__visit__btn} ${formik.isSubmitting ?styles.submit__btn:''}`} color="success"disabled={formik.isSubmitting}
                  >
                    حفظ{formik.isSubmitting ?<PulseLoader    color="#36d7b7" className="mx-2" size={10}/>:''}
                    
                  </Button>
                  <Button onClick={handleClose} variant="outlined" className={`me-3 ms-0 ${styles.create__visit__btn}`} color="error">
                    الغاء
                  </Button>
                </DialogActions>
                </div>
          </Form>
        </Formik>
        </DialogContent>
              </div>
      </Dialog>
    </>
  );
};

export default GateAddmodal;
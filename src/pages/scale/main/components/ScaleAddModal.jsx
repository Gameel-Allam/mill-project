import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import styles from './ScaleEditModal.module.scss';
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Fab, FormControl, FormControlLabel, InputBase, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import { useFormik } from "formik";
import { ScaleAddModalValidation } from "../../../Schema/ScaleSchema/ScaleAddModalSchema";
import { AutoFixHigh, CalendarMonth, Warning } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
// import { getWheatInfo } from "../../../../features/scale/ScaleActions";
import { closeScaleModal, openScaleModal, setVisitId } from "../../../../features/scale/ScaleSlice";
import PropTypes from 'prop-types';
import { addToWheatVisit, getAllVisits, getWheatInfo } from "../../../../features/scale/ScaleActions";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const ScaleAddModal = ({ gateWheatVisit }) => {
  // const [visitId, setVisitId] = useState()
  // handel get wheat type
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = `${today.getMonth() + 1}`.padStart(2, '0');
    const day = `${today.getDate()}`.padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    return currentDate;
  }

  const dispatch = useDispatch();
  const handleClickOpen = async () => {
    await dispatch(openScaleModal())
    dispatch(setVisitId(gateWheatVisit.visitId))
    // console.log(gateWheatVisit.visitId, "visit data")
    // let dateToday = getCurrentDate();
    // await dispatch(getWheatInfo({ ...gateWheatVisit, dateToday }))
    // setOpen(true);
  };
  const getWheat = async () => {
    let dateToday = getCurrentDate();
    await dispatch(getWheatInfo({ ...gateWheatVisit, dateToday }))
  }
  const { wheatInfo, WheatVisitId, scaleModal } = useSelector(state => state.scale)
  // handel date picker
  const [selectedDate, setSelectedDate] = useState(new Date(wheatInfo.tripDate || new Date()));
  const handleChange = (date) => {
    console.log(date)
    setSelectedDate(date);
  };
  // const [open, setOpen] = useState(openModal);
  console.log(wheatInfo, "wheat info")
  const handleClose = () => {
    // setOpen(false);
    dispatch(closeScaleModal())
    // dispatch(closeModal())
  };
  const { pageInfo } = useSelector(state => state.scale)
  // console.log(openRef.current, "open ref")
  // SendTo 
  const onSubmit = async () => {
    const tripDate = selectedDate.toISOString().slice(0, 10);
    console.log({ ...formik.values, wheatLoss, tripDate, permissibleLimit }, "formik values form add")
    await dispatch(addToWheatVisit({ ...formik.values, wheatLoss, tripDate, permissibleLimit }))
    dispatch(getAllVisits({ size: 10, pageNumber: pageInfo["current-page"] || 0 }))
  }
  const [wheatLoss, setLoss] = useState('')
  const [permissibleLimit, setpremissibleLoss] = useState('')
  const [LossWarning, setLossWarning] = useState('')
  // calculate loss in wheat 
  const calculateLoss = () => {
    const permissibleLimit = formik.values.shippedWeight * .0003;
    const actualWeight = formik.values.carWeightWithLoad - formik.values.carWeightEmpty;
    const importedWeight = formik.values.shippedWeight;
    const lossInWeight = importedWeight - actualWeight;
    setLoss(lossInWeight.toFixed(2))
    setpremissibleLoss(permissibleLimit.toFixed(2))
    if (lossInWeight > permissibleLimit) {
      setLossWarning("العجز اكبر من المسموح")
    } else {
      setLossWarning("")
    }
  }
  const formik = useFormik({
    initialValues: {
      visitId: WheatVisitId || '', //previously define
      programId: wheatInfo.programId || '', //previously define
      wheatId: wheatInfo.wheatId || '', //previously define
      cellNumber: '', //ok
      cleanlinessDegree: wheatInfo.cleanlinessDegree || '', //previously define
      // tripDate add while submitting
      releasePermission: wheatInfo.releasePermission || '', //previously define
      shipName: wheatInfo.shipName || '', //previously define
      shippedWeight: '', // ok
      wheatLoss: '', // add while submitting
      permissibleLimit: '', // add while submitting
      wheatType: wheatInfo.wheatType || '',
      importedWheatType: wheatInfo.importedWheatType || '',
      // wheatLoss , actualWeight need to add to json while submitting
      cardNumber: '',// add done
      acceptedOrRejected: '', // add done
      carWeightEmpty: '', //not important
      carWeightWithLoad: '', //not important
      transportationCompany: '',
      typeOfOperation: '',
      determinedWeight: wheatInfo.determinedWeight || '',
    },
    validationSchema: ScaleAddModalValidation,
    onSubmit
  })
  // calculate loss in wheat 

  return (
    <>
      <Button
        variant="text"
        className={`my-3 `}
        onClick={handleClickOpen}
        endIcon={<AddIcon />}
        color="success"
      >
      </Button>
      <Dialog
        open={scaleModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
      >
        <div className={styles.common__Modal}>

          <DialogTitle id="alert-dialog-title" className="text-center my-2">
            <img src="/src/assets/egyptLogo.png" alt="Egypt" width={80} />
          </DialogTitle>
          <DialogContent>
            <form action="" onSubmit={formik.handleSubmit}>
              <span className="d-flex flex-row align-items-center mt-5">
                <label htmlFor="" className=" my-2 col-2 mx-2">نوع البرنامج</label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={formik.values.typeOfOperation || 'محلي'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <FormControlLabel value="محلي" control={<Radio />} label="محلي" name="typeOfOperation" />
                  <FormControlLabel value="مستورد" control={<Radio />} label="مستورد" name="typeOfOperation" className="mx-3" />
                </RadioGroup>
                <Fab color="warning" onClick={getWheat}>
                  <AutoFixHigh />
                </Fab>
              </span>
              {/* شركة النقل */}
              <span className="d-flex flex-row my-2 align-items-center my-4">
                <label htmlFor="" className="col-2 mx-2">شركة النقل</label>
                <InputBase
                  fullWidth
                  name="transportationCompany"
                  value={formik.values.transportationCompany}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="ادخل درجة نظافة القمح"
                  className={formik.errors.transportationCompany && formik.touched.transportationCompany ? `${styles.error__field}` : `${styles.normal__field}`}
                />
              </span>
              {/* الوزن المقرر */}
              <span className="d-flex flex-row my-2 align-items-center my-4">
                <label htmlFor="" className="col-2 mx-2">الوزن المقرر</label>
                <InputBase
                  fullWidth
                  name="determinedWeight"
                  value={formik.values.determinedWeight}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="ادخل درجة نظافة القمح"
                  className={formik.errors.determinedWeight && formik.touched.determinedWeight ? `${styles.error__field}` : `${styles.normal__field}`}
                  disabled={true}
                />
              </span>
              <span className="d-flex flex-row justify-content-start align-items-center my-4">
                <label htmlFor="" className="col-2 mx-2">الاوزان</label>
                <InputBase id="carWeightEmpty" dir="rtl" value={formik.values.carWeightEmpty} onChange={formik.handleChange} name="carWeightEmpty"
                  className={`col-3 ${formik.errors.carWeightEmpty && formik.touched.carWeightEmpty ? `${styles.error__field}` : `${styles.normal__field}`}`}
                  onBlur={formik.handleBlur}
                  placeholder="الوزن الفارغ"
                  type="number"
                />

                <InputBase id="carWeightWithLoad" dir="rtl" value={formik.values.carWeightWithLoad} onChange={formik.handleChange}
                  className={`mx-3 col-3 ${formik.errors.carWeightWithLoad && formik.touched.carWeightWithLoad ? `${styles.error__field}` : `${styles.normal__field}`}`}
                  onBlur={formik.handleBlur}
                  placeholder="الوزن القائم"
                  type="number"
                />

                <span className="d-flex flex-row col-3 align-items-center">
                  <InputBase
                    fullWidth
                    id="actualWeight"
                    dir="rtl"
                    value={formik.values.actualWeight}
                    onChange={formik.handleChange}
                    name="actualWeight"
                    className={`col-3 ${formik.errors.carWeightWithLoad && formik.touched.carWeightWithLoad ? `${styles.error__field}` : `${styles.normal__field}`}`}
                    onBlur={formik.handleBlur}
                    placeholder="الوزن الحقيقي"
                    type="number"
                  />
                </span>
              </span>
              {(formik.errors.carWeightEmpty || formik.errors.carWeightWithLoad) && (formik.touched.carWeightEmpty || formik.touched.carWeightWithLoad) && <p className={styles.error}>برجاء ادخال وزن السيارة فارغة والوزن القائم وتحديد وحدة القياس</p>}
              {/* العجز */}
              {formik.errors.typeOfOperation && formik.touched.typeOfOperation && <p className={styles.error}>{formik.errors.typeOfOperation}</p>}
              {
                formik.values.typeOfOperation === "مستورد" ?
                  <>
                    <span className={`d-flex flex-row justify-content-start align-items-center my-4 calender__container`}>
                      <label htmlFor="" className="col-2 mx-2">تاريخ الرحلة</label>
                      <div className="col-10">
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleChange}
                          aria-label="data picker"
                          dateFormat={"dd/MM/yyyy"}
                          className={`date__picker py-2`}
                          maxDate={new Date()}
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={15}
                          showIcon={false}
                        />
                        <CalendarMonth className="calender__Icon" color="warning" />
                      </div>
                    </span>
                    <span className="d-flex flex-row my-2 align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">رقم بوليصة الوزن</label>
                      <InputBase
                        fullWidth
                        id="cardNumber"
                        dir="rtl"
                        value={formik.values.cardNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.cardNumber && formik.touched.cardNumber}
                        placeholder="ادخل رقم كارت الوزن"
                        className={formik.errors.cardNumber && formik.touched.cardNumber ? `${styles.error__field}` : `${styles.normal__field}`}
                        type="number"
                      />
                    </span>
                    {formik.errors.cardNumber && formik.touched.cardNumber && <p className={styles.error}>{formik.errors.cardNumber}</p>}
                    <span className="d-flex flex-row my-2 align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">اذن الافراج</label>
                      <InputBase
                        fullWidth
                        id="releasePermission"
                        dir="rtl"
                        value={formik.values.releasePermission}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.releasePermission && formik.touched.releasePermission}
                        placeholder="ادخل اذن الافراج"
                        className={formik.errors.releasePermission && formik.touched.releasePermission ? `${styles.error__field}` : `${styles.normal__field}`}
                      />
                    </span>
                    <span className="d-flex flex-row justify-content-start align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">اسم السفينة</label>
                      <InputBase
                        fullWidth
                        name="shipName"
                        value={formik.values.shipName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="ادخل اسم السفينة"
                        className={formik.errors.shipName && formik.touched.shipName ? `${styles.error__field}` : `${styles.normal__field}`}
                      />
                    </span>
                    <span className="d-flex flex-row justify-content-start align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">نوع القمح</label>
                      <InputBase
                        fullWidth
                        name="importedWheatType"
                        value={formik.values.importedWheatType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="ادخل نوع القمح"
                        className={formik.errors.importedWheatType && formik.touched.importedWheatType ? `${styles.error__field}` : `${styles.normal__field}`}
                      />
                    </span>
                    <span className="d-flex flex-row justify-content-start align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">وزن الميناء</label>
                      <InputBase id="shippedWeight" dir="rtl" value={formik.values.shippedWeight} onChange={formik.handleChange} name="shippedWeight"
                        className={`col-3 ${formik.errors.shippedWeight && formik.touched.shippedWeight ? `${styles.error__field}` : `${styles.normal__field}`}`}
                        onBlur={formik.handleBlur}
                        placeholder="وزن الشحن"
                        type="number"
                      />
                    </span>
                    {formik.errors.shippedWeight && formik.touched.shippedWeight && <p className={styles.error}>{formik.errors.shippedWeight}</p>}
                    <span className="d-flex flex-row justify-content-center align-items-center my-4 col-12">
                      <Button onClick={() => calculateLoss()} variant="contained" color="warning" className={`col-4 ${styles.calc__weight__btn} font-bold`}>احسب العجز </Button>
                    </span>
                    <span className="d-flex flex-row justify-content-start align-items-center my-3">
                      <label htmlFor="" className="col-2 mx-2">العجز</label>
                      <input
                        type="text"
                        id="lossInWheat"
                        dir="rtl"
                        value={wheatLoss}
                        name="lossInWheat"
                        className={`col-3 ${styles.disabled__field}`}
                        disabled
                      />
                    </span>
                    <span className="d-flex flex-row justify-content-start align-items-center my-3">
                      <label htmlFor="" className="col-2 mx-2">المسموح</label>
                      <input
                        type="text"
                        id="permissibleLimit"
                        dir="rtl"
                        value={permissibleLimit}
                        name="permissibleLimit"
                        className={`col-3 ${styles.disabled__field}`}
                        disabled
                      />
                    </span>
                    {LossWarning && <p className={styles.loss__error}>{LossWarning} <Warning /></p>}

                  </>
                  :
                  <>
                    {/* درجة النظافة */}
                    <span className="d-flex flex-row my-2 align-items-center my-4">
                      <label htmlFor="" className="col-2 mx-2">درجة النظافة</label>
                      <InputBase
                        fullWidth
                        name="cleanlinessDegree"
                        value={formik.values.cleanlinessDegree}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="ادخل درجة نظافة القمح"
                        className={formik.errors.cleanlinessDegree && formik.touched.cleanlinessDegree ? `${styles.error__field}` : `${styles.normal__field}`}
                        type="number"
                      />
                    </span>
                  </>
              }
              {/* accepted or rejected */}
              <span className="d-flex flex-row align-items-center mt-5">
                <label htmlFor="" className=" my-2 col-2 mx-2">حالة القمح</label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="acceptedOrRejected"
                  value={formik.values.acceptedOrRejected}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <FormControlLabel value="مقبول" control={<Radio />} label="مقبول" />
                  <FormControlLabel value="مرفوض" control={<Radio />} label="مرفوض" className="mx-3" />
                </RadioGroup>
              </span>
              <span className="d-flex flex-row my-3 align-items-center">
                <label htmlFor="" className=" col-2"> رقم الخلية</label>
                <FormControl variant="filled" fullWidth={true}>
                  <Select
                    labelId="demo-simple-select-standard-label2"
                    id="demo-simple-select-standard2"
                    name="cellNumber"
                    {...formik.getFieldProps('cellNumber')}
                    error={formik.errors.cellNumber && formik.touched.cellNumber}
                    className={styles.drop__style}
                  >
                    <MenuItem value={'1'} name='visit' id='aaa'>1</MenuItem>
                    <MenuItem value={'2'} name='visit' id='aaa'>2</MenuItem>
                    <MenuItem value={'3'} name='visit' id='aaa'>3</MenuItem>
                    <MenuItem value={'4'} name='visit' id='aaa'>4</MenuItem>
                    <MenuItem value={'5'} name='visit' id='aaa'>5</MenuItem>
                    <MenuItem value={'6'} name='visit' id='aaa'>6</MenuItem>
                    <MenuItem value={'7'} name='visit' id='aaa'>7</MenuItem>
                    <MenuItem value={'8'} name='visit' id='aaa'>8</MenuItem>
                    <MenuItem value={'9'} name='visit' id='aaa'>9</MenuItem>
                    <MenuItem value={'10'} name='visit' id='aaa'>10</MenuItem>
                    <MenuItem value={'11'} name='visit' id='aaa'>11</MenuItem>
                    <MenuItem value={'12'} name='visit' id='aaa'>12</MenuItem>
                  </Select>
                </FormControl>
              </span>
              <div className="d-flex flex-row my-3 justify-content-end">
                <DialogActions className="d-flex p-0">
                  <Button type="submit" variant="outlined" color="success" className={styles.create__visit__btn}>حفظ</Button>
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

ScaleAddModal.propTypes = {
  gateWheatVisit: PropTypes.object,
}
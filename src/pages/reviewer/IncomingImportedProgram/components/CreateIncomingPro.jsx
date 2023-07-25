// {
//     "startDate": "2023-07-13",
//     "endDate": "2023-07-13",
//     "programOrSession": "جلسة",
//     "sessionNumber": 1,
//     "entityId": 0,
//     "entityType": "مطحن",
//     "entityName": "string",
//     "importedWheat": {
//       "wheatId": 0,
//       "tripDate": "2017-01-13",
//       "releasePermission": "string",
//       "reservationType": "string",
//       "shipName": "مفرج",
//       "importedWheatType": "string",
//       "determinedWeight": 3000
//     },
//     "createdOn": "2023-07-13T15:56:26.515Z"

import { Field, Formik, useFormik } from "formik"
import { SessionValidation } from "../../../Schema/ReviewerSchema/SessionPro"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputBase, MenuItem, Select } from "@mui/material";
import styles from "./create.module.scss";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { PulseLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { createWheatPro } from "../../../../features/reviewer/reviewerActions";
import { CalendarMonth } from "@mui/icons-material";
//   }
const CreateIncomingPro = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    // TimeStamp for createdOn
    const date = new Date();
    const timestamp = date.toISOString();
    const addFormData = {
        // "programId": 0,
        startDate: "",
        endDate: "",
        // programOrSession: "جلسة",
        // sessionNumber: 1,
        // "entityId": 0,
        entityType: "ميناء",
        entityName: "دمياط",
        importedWheat: {
            //   "wheatId": 0,
            tripDate: "",
            releasePermission: "12345",
            reservationType: "مفرج",
            shipName: "البيدا",
            importedWheatType: "روسي",
            determinedWeight: 3000
        },
        createdOn: timestamp
    }
    // Date Picker start and end
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };
    // Date Picker Program start and end
    const [ProStartDate, setProStartDate] = useState(null);
    const handleProStartDate = (date) => {
        setProStartDate(date)
    };
    const dispatch = useDispatch();
    const onSubmit = async () => {
        // increase start dateand end date by one day
        const prestartDate = new Date(selectedStartDate)
        prestartDate.setDate(prestartDate.getDate() + 1);
        const startDate = prestartDate.toISOString().slice(0, 10);
        // End date
        const preEndDate = new Date(selectedEndDate)
        preEndDate.setDate(preEndDate.getDate() + 1);
        const endDate = preEndDate.toISOString().slice(0, 10);
        // Program start and end
        const preProStartDate = new Date(ProStartDate);
        preProStartDate.setDate(preProStartDate.getDate() + 1);
        const tripDate = preProStartDate.toISOString().slice(0, 10);
        // console.log({ ...formik.values, startDate, endDate, importedWheat: { ...formik.values.importedWheat, tripDate } })
        await dispatch(createWheatPro({ ...formik.values, startDate, endDate, importedWheat: { ...formik.values.importedWheat, tripDate } }))
        formik.resetForm();
        setSelectedStartDate(null);
        setSelectedEndDate(null);
        setProStartDate(null);
        setOpen(false);
    }
    const formik = useFormik({
        initialValues: addFormData,
        validationSchema: SessionValidation,
        onSubmit,
        isSubmitting: false,
    })
    return (
        <>
            <Button
                variant="outlined"
                className={`my-3 col-2 mx-auto ${styles.create__visit__btn}`}
                onClick={handleClickOpen}
                endIcon={<AddIcon />}
            >
                <span className="mx-2">اضافة برنامج</span>
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
                            initialValues={addFormData}
                            validationSchema={SessionValidation}
                            onSubmit={onSubmit}
                            isSubmitting={false}
                        >
                            <form onSubmit={formik.handleSubmit}>
                                {/* تاريخ البداية */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">تاريخ البداية</label>
                                    <div className="col-10">
                                        <DatePicker
                                            selected={selectedStartDate}
                                            onChange={handleStartDateChange}
                                            aria-label="data picker"
                                            dateFormat={"dd/MM/yyyy"}
                                            className={`${styles.date__picker} py-2`}
                                            placeholderText="ادخل تاريخ البداية"
                                        />
                                        <CalendarMonth className={styles.calender__Icon} color="warning" />
                                    </div>

                                </span>
                                {/* تاريخ النهاية */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">تاريخ النهاية</label>
                                    <div className="col-10">
                                        <DatePicker
                                            selected={selectedEndDate}
                                            onChange={handleEndDateChange}
                                            aria-label="data picker"
                                            dateFormat={"dd/MM/yyyy"}
                                            className={`${styles.date__picker} py-2`}
                                            placeholderText="ادخل تاريخ النهاية"
                                        />
                                        <CalendarMonth className={styles.calender__Icon} color="warning" />
                                    </div>
                                </span>
                                {/* نوع البرنامج */}
                                {/* <span className="d-flex flex-row align-items-center mt-5">
                                    <label htmlFor="" className=" my-2 col-2 mx-2">نوع البرنامج</label>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="programOrSession"
                                        value={formik.values.programOrSession || 'برنامج'}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <FormControlLabel value="برنامج" control={<Radio />} label="برنامج" />
                                        <FormControlLabel value="جلسة" control={<Radio />} label="جلسة" className="mx-3" />
                                    </RadioGroup>
                                </span> */}
                                {/* نوع الجهة */}
                                {/* الجهة التابع لها */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">
                                        الجهة التابع لها
                                    </label>
                                    <FormControl variant="filled" fullWidth={true} className="d-flex flex-column">
                                        <Field name="entityType">
                                            {({ form }) => (
                                                <Select
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    label="الجهة التابع لها"
                                                    name="entityType"
                                                    value={form.values.entityType}
                                                    error={form.errors.entityType && form.touched.entityType}
                                                    {...formik.getFieldProps('entityType')}
                                                    className={styles.drop__style}
                                                >
                                                    <MenuItem value={'مراكز التجميع'}>مراكز التجميع</MenuItem>
                                                    <MenuItem value={'مطحن'}>مطحن</MenuItem>
                                                    <MenuItem value={'ميناء'}>ميناء</MenuItem>
                                                    <MenuItem value={'الهناجر'}>الهناجر</MenuItem>

                                                </Select>
                                            )}
                                        </Field>
                                    </FormControl>
                                </span>
                                {/* اسم الجهة */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className=" my-3  col-2">اسم الجهة التابع لها</label>
                                    <InputBase
                                        fullWidth
                                        name="entityName"
                                        {...formik.getFieldProps('entityName')}
                                        className={formik.errors.entityName && formik.touched.entityName ? `${styles.error__field}` : `${styles.normal__field}`} placeholder="ادخل اسم الجهة التابع لها"
                                    />
                                </span>
                                {/*  تاريخ برنامج رحلة القمح المستورد */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">تاريخ الرحلة</label>
                                    <div className="col-10">
                                        <DatePicker
                                            selected={ProStartDate}
                                            onChange={handleProStartDate}
                                            aria-label="data picker"
                                            dateFormat={"dd/MM/yyyy"}
                                            className={`${styles.date__picker} py-2`}
                                            placeholderText="تاريخ الرحلة"
                                        />
                                        <CalendarMonth className={styles.calender__Icon} color="warning" />
                                    </div>
                                </span>
                                {/*reservationType */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">رقم اذن الافراج</label>
                                    <div className="col-10">
                                        <InputBase
                                            fullWidth
                                            name="importedWheat.releasePermission"
                                            {...formik.getFieldProps('importedWheat.releasePermission')}
                                            placeholder="ادخل اذن الافراج"
                                            className={formik.errors.importedWheat?.releasePermission && formik.touched.importedWheat?.releasePermission ? `${styles.error__field}` : `${styles.normal__field}`}
                                        />
                                    </div>
                                </span>
                                {/*relasepermission */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">نوع الحجز</label>
                                    <div className="col-10">
                                        <InputBase
                                            fullWidth
                                            name="importedWheat.reservationType"
                                            {...formik.getFieldProps('importedWheat.reservationType')}
                                            placeholder="ادخل نوع الحجز"
                                            className={formik.errors.importedWheat?.reservationType && formik.touched.importedWheat?.reservationType ? `${styles.error__field}` : `${styles.normal__field}`}
                                        />
                                    </div>
                                </span>
                                {/*shipName */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">اسم الباخرة</label>
                                    <div className="col-10">
                                        <InputBase
                                            fullWidth
                                            name="importedWheat.shipName"
                                            {...formik.getFieldProps('importedWheat.shipName')}
                                            placeholder="ادخل اسم الباخرة"
                                            className={formik.errors.importedWheat?.shipName && formik.touched.importedWheat?.shipName ? `${styles.error__field}` : `${styles.normal__field}`}
                                        />
                                    </div>
                                </span>
                                {/*importedWheatType */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">اسم الباخرة</label>
                                    <div className="col-10">
                                        <InputBase
                                            fullWidth
                                            name="importedWheat.importedWheatType"
                                            {...formik.getFieldProps('importedWheat.importedWheatType')}
                                            placeholder="ادخل نوع القمح المستورد"
                                            className={formik.errors.importedWheat?.importedWheatType && formik.touched.importedWheat?.importedWheatType ? `${styles.error__field}` : `${styles.normal__field}`}
                                        />
                                    </div>
                                </span>
                                {/*determinedWeight */}
                                <span className="d-flex flex-row my-3 align-items-center">
                                    <label htmlFor="" className="col-2">الكمية المحددة</label>
                                    <div className="col-10">
                                        <InputBase
                                            fullWidth
                                            name="importedWheat.determinedWeight"
                                            {...formik.getFieldProps('importedWheat.determinedWeight')}
                                            placeholder="ادخل الكميةالمحددة"
                                            className={formik.errors.importedWheat?.determinedWeight && formik.touched.importedWheat?.determinedWeight ? `${styles.error__field}` : `${styles.normal__field}`}
                                        />
                                    </div>
                                </span>
                                <div className="d-flex flex-row my-3 justify-content-end">
                                    <DialogActions className="d-flex p-0">
                                        <Button type="submit" variant="outlined" className={`${styles.create__visit__btn} ${formik.isSubmitting ? styles.submit__btn : ''}`} color="success" disabled={formik.isSubmitting}
                                        >
                                            حفظ{formik.isSubmitting ? <PulseLoader color="#36d7b7" className="mx-2" size={10} /> : ''}

                                        </Button>
                                        <Button onClick={handleClose} variant="outlined" className={`me-3 ms-0 ${styles.create__visit__btn}`} color="error">
                                            الغاء
                                        </Button>
                                    </DialogActions>
                                </div>
                            </form>
                        </Formik>
                    </DialogContent>
                </div>
            </Dialog>
        </>
    )
}

export default CreateIncomingPro
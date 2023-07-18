import { Button, FormControlLabel, InputBase, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Form, Formik, useFormik } from "formik";
import { useState } from "react";
import styles from './stepper.module.scss';
import {  ArrowCircleLeft, ArrowCircleRight, ExitToAppOutlined, VerifiedUser } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
// import StepThree from "./StepThree";
const rows = [
  {
    cellNumber: 1,
    cellName: 'ايريكا',
    quantity: 100,
  },
  {
    cellNumber: 2,
    cellName: 'ايريكا',
    quantity: 100,
  },
];
const Steps = () => {
  const [edit, setEdit] = useState(true);
  const [step, setStep] = useState(0);
  const handelNext = () => {
    setStep(step + 1);
  }
  const handelBack = () => {
    setStep(step - 1);
  }

  const initvalues={
    gateData: {
      wheatOwnerCardId: '12345678912345',
    },
    ScaleData: {
      Quantity: '3000 كيلو',
    },
    cellData:{
      cellNumber: '',
    }
  }
  const onSubmit=()=>{
    console.log(formik.values)
  }
  const formik=useFormik({
    initialValues:initvalues,
    onSubmit,
    isSubmitting:false,
  })
  return (
    <div className={`${styles.stepper__container} col-8`}>
  {/* <div className={styles.stepper__line}></div>

<div className={styles.step_indicator}>
  <div className={`${styles['step-indicator-item']} ${step === 1 ? styles.active : step > 1 ? styles.completed : ''}`}>
    1
  </div>
  <div className={styles['step-indicator-line']}></div>
  <div className={`${styles['step-indicator-item']} ${step === 2 ? styles.active : step > 2 ? styles.completed : ''}`}>
    2
  </div>
  <div className={styles['step-indicator-line']}></div>
  <div className={`${styles['step-indicator-item']} ${step === 3 ? styles.active : step > 3 ? styles.completed : ''}`}>
    3
  </div>
</div> */}
      <Formik
        initialValues={formik.initialValues }
        onSubmit={formik.handleSubmit}
      >
          <Form>
            <FormSteps step={step}>
            <div className="step__one text-center">
              <h3>بيانات البوابة</h3>
                  <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-3">مالك القمح</label>
                  <div className="col-9">
                  <InputBase
                  fullWidth
                  name="gateData.wheatOwnerCardId"
                  {...formik.getFieldProps('gateData.wheatOwnerCardId')}
                  placeholder="ادخل رقم البطاقة"
                  className={`${styles.normal__field}`}
                  disabled={edit}
                  type="number"
                  />
                  </div>
                </span>
            </div>
            <div className="step__two text-center">
              <h3>بيانات الميزان</h3>
              <span className="d-flex flex-row my-3 align-items-center">
                  <label htmlFor="" className="col-3">الكمية</label>
                  <div className="col-9">
                  <InputBase
                  fullWidth
                  name="ScaleData.Quantity"
                  {...formik.getFieldProps('ScaleData.Quantity')}
                  placeholder="ادخل الكمية"
                  className={`${styles.normal__field}`}
                  disabled={edit}
                  />
                  </div>
              </span>
            </div>
            <div className="step__three text-center">
              <h3>اخيتار بيانات الخلية</h3>
              <span className="d-flex flex-row my-3 align-items-center">
                {/* <StepThree handleSubmit={formik.handleSubmit}/>      */}
          <TableContainer component={Paper}>
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="cellData.cellNumber"
            {...formik.getFieldProps('cellData.cellNumber')}
            >
         <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">رقم الخلية</TableCell>
            <TableCell align="center">نوع القمح</TableCell>
            <TableCell align="center">الكمية المتاحة</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            key={row.cellNumber}  
            >
              <TableCell align="right" className={styles.table__row} >
              <FormControlLabel value= {row.cellNumber} control={<Radio />} label= {row.cellNumber} />
                </TableCell>
              <TableCell align="center" className={styles.table__row}>{row.cellName}</TableCell>
              <TableCell align="center" className={styles.table__row}>{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </RadioGroup>
    </TableContainer>
              </span>
              <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row ms-5 ">
                <Button
                variant="outlined"
                className={`my-3 ${styles.create__visit__btn}`}
                onClick={handelBack}
                startIcon={<ArrowCircleRight />}
                color="info"
              >
                <span className="mx-2">السابق</span>
              </Button>
              <Button
                variant="outlined"
                className={`my-3 mx-1 ${styles.create__visit__btn}`}
                type="submit"
                startIcon={<VerifiedUser />}
                color="success"
              >
                <span className="mx-2">تأكيد</span>
              </Button>
              </div>
              <Button
                variant="outlined"
                className={`my-3 ${styles.create__visit__btn}`}
                type="submit"
                startIcon={<ExitToAppOutlined />}
                color="error"
              >
                <span className="mx-2">الغاء</span>
              </Button>
              </div>
            </div>
            </FormSteps>
            <div className="d-inline-flex flex-row ">
            {step < 2 &&<Button
                          variant="outlined"
                          className={`my-3 ${styles.create__visit__btn}`}
                          onClick={handelNext}
                          endIcon={<ArrowCircleLeft />}
                          color="success"
                        >
                          <span className="mx-2">االتالي</span>
                        </Button>
            }
            {step < 2 && 
                    <Button
                    variant="outlined"
                    color="warning"
                    endIcon={<EditIcon />}
                    className={`my-3 mx-2 ${styles.create__visit__btn} flex-grow-0`}
                    onClick={() => setEdit(!edit)}
                  >
                    <span className="mx-2">
                     تعديل
                    </span>
                    </Button>
            
            }
                {step > 0 && step < 2 &&
                <Button
                variant="outlined"
                className={`my-3 ${styles.create__visit__btn}`}
                onClick={handelBack}
                startIcon={<ArrowCircleRight />}
                color="info"
              >
                <span className="mx-2">السابق</span>
              </Button>
            }
            </div>
          </Form>
      </Formik>
    </div>
  );
};
const FormSteps = (props) => {
    const s = props.children.length;
    if(props.step < s)
    return props.children[props.step]
}
export default Steps;

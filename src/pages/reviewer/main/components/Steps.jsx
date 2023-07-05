import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

const Steps = () => {
  const [edit, setEdit] = useState(true);
  const [step, setStep] = useState(0);
  const handelNext = () => {
    setStep(step + 1);
  }
  const handelBack = () => {
    setStep(step - 1);
  }
  const cells=[
    {
        cellNumber: '1',
        cellWheatType: 'اريكا',
        cellQuantity: '3000 ',
    },
    {
        cellNumber: '2',
        cellWheatType: 'اريكا',
        cellQuantity: '3000 ',
    },
  ]
  return (
    <>
      <Formik
        initialValues={{
          gateData: {
            name: 'محمد محمد عفيفي',
            age: '25',
          },
          ScaleData: {
            Quantity: '3000 كيلو',
          },
          cellNumber:''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <FormSteps step={step}>
            <div className="step__one">
              <h3>بيانات البوابة</h3>
              {Object.keys(values.gateData).map((key) => (
                <Field
                  key={key}
                  type="text"
                  name={`gateData.${key}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={key}
                  value={values.gateData[key]}
                  disabled={edit}
                />
              ))}
            </div>
            <div className="step__two">
              <h3>بيانات الميزان</h3>
              {Object.keys(values.ScaleData).map((key) => (
                <Field
                  key={key}
                  type="text"
                  name={`ScaleData.${key}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={key}
                  value={values.ScaleData[key]}
                  disabled={edit}
                />
              ))}
            </div>
            <div className="step__three">
              <h3>اخيتار بيانات الخلية</h3>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="cellNumber"
                value={values.cellNumber}
                onChange={handleChange}
                >
                {cells.map((cell, index) => (
                <div key={index}>
                    <FormControlLabel value={cell.cellNumber} control={<Radio />} label={cell.cellNumber} />
                    <h5>{cell.cellWheatType}</h5>
                    <h5>{cell.cellQuantity}</h5>
                </div>
            ))}
            </RadioGroup>
                <button type="submit">تأكيد</button>
                <button type="button">الغاء</button>
            </div>
            </FormSteps>
            {step > 0 && <button type="button" onClick={()=>handelBack()}>السابق</button>}
            {step < 2 && <button type="button" onClick={()=>handelNext()}>التالي</button>}
            {step < 2 &&  <button type="button" onClick={() => setEdit(!edit)}>تعديل</button>}
          </Form>
        )}
      </Formik>
    </>
  );
};
const FormSteps = (props) => {
    const s = props.children.length;
    if(props.step < s)
    return props.children[props.step]
}
export default Steps;

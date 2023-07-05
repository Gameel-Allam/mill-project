// import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
// import { Field } from "formik"
import Steps from "./Steps"
// {values, handleChange, handleBlur,edit,cells}
const Stepper = () => {

  return (
    <>
        <Steps/>
    </>
    // <>
    //         <div className="step__one">
    //           <h3>بيانات البوابة</h3>
    //           {Object.keys(values.gateData).map((key) => (
    //             <Field
    //               key={key}
    //               type="text"
    //               name={`gateData.${key}`}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               placeholder={key}
    //               value={values.gateData[key]}
    //               disabled={edit}
    //             />
    //           ))}
    //         </div>
    //         <div className="step__two">
    //           <h3>بيانات الميزان</h3>
    //           {Object.keys(values.ScaleData).map((key) => (
    //             <Field
    //               key={key}
    //               type="text"
    //               name={`ScaleData.${key}`}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               placeholder={key}
    //               value={values.ScaleData[key]}
    //               disabled={edit}
    //             />
    //           ))}
    //         </div>
    //         <div className="step__three">
    //           <h3>اخيتار بيانات الخلية</h3>
    //           <RadioGroup
    //             aria-labelledby="demo-controlled-radio-buttons-group"
    //             name="cellNumber"
    //             value={values.cellNumber}
    //             onChange={handleChange}
    //             >
    //             {cells.map((cell, index) => (
    //             <div key={index}>
    //                 <FormControlLabel value={cell.cellNumber} control={<Radio />} label={cell.cellNumber} />
    //                 <h5>{cell.cellWheatType}</h5>
    //                 <h5>{cell.cellQuantity}</h5>
    //             </div>
    //         ))}
    //         </RadioGroup>
    //             <button type="submit">تأكيد</button>
    //             <button type="button">الغاء</button>
    //         </div>

  )
}

export default Stepper

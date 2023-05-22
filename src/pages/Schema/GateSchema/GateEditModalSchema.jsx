// import * as Yup from 'yup';

// export const GateAddModalValidation=Yup.object({
//     visitorName:Yup.string().min(6,"برجاء ادخال الاسم بشكل صحيح").matches(/^\D*$/,"برجاء ادخال الاسم بشكل صحيح").required("برجاء ادخال اسم الزائر"),
//     identityCard:Yup.string().min(14 ,"برجاء اداخل الرقم القومي المكون من 14 رقم").max(14,"برجاء اداخل الرقم القومي المكون من 14 رقم").required("برجاء اداخل الرقم القومي المكون من 14 رقم"),
//     driverName:Yup.string().min(6,"برجاء ادخال الاسم بشكل صحيح").matches(/^\D*$/,"برجاء ادخال الاسم بشكل صحيح"),
//     firstNum:Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح"),
//     secondNum:Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح"),
//     thirdNum:Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح"),
//     carType:Yup.string(),
//     visitType:Yup.string().required("برجاء تحديد نوع الزائر"),
//     sourcePlace:Yup.string().required("برجاء اداخل الجهة "),
//     otherSourcePlace:Yup.string(),
//     visitReason:Yup.string("برجاء ادخال سبب الزيارة").required("برجاء ادخال سبب الزيارة"),
// })
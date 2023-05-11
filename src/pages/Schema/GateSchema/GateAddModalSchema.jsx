import * as Yup from 'yup';

export const GateAddModalValidation=Yup.object({
    visitorName:Yup.string().required("برجاء ادخال اسم الزائر"),
    identityCard:Yup.number().min(14,"برجاء اداخل الرقم القومي المكون من 14 رقم").max(14).required("برجاء اداخل الرقم القومي المكون من 14 رقم"),
    driverName:Yup.string().required(),
    firstNum:Yup.number().min(4,"برجاء اداخل رقم السيارة صحيح"),
    secondNum:Yup.number().min(4,"برجاء اداخل رقم السيارة صحيح"),
    thirdNum:Yup.number().min(4,"برجاء اداخل رقم السيارة صحيح"),
    carType:Yup.string(),
    visitType:Yup.string().required("برجاء تحديد نوع الزائر"),
    sourcePlace:Yup.string().required("برجاء اداخل الجهة "),
    resoneOfvisit:Yup.string().required("برجاء ادخال سبب الزيارة"),
})
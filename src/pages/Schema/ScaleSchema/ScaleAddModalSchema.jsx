import * as Yup from 'yup';

export const ScaleAddModalValidation=Yup.object({
    weightSerialNumber:Yup.number().required("برجاء ادخال رقم كارت الوزن"),
    carWeightEmpty:Yup.string().required("برجاء اداخل وزن السيارة فارغ"),
    carWeightWithLoad:Yup.string().required("برجاء اداخل الوزن القائم"),
    weightUnit:Yup.string().required(),
    portRealWeight:Yup.string().required("برجاء ادخال الوزن الوجود علي بوليصة الشحن"),
    typeOfOperation:Yup.string().required("برجاء اداخل نوع العملية"),
})
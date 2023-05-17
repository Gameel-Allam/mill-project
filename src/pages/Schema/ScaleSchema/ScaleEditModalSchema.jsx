import * as Yup from 'yup';

export const ScaleAddModalValidation=Yup.object({
    weightSerialNumber:Yup.number().required("برجاء ادخال رقم كارت الوزن"),
    carWeightEmpty:Yup.string().required("برجاء اداخل وزن السيارة فارغ"),
    carWeightWithLoad:Yup.string().required("برجاء اداخل الوزن القائم"),
    loadRealWeight:Yup.number(),
    weightUnit:Yup.string().required(),
    typeOfOperation:Yup.string().required("برجاء اداخل نوع العملية"),
})
import * as Yup from 'yup';

export const ScaleAddModalValidation=Yup.object({
    weightSerialNumber:Yup.number().required("برجاء ادخال رقم كارت الوزن"),
    carWeightEmpty:Yup.number().required("برجاء اداخل وزن السيارة فارغ"),
    carWeightWithLoad:Yup.number().required("برجاء اداخل الوزن القائم"),
    loadRealWeight:Yup.number(),
    typeOfOperation:Yup.string().required("برجاء اداخل نوع العملية"),
})
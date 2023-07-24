import * as Yup from 'yup';

export const ScaleAddModalValidation = Yup.object({
    carWeightEmpty: Yup.string().required("برجاء اداخل وزن السيارة فارغ"),
    carWeightWithLoad: Yup.string().required("برجاء اداخل الوزن القائم"),
    typeOfOperation: Yup.string().required("برجاء اداخل نوع العملية"),
    // 
    cleanlinessDegree: Yup.string(),
    shipName: Yup.string(),
    shippedWeight: Yup.string(),
    cardNumber: Yup.string(),
    acceptedOrRejected: Yup.string(),
    transportationCompany: Yup.string(),
    shippingDate: Yup.string(),

})

import * as Yup from 'yup';

export const ScaleAddModalValidation = Yup.object({
    carWeightEmpty: Yup.string(),
    carWeightWithLoad: Yup.string(),
    typeOfOperation: Yup.string(),
    // 
    cleanlinessDegree: Yup.string(),
    shipName: Yup.string(),
    shippedWeight: Yup.string(),
    cardNumber: Yup.string(),
    acceptedOrRejected: Yup.string(),
    transportationCompany: Yup.string(),
    shippingDate: Yup.string(),

})

import * as Yup from 'yup';

export const GateAddModalValidation=Yup.object().shape({
    // visit:Yup.object().shape({
        visitReason:Yup.string().required("برجاء ادخال سبب الزيارة"), //ok

        visitType:Yup.string().required("برجاء تحديد نوع الزائر"), //ok
      // }),
      visitor:Yup.object().shape({
        cardId:Yup.string().min(14 ,"برجاء اداخل الرقم القومي المكون من 14 رقم").max(14,"برجاء اداخل الرقم القومي المكون من 14 رقم").required("برجاء اداخل الرقم القومي المكون من 14 رقم"), //identityCard
        name:Yup.string().min(6,"برجاء ادخال الاسم بشكل صحيح").matches(/^\D*$/,"برجاء ادخال الاسم بشكل صحيح").required("برجاء ادخال اسم الزائر")   //visitorName
      }),
      entity:Yup.object().shape({
        name:Yup.string().required("برجاء ادخال اسم الجهة "),  // //NEW must added drop or input
        entityType:Yup.string().required("برجاء تحديد نوع الجهة ") //types is known in srs 
      }),
      car:Yup.object().shape({
        type:Yup.string("برجاء تحديد نوع السيارة"),  //NEW from srs wheat_car , visit_car  
        condition:Yup.string("برجاء تحديد حالة السيارة"), // NEW
        name:Yup.string(), //carType
        plateNumber:Yup.array().of(
          Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح")
        ),
        // 'plateNumber[0]':Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح"), //first
        // 'plateNumber[1]':Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح"), //first
        firstPlateNumber:Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح"), //first
        secondPlateNumber:Yup.string().min(4,"برجاء اداخل رقم السيارة صحيح").max(4,"برجاء اداخل رقم السيارة صحيح"), //secind num
        driverName:Yup.string().min(6,"برجاء ادخال الاسم بشكل صحيح").matches(/^\D*$/,"برجاء ادخال الاسم بشكل صحيح"), //ok
      }),
      // test: Yup.array().of(
      //   Yup.object().shape({
      //     name: Yup.string().required('يرجى إدخال نوع الاختبار'),
      //   })
      // )
})
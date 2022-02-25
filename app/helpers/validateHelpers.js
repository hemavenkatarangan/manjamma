const { getDetail } = require('./errorHelpers');
const Course = require('../models/course.model');


module.exports = {

  validateEventRegistration: (user, event) => {
    let errorMessage = {};
    let details = [];
    let validFlag = true;

    if(!user.overrideValidation){
      if (!(user.age >= event.minAge && user.age <= event.maxAge)) {
        details.push(getDetail('age', 'does not meet the critieria'));
      }
  
      if(event.isUserCompleteProfileNeeded){
        if(!user.completeProfile){
        details.push(getDetail('profile', 'user needs to complete his profile'));
        }
      }
  
      if (Date.now() > event.registrationEndDate) {
        details.push(getDetail('date', 'registration already closed'));
      }
  
      if (event.eventMaxSize == event.registeredCount) {
        details.push(getDetail('size', 'event is full, max size reached'));
      }
  
      if (event.receivedApplicationCount = event.registrationAcceptanceCount) {
        details.push(getDetail('applications', 'event received maximum applications'));
      }
  
      if (event.status == 'Cancelled') {
        details.push(getDetail('event', 'event is cancelled'));
      }
  
  
      if (details.length) {
        validFlag = false;
        errorMessage.details = details;
      }

    }



    return {
      isValid: validFlag,
      errors : errorMessage    
    };
  },

  validateCourseWithUser:  async (course, req) => {

    let errorMessage = {};
    let details = [];
    let validFlag = true;

    // if(course.autoValidate){
    //   const completeCourse  = await Course.findById(course._id).populate('qa');
    //   const qa =  completeCourse.qa;
    //   const userQa = req.body.qa;

    //   userQa.forEach(uqa => {

    //     qa.forEach( aqa =>{
    //       if(aqa._id == uqa.id){
    //         if(aqa.)
    //       }
    //     } 

    //     )

      
        
    //   });



    // }





  }




  


}
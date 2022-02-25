module.exports = {
    getError: (path, message) => {      

            let errorMessage = {};
            let detail = {};
            let details = [];
    
            detail.message = `\"${path}\" ${message}`;
            detail.context = {};
            detail.context.key = path;
            details.push(detail);    
            errorMessage.details = details;
            return errorMessage;     
         },

         getErrorDetail: (path, message) => {   

          let detail = {};  
          detail.message = `\"${path}\" ${message}`;
          detail.context = {};
          detail.context.key = path; 
         return detail;     
       }
}
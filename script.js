 function snapCrackle(maxValue){
     let maxValueRetorno = "";
     for (let index = 1; index <= maxValue ; index++){
         if((index % 2) != 0 && (index % 5) == 0){
             maxValueRetorno = maxValueRetorno + "SnapCrackle, " 

         }else if((index % 5) == 0){
             maxValueRetorno = maxValueRetorno + "Crackle, "  
        
         }else if((index % 2) != 0){
             maxValueRetorno = maxValueRetorno + "Snap, "
         }
         else{
             maxValueRetorno = maxValueRetorno + `${index}, `
         };
     };
     return maxValueRetorno;
    
 };
console.log(snapCrackle(12));
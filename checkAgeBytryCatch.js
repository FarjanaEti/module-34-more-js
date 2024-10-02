function loadAge(){
     const ageFeild=document.getElementById('age')
     const input=ageFeild.value;
   //  console.log(input)
     const error=document.getElementById('error') 
     
     try{
         const age=parseInt(input)
         console.log(age)
         if(age<18){
            throw "Baccha not allowed";                   
         } 
         else if(age>50){
            throw "murubbi murubbi umhuu umhuu" ;                 
         }                  
     }
   catch(err){
        console.log("Please inter an valid input");
        error.innerHTML=err ;                     
   }
   finally{
        console.log("  Finally Valid age entered")                      
   }
 //  console.log(122)
}
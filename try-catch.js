function loadAge(){
     const textField=document.getElementById('age')
     const age=textField.value;
     const error=document.getElementById('error');
     
     try{
                               
     //console.log(frtt)
     //console.log(1223)//ager error ar jonno ata run korbe na
        const ageNumber=parseInt(age);
        if(isNaN(ageNumber)){
            throw "Pleas enter a valid number"                  
        }                      
     }
     catch(er){
         console.log("Errror",er)//console a dekhabe  
         error.innerHTML="Error"+er; //input feild ar niche                  
     }
     finally{
        console.log("All done")                      
     }
    console.log(1223) //run o korbe try ar error o dekhabe                       
}
let num=0;
const clockeId=setInterval(()=>{
     num++;
     if(num>5){
        clearInterval(clockeId)                      
     } 
     console.log(clockeId,num)                        
},2000)
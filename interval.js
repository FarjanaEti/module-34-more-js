let num=0;
const clockeId=setInterval(()=>{
     num++;
     if(num>5){
        clearInterval(clockeId)                      
     } 
     console.log(num)                        
},2000)
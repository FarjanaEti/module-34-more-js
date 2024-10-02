function loadData1(){
     fetch('https://jsonplaceholder.typicode.com/users') 
     .then(res=>res.json()) 
     .then(data=>display(data))     
     function display(data){
           console.log(data);                   
     }                  
}

// async function
 async function loadData2(){
    const resource=  await  fetch('https://jsonplaceholder.typicode.com/users') 
     const data=await resource.json()    
           console.log(data);                                  
}

//arrow function
const loadData3=async()=>{
      const res= await fetch('https://jsonplaceholder.typicode.com/users')
      const data=await res.json();
      console.log(data)                        
}

//try catch
const loadData4=async()=>{
     try{                         
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json();
    console.log(dat)
  }                  
  catch{
      console.log('error')                        
  }         
}

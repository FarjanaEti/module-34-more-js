function print(){
  console.log('A');
 two();
    console.log('c') ;                                                    
}function two(){
     console.log('D');
     three();                         
}
function three(){
   console.log('p')                           
}
print();
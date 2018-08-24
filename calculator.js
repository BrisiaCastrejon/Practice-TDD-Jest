const suma = (a,b) => {
 if (!a && !b){
   return 0;
 }
 return (!b && a) || a+b ;  
} 

const resta = (a,b) => {
  if(!a && !b){
    return 0;
  }
  return (!b && a) || a-b ;
}

const multiplicacion = (a,b) => {
  if(!a && !b){
    return 0;
  }
  return (!b && a) || a*b ;
}

const division = (a,b) => {
  if(!a && !b){
    return 0;
  }
  if (b === 0) {
    return null
  }
  return (!b && a) || a/b ;
}

module.exports = {
  suma, resta, multiplicacion, division
  
}
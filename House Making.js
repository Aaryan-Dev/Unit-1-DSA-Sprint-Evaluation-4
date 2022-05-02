// ou are building your dream house, so you want to use the best possible material for your house

// So, you need material for building the house

// You are given a numberN,which is the total number of material required, and the price of each material is stored in a variableK

// Declare a variable with the namescrew, such thatscrew = N*K

// If the value stored inscrewis greater than or equal to1000and divisible by 5, printyes, else printno


function rangeOfTwo(N,K) {
  
    screw = N*K
   if(screw>=1000 && screw%5===0){
       console.log("yes");
   }else{
       console.log("no");
   }
   
  }
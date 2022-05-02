// You are given a string stored in a variable with the namestr, whose length is stored in a variable with the nameN

// The string is binary, which means it contains only 1's and 0's

// You have to find the length of the longest substring which starts at 0 and ends at 0 as well

// For example, consider the value stored inN = 4, andstr = 1001

// All the non empty subarrays of the given string are

// 1
// 10
// 100
// 1001
// 0
// 00
// 001
// 0
// 01
// 1

// The longest substring starting at 0 and end at 0 is00, whose length is 2. Therefore, the required output is2
// Note : If the count of 0's in the given string is less than or equal to 1, 
// then the output should be 0, as there are no substring starting and ending at 0

function binaryString4(N,str){
    let com = []
   for(i=0; i<str.length; i++){
       bag = ""
    //   value = false;
       for(j=i;j<N; j++ ){
          bag = bag + str[j]
           
           let zero = 0;
        
     if(zero==bag[0]&&zero==bag[bag.length-1]){
    //   console.log(bag);
    // value == true;
      com.push(bag)
       }
     }
   }
    //   console.log(com);
      let max = -Infinity;
      for(k=0; k<com.length; k++){
          if(max<com[k]){
              max = com[k]
          }
      }
       if(max.length===undefined){
             console.log(0);
       }else if(max.length==1){
           console.log(0);
       }else{
            console.log(max.length);
       }
}

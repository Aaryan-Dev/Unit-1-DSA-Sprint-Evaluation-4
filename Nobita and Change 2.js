// Nobita & Doraemon both are given a number N (length of the string) and a string, the string contain both Lowercase and Uppercase English Alphabet characters , convert
// all lowercase characters into Uppercase then output the entire string.



// e.g. "abAbC"  should be changed to "ABABC"


function nobitaChange(N,str) {
    
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    bag = "";
    for(i=0; i<N; i++){
        for(j=0; j<lower.length; j++){
        if(str[i]==lower[j]){
            bag = bag + upper[j]
        }else if(str[i]==upper[j]){
            bag = bag + str[i]
        }
    }
       
    
    }
      console.log(bag);  
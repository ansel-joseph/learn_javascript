function countVowels(str){
    count=0
    for(const char of str.toLowerCase()){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            count++
        }
    }
    console.log("The total vowels are: ", count)
}


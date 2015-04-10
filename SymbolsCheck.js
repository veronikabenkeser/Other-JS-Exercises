function SimpleSymbols(str){
    for(i=0; i<str.length; i++){
        if (/[a-z]/ig.test(str[i])){
            if(str[i-1] != "+" || str[i+1] != "+"){
                return false;
            }
        }
    }
    return true;
}

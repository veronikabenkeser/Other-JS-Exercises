function LetterCountI(str) { 
	str = str.toLowerCase();
  	var arr = str.split(" ");
  	var result = -1;
  	var max=0;
  
  for(var i in arr){
  	if(arr[i].toString().split("").sort().join("").match(/([a-z])\1+/ig) !==null){
      var newStr=arr[i].toString().split("").sort().join("").match(/([a-z])\1+/ig).toString();
      if(newStr.length>max){
        max=newStr.length;
        result = arr[i];
      }
 	}
  }
  return result;
}

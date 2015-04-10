function Palindrome(str) { 
    str = str.split(" ").join("");
	return str == str.split(" ").join("").split("").reverse().join("");
         
}

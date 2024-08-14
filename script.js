function isSameType(value1, value2) {
  //your js code here
	let num1=parseFloat(value1);
	let num2=parseFloat(value2);
	if(!isNaN(num1) && !isNaN(num2)){
		return true;
	}else if(isNaN(num1) && isNaN(num2)){
		return typeof value1===typeof value2;
	}else{
		return false;
	}
	
	
}
 
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

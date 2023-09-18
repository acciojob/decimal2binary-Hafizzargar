function decimalToBinary(num) {
  //Write you code here
	let s="";
	while(num>0){
		let d=Math.floor(num%2);
		s=s+d;
		num=Math.floor(num/2);
	}

	return s;
  
}

window.decimalToBinary = decimalToBinary;

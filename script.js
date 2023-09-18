function decimalToBinary(num) {
  //Write you code here
	let s="";
	while(num>0){
		let d=num%2;
		s=s+d;
		num=num/10;
	}

	return s;
  
}

window.decimalToBinary = decimalToBinary;

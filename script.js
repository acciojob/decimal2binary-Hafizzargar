function decimalToBinary(num) {
  //Write you code here
	let s="";
	while(num>0){
		let d=Math.floor(num%2);
		s=s+d;
		num=Math.floor(num/2);
	}
	let rs=0;

	for(int i=s.length-1;i>=0;i--){
		rs=rs+s[i];
	}
	return rs;
  
}

window.decimalToBinary = decimalToBinary;

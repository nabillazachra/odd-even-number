const currentText = document.getElementById("result-display").innerHTML;

function oddShow(x) {
	var nilai = 1;
       while(nilai <= x){
   		if(nilai%2==0)
   		{
			document.getElementById("result-display").innerHTML = `${currentText}, ${nilai}`;
   		} 
   		nilai++;
   	}
}

function evenShow(y) {
	var start = 1;
       while(start <= y){
   		if(start%2==1)
   		{
			document.getElementById("result-display").innerHTML = `${currentText}, ${start}`;
   		} 
   		start++;
   	}
}

function primeShow(a) {
	function checkPrime(z) {
	    var max = Math.sqrt(z);
	    for(var i = 2; i <= max; i++) {
	        if(z % i == 0)
	        return false;
	    }
	    return true;
	}

	for(var z = 2; z <= a; z++) {
	    if(checkPrime(z)
			document.getElementById("result-display").innerHTML = `${currentText}, ${z}`;
		}
	}
}


function calculator(e, type) {
	e.preventDefault();

	var a = Number(document.getElementById("operand-1").value),
	result;

	switch(type) {
		case 'odd':
		result = oddShow(a);
		break;
		case 'even':
		result = evenShow(a);
		break;
		case 'prime':
		result = primeShow(a);
		break;
		default:
		alert("Terjadi kesalahan, silahkan coba lagi");
		break;
	}

}
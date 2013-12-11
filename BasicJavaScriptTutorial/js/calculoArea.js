function calcularArea(){
	var radio=document.getElementById("radio").value;
	var areaInput=document.getElementById("area");
	radio=parseFloat(radio);
	var area;
	if(radio && radio>0){
		area=Math.PI*Math.pow(radio,2);
		areaInput.value=area;
	}
	return false;
}

function init(){
	var form=document.getElementById("areaForm");
	form.onsubmit=calcularArea;
}

window.onload=init;
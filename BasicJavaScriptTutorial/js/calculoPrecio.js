
function init(){
	
	//alert("init");
	var boton=document.getElementById("calcularSubmit");
	//boton.onsubmit=calcularPrecio;
	boton.onclick=calcularPrecio;
}

function calcularPrecio(){
	//dwfwfwf
	
	//alert("calcularPrecio");
	var pvp=parseFloat(document.getElementById("pvp").value);
	var unidades=parseFloat(document.getElementById("unidades").value);
	var tasas=parseFloat(document.getElementById("tasas").value);
	var descuento=parseFloat(document.getElementById("descuento").value);
	var totalInput=document.getElementById("total");
	var total=pvp*unidades;
	total=total+(total*tasas/100);
	total=total-(total*descuento/100);
	totalInput.value=total;
	
} 

window.onload=init;

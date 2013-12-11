var numeros=[];

function init(){
	console.log("init");
	var ordenarBtn=document.getElementById("ordenarBtn");
	var addBtn=document.getElementById("addBtn");
	ordenarBtn.onclick=ordenar;
	addBtn.onclick=add;
}

function add(){
	console.log("add");
	var numero=document.getElementById("numero");
	numeros.push(numero.value);
	var option ='<option value=' + numero.value + '>' + numero.value + "</option>";
	var numerosElement=document.getElementById("numeros");
	console.log(option);
	numerosElement.innerHTML+=option;
	console.log(numerosElement.innerHTML);
}

function ordenar(){
	console.log("ordenar");
	//Ordenacion por el metodo de la bubuja
	var j;
	for(j=1;j<numeros.length;j++){
		var elementoEv=j;
		for(i=elementoEv-1;i>=0;i--){
			if(numeros[i]>numeros[elementoEv]){
				var aux=numeros[i];
				numeros[i]=numeros[elementoEv];
				numeros[elementoEv]=aux;
				elementoEv--;
			}else{
				break;
			}
		}
	}
}

window.onload=init
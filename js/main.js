function agregarTarea(){
	
	var contenido=document.getElementById('contenido').value;
	var div1=document.createElement('div');
	div1.classList.add("row");
	var padre=document.getElementById('tareas-agregadas');
	
	var checkIn=document.createElement('input');
	
	checkIn.setAttribute("type", "checkbox");
	checkIn.classList.add("col-xs-1","col-sm-1","col-md-1");
	
	var textoTarea=document.createTextNode(contenido);
	var contiene=document.createElement('span');
	contiene.classList.add("col-md-8","col-sm-8","col-xs-8");
	
	var corazon=document.createElement('i');
	corazon.setAttribute("class","fa fa-heart");
	corazon.setAttribute("aria-hidden","true");
	
	var trash=document.createElement('i');
	trash.setAttribute("class","fa fa-trash-o");
	trash.setAttribute("aria-hidden","true");
	var botonCoraz=document.createElement('button');
	var botontrash=document.createElement('button');
	botonCoraz.setAttribute("type","button");
	botonCoraz.classList.add("btn","btn-default","col-md-1","col-sm-1","col-xs-1","text-center");
	botonCoraz.appendChild(corazon);
	botontrash.setAttribute("type","button");
	botontrash.classList.add("btn","btn-default","col-md-1","col-sm-1","col-xs-1","text-center");
	botontrash.appendChild(trash);
	
	contiene.appendChild(textoTarea);

	div1.appendChild(checkIn);
	div1.appendChild(contiene);
	div1.appendChild(botonCoraz);
	div1.appendChild(botontrash);
	
	padre.appendChild(div1);

	iconTrash.addEventListener('click', )
 	iconTrash.addEventListener('click', function(){
		contenedorTareas.removeChild(divRow);
	 });	
}



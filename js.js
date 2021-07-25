function mostrar() {
	document.getElementById('obj1').style.display = 'block'
	document.getElementById('obj1').style.position = 'fixed'
}

function ocultar() {
	document.getElementById('obj1').style.display = 'none'
}

function obtenerDatos(){
	let title = document.getElementById('title').value
	let animo = document.getElementById('animo').value
	let date = document.getElementById('date').value
	let tex = document.getElementById('descripcion').value
	let arr = [title, animo, date, tex]

	if(arr[0] == "" ||arr[1] == "" || arr[2] == ""){
		return alert('Debe rellenar todos los campos')
	}
	let table = document.getElementById('table')

	let tr = document.createElement('tr')
	tr.classList.add('tr')
	let td_0 = document.createElement('td') //CheckBox
	let td = document.createElement('td')
	let td_1 = document.createElement('td')
	let td_2 = document.createElement('td')	
	let td_3 = document.createElement('td')

	let tdText = document.createTextNode(arr[0])
	let tdText_1 = document.createTextNode(arr[1])
	let tdText_2 = document.createTextNode(arr[3])
	let tdText_3 = document.createTextNode(arr[2])

	td_0.innerHTML = '<input type="checkbox" class="check" style="width:1em"> </input>'

	td.appendChild(tdText)
	td_1.appendChild(tdText_1)
	td_2.appendChild(tdText_2)
	td_3.appendChild(tdText_3)

	tr.appendChild(td_0)
	tr.appendChild(td)
	tr.appendChild(td_1)
	tr.appendChild(td_2)
	tr.appendChild(td_3)

	table.appendChild(tr)

	document.getElementById('formulario').reset()
	countItem()
}

function removeItem(){
	let del
	let checkbox = document.querySelectorAll('.check') 
	let tr = document.querySelectorAll('.tr')
	let list = validateCheck(checkbox)
	if (list == null || list.length == 0){
		return(alert('Para Borrar un Registro, debes Seleccionarlo primero'))
	}

	else {
		for(let i = 0 ; i < list.length; i++){
			del = list[i]
			tr[del].remove() 
		}
	}
	countItem()
}

function update (array) {
	let list = array
	let tr = document.querySelector('.tr')
	let positionTr = list[0]
	return positionTr
}


function validateCheck (list) {
	let listValidate = []
	let j = list
	if (j.length == 0) return null
	for (let i = 0; i < j.length; i++) {
		if (j[i].checked)listValidate.push([i])
	}
	return listValidate
}

function countItem () {
	let tr = document.querySelectorAll('.tr').length
	let h1 = document.querySelector('#cont').innerHTML = tr
}


// ---------------------Update-------------


function closeEv () {
	let close = document.querySelector('.contentU')
	close.classList.add('contentH')
	close.classList.remove('contentU')

}

function getData () {
	// debugger
	let val = [] //obtiene el valor de la tabla para meterlas al formulario de Update
	let checkbox = document.querySelectorAll('.check')
	let tr = document.querySelectorAll('.tr') 
	let a = document.querySelector('#link')
	let list = validateCheck(checkbox)
	let form = document.querySelector('#formUpdate') //formulario de Update

	if (list == null || list.length == 0) { //si el array está vacío || null, se redirecciona a la pagina principal
		alert('Para actualizar un registro debes Seleccionarlo Primero')
		return
	}
	if (list.length > 1) { 
		alert('Solo puedes Actualizar 1 registro a la vez')
	}
	else {
		let p = update(list) // saca el valor del array en la posicion 0
		let q = tr[p].childNodes // selecciona el tag tr con el indice p
		
		//Itera sobre el tag seleccionado
		//Agrega al array los valores seleccionados
		for (var i = 1; i < q.length; i++) {
			val.push(q[i].textContent)	
		}
		let updateB = document.querySelector('#updateB')
		updateB.addEventListener('click',cierre)

		show()
		paint(val,form)
	}
}

function paint(list,form,table){
	let a = list, l = form, h,fin = []
	for (var i = 0; i < a.length; i++) {
		h = l[i].value = a[i]
		fin.push(h)	
	}

	return fin
}
function show () {
	let I = document.querySelector('.contentH')
		I.classList.remove('contentH')
		I.classList.add('contentU')
}

function cierre (event) {
	event.preventDefault()
	let checkbox = document.querySelectorAll('.check')
	let list = validateCheck(checkbox)
	let w = checkbox[list].parentNode.parentNode
	let val = [''], h
	let form = document.querySelector('#formUpdate') //formulario de Update
	for (let i = 0; i <= 4; i++) {
		val.push(form[i].value)
		w.childNodes[i].textContent = val[i]
		console.log(val)
	}
	w.childNodes[0].innerHTML = '<input type="checkbox" class="check"> </input>'
	closeEv()
}
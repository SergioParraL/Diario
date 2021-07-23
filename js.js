// candidates@southteams.com
function mostrar() {
	document.getElementById('obj1').style.display = 'block'
	document.getElementById('obj1').style.position = 'fixed'
}

function ocultar() {
	document.getElementById('obj1').style.display = 'none'
}

function obtenerDatos(){
	title = document.getElementById('title').value
	animo = document.getElementById('animo').value
	date = document.getElementById('date').value
	arr = [title, animo, date]

	let table = document.getElementById('table')

	let tr = document.createElement('tr')
	tr.classList.add('tr')
	let td_0 = document.createElement('td') //CheckBox
	let td = document.createElement('td')
	let td_1 = document.createElement('td')
	let td_2 = document.createElement('td')
	let tdText = document.createTextNode(arr[0])
	let tdText_1 = document.createTextNode(arr[2])
	let tdText_2 = document.createTextNode(arr[1])

	td_0.innerHTML = '<input type="checkbox" class="check"> </input>'

	td.appendChild(tdText)
	td_1.appendChild(tdText_1)
	td_2.appendChild(tdText_2)

	tr.appendChild(td_0)
	tr.appendChild(td)
	tr.appendChild(td_1)
	tr.appendChild(td_2)

	table.appendChild(tr)

	document.getElementById('formulario').reset()
	add()
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
		decrement()
	}
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

function add() {
	cont++
	let h1 = document.getElementById('cont')
	h1.firstChild.nodeValue = cont
}
function decrement () { 
	cont--
	let h1 = document.getElementById('cont')
	h1.firstChild.nodeValue = cont
}

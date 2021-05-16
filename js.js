
function mostrar() {
	document.getElementById('obj1').style.display = 'block'
	document.getElementById('obj1').style.position = 'fixed'
}

function ocultar() {
	document.getElementById('obj1').style.display = 'none'
}


// let resultados
let title, animo, date,arr=[] //variables globales

function obtenerDatos(){
	title = document.getElementById('title').value
	animo = document.getElementById('animo').value
	date = document.getElementById('date').value
	arr = [title, animo, date]

	let table = document.getElementById('table')

	let tr = document.createElement('tr')

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
}


function add() {
	cont++
	let h1 = document.getElementById('cont')
	h1.firstChild.nodeValue = cont
}

function removeItem(){

	let select, no = 0
	let check = document.getElementById('table')
	let h1 = document.getElementById('cont')
	let contador = table.childElementCount
	
	if (cont == 0) alert('No puedes Eliminar algo que no EXISTE')

	for (var i = 1; i < contador + 1; i++) {
		select = table.childNodes[i].childNodes[0].childNodes[0]
		if (select.checked == true) {
			select = table.childNodes[i]
			select.parentNode.removeChild(select)
			cont--
			h1.firstChild.nodeValue = cont
			no++
		}
	}
	if (contador > 1 && no == 0) alert('Para eliminar, debes Seleccionar')
	// return lista	s
}


const table = document.getElementById('pixelCanvas');

function makeGrid() {

// var defined
	const height = document.getElementById('inputHeight');
	const width = document.getElementById('inputWidth');

	var rows = height.value;
	var cols = width.value;

//loop here
	for(i = 1; i <= rows; i++) {

		table.appendChild(document.createElement('TR'));
		var lastRow = table.lastChild;

		for(j = 1; j <= cols; j++) {

			lastRow.appendChild(document.createElement('TD'));
			lastRow.lastChild.setAttribute('class','cell');
		}
	}

	table.addEventListener('click', function (evt) {
		if (evt.target.nodeName === 'TD') {
		  var color = document.getElementById('colorPicker').value;
		  evt.target.style.backgroundColor = color;
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#sizePicker').addEventListener('click', function (evt) {

		if(table.hasChildNodes() === true){
			while(table.rows.length > 0) {
				  table.deleteRow(0);
			}
		}
		if (evt.target.getAttribute("type")==="submit") {
			evt.preventDefault();
			makeGrid(evt)
		}
	});

});

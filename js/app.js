const mainList = [];

function addNumber(event) {
  event.preventDefault();
  const numberInput = document.getElementById('number');
  const inputValue = parseFloat(numberInput.value);
  if (!isNaN(inputValue)) {
    mainList.push(inputValue);
    numberInput.value = '';
    showList();
  } else {
    alert('Por favor, ingrese un número válido.');
  }
}

function showList() {
  const tableBody = document.getElementById('numberList');
  tableBody.innerHTML = '';

  mainList.forEach((number, index) => {
    const row = `<tr>
                    <th>${index + 1}</th>
                    <td>${number}</td>
                </tr>`;
    tableBody.innerHTML += row;
  });
}

function processList() {
  if (mainList.length === 0) {
    alert('Agregue al menos un número antes de procesar.');
    return;
  }

  const total = mainList.reduce((acc, num) => acc + num, 0);
  const average = total / mainList.length;
  const minimum = Math.min(...mainList);
  const maximum = Math.max(...mainList);

  const summaryList = document.getElementById('processList');
  summaryList.innerHTML = `
        <li>Suma total: ${total}</li>
        <li>Promedio: ${average.toFixed(2)}</li>
        <li>Minimo: ${minimum}</li>
        <li>Maximo: ${maximum}</li>
    `;
}

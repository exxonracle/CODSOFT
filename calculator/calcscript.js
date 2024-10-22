function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculateResult() {
    let resultField = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(resultField);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
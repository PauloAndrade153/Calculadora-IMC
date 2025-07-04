function calcular() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var res = document.getElementById('res');
    if (peso == '' || altura == '' || altura <= 0) {
        res.innerHTML = 'Preencha os campos corretamente!';
        return;
    }
    var imc = peso / (altura * altura);
    var msg = '';
    if (imc < 18.5) {
        msg = 'Abaixo do peso';
    } else if (imc < 25) {
        msg = 'Peso normal';
    } else if (imc < 30) {
        msg = 'Sobrepeso';
    } else {
        msg = 'Obesidade';
    }
    res.innerHTML = 'IMC: ' + imc.toFixed(2) + ' - ' + msg;
}

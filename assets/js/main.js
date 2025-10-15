document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const peso = parseFloat(document.querySelector('#peso').value);
        const altura = parseFloat(document.querySelector('#altura').value);

        if (isNaN(peso) || peso <= 0) {
            alert('O campo peso está vazio ou inválido');
            return;
        }
        if (isNaN(altura) || altura <= 0) {
            alert('O campo altura está vazio ou inválido');
            return;
        }

        function imc(peso, altura) {
            altura = altura / 100;
            return peso / (altura * altura);
        }

        function levelimc(x) {
            if (x > 0 && x <= 19) {
                resultado.style.backgroundColor = 'yellow';
                resultado.style.color = 'black';
                return "Magreza";
            } else if (x > 19 && x <= 25) {
                resultado.style.backgroundColor = 'green';
                resultado.style.color = 'white';
                return "Normal";
            } else if (x > 25 && x <= 30) {
                resultado.style.backgroundColor = 'yellow';
                resultado.style.color = 'black';
                return "Sobrepeso";
            } else if (x > 30 && x <= 35) {
                resultado.style.backgroundColor = 'orange';
                resultado.style.color = 'black';
                return "Obesidade 1";
            } else if (x > 35 && x <= 40) {
                resultado.style.backgroundColor = 'red';
                resultado.style.color = 'black';
                return "Obesidade 2";
            } else if (x > 40) {
                resultado.style.backgroundColor = 'black';
                resultado.style.color = 'white';
                return "Obesidade 3 (grave ⚠🛑)";
            } else {
                return "Erro";
            }
        }

        const r = imc(peso, altura);
        const r1 = levelimc(r);

        resultado.innerHTML = `Seu IMC = ${r.toFixed(2)} <br> Seu peso está ${r1}`;

        document.getElementById('console').innerHTML += `${peso} / (${altura} * ${altura}) = IMC = ${r.toFixed(2)} status ${r1}<br>`;
    });
});

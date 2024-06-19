function calcular() {
    const valor1kZN = parseFloat(document.getElementById('valor1kZN').value) || 1;
    const linhas = document.querySelectorAll('#tabelaItens tr');
    let totalGeral = 0;

    linhas.forEach((linha, index) => {
        const valorZN = parseFloat(linha.querySelector('.valorZN').value) || 0;
        const quantidade = parseFloat(linha.querySelector('.quantidade').value) || 0;

        const valorKK = (valorZN / 1000) * valor1kZN;
        const valorFinalKK = valorKK * quantidade;
        const totalZN = valorZN * quantidade;

        linha.querySelector('.valorKK').innerText = valorKK.toFixed(3);
        linha.querySelector('.valorFinalKK').innerText = valorFinalKK.toFixed(3);
        linha.querySelector('.totalZN').innerText = formatNumber(totalZN);

        if (quantidade > 0) {
            totalGeral += valorFinalKK;
        }
    });

    document.getElementById('totalGeral').innerText = totalGeral.toFixed(3);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function filtrar() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const linhas = document.querySelectorAll('#tabelaItens tr');

    linhas.forEach((linha) => {
        const item = linha.querySelector('td').innerText.toLowerCase();
        if (item.includes(filtro)) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
}

// Inicializa os valores ao carregar a página
window.onload = calcular;

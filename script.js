function resposta(opcao) {
    const resultado = document.getElementById('resultado');

    if(opcao === 'certo') {
        resultado.innerHTML = '✅ Resposta correta!';
    } else {
        resultado.innerHTML = '❌ Tente novamente!';
    }
}

function modoEscuro() {
    document.body.classList.toggle('dark');
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const criarElementoBtn = document.getElementById("Inserir Elemento");
    const container = document.getElementById("container");

    criarElementoBtn.addEventListener("click", function () {
        const novoElemento = document.createElement("div");
        novoElemento.className = "elemento";
        novoElemento.textContent = "Novo Elemento";
        container.appendChild(novoElemento);
    });
});

const elementInput = document.getElementById('elementInput');
const elementList = document.getElementById('elementList');
const indexInput = document.getElementById('indexInput');

const elements = [];

// Função para inserir um elemento no vetor e atualizar a lista
function inserirElemento() {
    const newElement = elementInput.value;
    if (newElement) {
        elements.push(newElement);
        elementInput.value = ''; // Limpa o campo de entrada

        atualizarLista();
    }
}

// Função para remover um elemento do vetor pelo índice
function removerElemento() {
    const index = parseInt(indexInput.value);
    if (!isNaN(index) && index >= 0 && index < elements.length) {
        elements.splice(index, 1);
        indexInput.value = ''; // Limpa o campo de entrada

        atualizarLista();

    }
}
function comparaNumeros(a, b) {
    lista.sort(comparaNumeros);
    if (a == b) return 0; if (a < b) return -1; if (a > b) return 1;
}
// Função para atualizar a lista de elementos no HTML
function atualizarLista() {
    elementList.innerHTML = ''; // Limpa a lista antes de recriá-la
    elements.forEach((element, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Elemento ${index}: ${element}`;
        listItem.addEventListener('click', () => {
            indexInput.value = index; // Preenche o campo de índice com o índice do item clicado
        });
        elementList.appendChild(listItem);
    });
}



atualizarLista(); // Chama a função para exibir a lista inicialmente

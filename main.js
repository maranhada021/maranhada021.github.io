const itens = {
    Papel: {
        consumoAguaTexto: "A quantidade de água para fazer o papel é de 3 a 15 litros por quilo."},
    Banana: {
        consumoAguaTexto: "A quantidade de água para fazer a banana é de 160 litros de água."},
    Chocolate: {
        consumoAguaTexto: "A quantidade de água para fazer o chocolate é de 17 mil litros por quilo"}

    // Adicione mais itens conforme necessário
};

function calcularConsumo() {
    const itemSelecionado = document.getElementById("itemSelecionado").value;
    const item = itens[itemSelecionado];

    if (item) {
        document.getElementById("consumoAguaTexto").textContent = item.consumoAguaTexto;
    }
}

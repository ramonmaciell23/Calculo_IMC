function calcularIMC() {
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let resultado = document.getElementById("resultado");
    let valid = true;

    // Validação dos campos
    if (peso.value.trim() === "" || peso.value <= 0) {
        peso.classList.add("is-invalid");
        valid = false;
    } else {
        peso.classList.remove("is-invalid");
    }

    if (altura.value.trim() === "" || altura.value <= 0) {
        altura.classList.add("is-invalid");
        valid = false;
    } else {
        altura.classList.remove("is-invalid");
    }

    if (!valid) {
        resultado.innerHTML = '<span class="text-danger">Preencha os campos corretamente!</span>';
        return;
    }

    // Cálculo do IMC
    let imc = (peso.value / (altura.value * altura.value)).toFixed(2);

    // Definição da categoria do IMC
    let categoria = "";
    if (imc < 18.5) {
        categoria = "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso Normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    // Exibir resultado
    resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> - <span class="text-primary">${categoria}</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
    let dataAtualElement = document.getElementById("dataAtual");
    diaSemana = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
    mes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    let data = new Date();
    dataAtualElement.textContent = diaSemana[data.getDay()] + ", " + data.getDate() + " de " + mes[data.getMonth()] + " de " + data.getFullYear();
});

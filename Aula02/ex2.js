function atualizarRelogio() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;
    document.getElementById("relogio").innerHTML = horas + ":" + minutos + ":" + segundos;
    }
    setInterval(atualizarRelogio, 1000);
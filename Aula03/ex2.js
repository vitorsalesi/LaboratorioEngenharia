addEventListener('submit', function (evento) {
    evento.preventDefault();
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let km = document.getElementById("km").value;
    let fipe = document.getElementById("fipe").value;

    let carro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        km: km,
        fipe: fipe,

        anosUtilizacao() {
            let year = new Date().getFullYear();
            let diff = year - this.ano;

            if (diff === 0) {
                return 0;
            } else {
                return diff;
            }
        },

        valorMercado() {
            let anos = this.anosUtilizacao() || 1; // considera 1 ano se a função retornar 0
            let kmAno = this.km / anos;

            if (kmAno < 30000) {
                return this.fipe * 1.1;
            }
            else if ((kmAno >= 30000) && (kmAno <= 50000)) {
                return this.fipe * 1.0;
            }
            else {
                return this.fipe * 0.9;
            }
        }
    }

    alert(`O carro tem ${carro.anosUtilizacao()} anos de utilização e seu valor de mercado é R$ ${carro.valorMercado().toFixed(2)}`);
});

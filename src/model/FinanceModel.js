class FinanceModel {
    constructor() { 
        this.txJuros = 0.0
        this.vFinaciado = 0
        this.nMeses = 0
    }

    setValues(txJuros, vFinaciado, nMeses){
        this.txJuros = txJuros
        this.vFinaciado = vFinaciado
        this.nMeses = nMeses
    }

    calculoParcelaPRICE() {

        let valor = Math.floor((this.vFinaciado * Math.pow((1 + this.txJuros), this.nMeses) * this.txJuros) / (Math.pow((1 + this.txJuros), this.nMeses) - 1))

        return {
            parcela1: valor,
            parcelaN: valor,
            valorFinal: valor * this.nMeses,
            diferenca: (valor * this.nMeses) - this.vFinaciado
        }
    }

    calculoParcelaSAC() {
        let armortizacao = this.vFinaciado / this.nMeses
        let juros = this.vFinaciado * this.txJuros
        let parcela1 = Math.floor(armortizacao + juros)
        let diminuicao = armortizacao * this.txJuros
        let parcelaN = Math.floor(armortizacao + diminuicao)

        let valorFinal = Math.floor((parcela1 + parcelaN) * (this.nMeses / 2))
        let diferenca = Math.floor(valorFinal - this.vFinaciado)

        return {
            parcela1,
            parcelaN,
            valorFinal,
            diferenca
        }
    }
}

module.exports = FinanceModel

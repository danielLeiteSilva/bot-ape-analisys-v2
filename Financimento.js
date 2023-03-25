class Finance {
    constructor(txJuros, vFinaciado, nMeses) { 
        this.txJuros = txJuros
        this.vFinaciado = vFinaciado
        this.nMeses = nMeses
    }

    calculoParcelaPRICE() {
        return Math.floor((this.vFinaciado * Math.pow((1 + this.txJuros), this.nMeses) * this.txJuros) / (Math.pow((1 + this.txJuros), this.nMeses) - 1))
    }

    calculoParcelaSAC() {
        let armortizacao = this.vFinaciado / this.nMeses
        let juros = this.vFinaciado * this.txJuros
        let parcela1 = armortizacao + juros
        let diminuicao = armortizacao * this.txJuros
        let parcelaN = armortizacao + diminuicao

        let valorFinal = (parcela1 + parcelaN) * (this.nMeses / 2)
        let diferenca = valorFinal - this.vFinaciado

        return {
            parcela1,
            parcelaN,
            valorFinal,
            diferenca
        }
    }
}


var cal = new Finance(0.005, 150000, 300)

// console.log(cal.calculoParcelaPrice(0.007, 175000, 420)) 
console.log(cal.calculoParcelaSAC(150000, 0.005, 300))


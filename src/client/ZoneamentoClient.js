class ZoneamentoClient {
  constructor() {
    this.salary = process.env.SALARIO || 1302
  }

  salaryCalc = mult => {
    return parseFloat(this.salary * mult)
  }

  zona = mult => {
    return this.salaryCalc(mult)
  }

  his_1 = renda => {
    if (renda < this.zona(3)) return "HIS 1"
  }

  his_2 = renda => {
    if (renda < this.zona(6)) return "HIS 2"
  }

  hmp = renda => {
    if (renda < this.zona(10)) return "HMP"
  }

  r2v = renda => {
    if (renda > this.zona(10)) return "R2V"
  }

  register = body => {
    const { renda } = body
    return this.his_1(renda)
      || this.his_2(renda)
      || this.hmp(renda)
      || this.r2v(renda)
  }
}

module.exports = ZoneamentoClient


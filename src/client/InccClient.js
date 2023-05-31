class InccClient {
  constructor(object) {
    this.object = object
  }

  register = (body) => {
    const { assinatura_constrato } = body
    const { entrada } = this.object?.financiamento
    const result = assinatura_constrato > 30 || entrada > 0 ? "Sim" : "Não"
    return { key: "incc", value: result }
  }
}

module.exports = InccClient
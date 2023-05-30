class InccClient {
  constructor(object) {
    this.object = object
  }

  register = (body) => {
    const { assinatura_constrato } = body
    const result = assinatura_constrato > 30 || this.object?.entrada_resultado > 0 ? "Sim" : "Não"
    return { key: "incc", value: result }
  }
}

module.exports = InccClient
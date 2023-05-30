class CondominioClient {
  constructor() {
    this.condominio = process.env.CONDOMINIO || 11
  }

  register = (body) => {
    const { tamanho } = body
    const condominio_valor = tamanho * this.condominio
    return { key: "condominio", value: condominio_valor }
  }
}

module.exports = CondominioClient
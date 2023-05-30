class DocumentClient {
  constructor() {
    this.mcmv = process.env.MCMV || 264000.0
  }

  register = (body) => {
    const { valor_imovel } = body
    const isMCMV = valor_imovel > this.mcmv ? false : true
    return { key: "documentacao", value: isMCMV }
  }
}

module.exports = DocumentClient
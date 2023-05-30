class GovernoClient {
  constructor() {
    this.mcmv = process.env.MCMV || 264000.0
  }

  register = (body) => {
    const { valor_imovel } = body
    const governo = valor_imovel > this.mcmv ? "Habitação popular" : "Casa verde amarela"
    return { key: "governo", value: governo }
  }
}

module.exports = GovernoClient
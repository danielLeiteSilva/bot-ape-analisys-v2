const ViaCepService = require("../service/ViaCepService")

class ViaCepClient {
  constructor() {
    this.viaCepService = new ViaCepService()
  }

  register = async (body) => {
    const { cep } = body
    const address = await this.viaCepService.getAndressViaCep(cep)
    return { key: 'endereco', value: address["message"] }
  }
}

module.exports = ViaCepClient
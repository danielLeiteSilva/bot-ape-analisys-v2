class ApartamentClient {
  constructor(body) {
    this.object = {}
    this.body = body
  }
  register = async (registerClientInstance) => {
    const result = await registerClientInstance.register(this.body)
    this.setObject(result)
  }

  setObject = (result) => {
    this.object[result.key] = result.value
  }

  getObject = () => {
    return Object.assign(this.object, this.body)
  }

}

module.exports = ApartamentClient
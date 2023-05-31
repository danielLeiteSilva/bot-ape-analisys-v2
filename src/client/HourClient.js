class HourClient {
  constructor() { }

  register = () => {
    return { key: "hora", value: new Date() }
  }
}

module.exports = HourClient
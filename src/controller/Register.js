class Register{

  async salve(request, response){
    response.status(200).json("Test")
  }

}

module.exports = new Register
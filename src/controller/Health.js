class Health {
  ok(request, response) {
    response.status(200).json({ message: 'API connected' })
  }
}
module.exports = new Health
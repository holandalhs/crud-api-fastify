const db = require('../persistence/db-inMemory')

module.exports = async (request, reply) => {
    const productId = request.params.id
    db.delete(productId)
  }
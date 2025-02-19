import db from "../persistence/db-inMemory.js"

export default async function deleteProduct(fastify, options) {
  fastify.delete('/product/:id', (request, reply) => {
    const productId = request.params.id
    const response = db.delete(productId)
    return response ? reply.status(404).send(response) : "DELETADO COM SUCESSO!"
  })
}
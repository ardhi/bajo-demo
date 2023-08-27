const home = {
  method: 'GET',
  handler: async function (ctx, req, reply) {
    return reply.view('bajoDemo:/test')
  }
}

export default home

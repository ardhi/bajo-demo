async function showcase (ctx, req, reply) {
  req.theme = req.params.theme
  return await reply.view('bajoDemo:/showcase.html')
}

export default showcase

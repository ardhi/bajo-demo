async function showcase (ctx, req, reply) {
  const { map, pick } = this.app.bajo.lib._
  const { themes: allThemes } = this.app.waibuMpa
  req.theme = req.params.theme
  const themes = map(allThemes, t => pick(t, ['name', 'framework']))
  const locals = { themes }
  return await reply.view(`bajoDemo:/showcase/${req.params.page}.html`, locals)
}

export default showcase

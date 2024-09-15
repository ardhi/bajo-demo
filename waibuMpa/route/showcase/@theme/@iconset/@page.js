async function showcase (req, reply) {
  const { map, pick } = this.app.bajo.lib._
  const { themes: allThemes, iconsets: allIconsets, mappingKeys } = this.app.waibuMpa
  req.theme = req.params.theme
  req.iconset = req.params.iconset
  const themes = map(allThemes, t => pick(t, ['name', 'framework']))
  const iconsets = map(allIconsets, t => pick(t, ['name']))
  const locals = { themes, iconsets, mappingKeys }
  return await reply.view(`bajoDemo:/showcase/${req.params.page}.html`, locals)
}

export default showcase

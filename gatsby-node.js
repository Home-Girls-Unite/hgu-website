exports.createPages = async ({_, actions}) => {
  const {createRedirect} = actions

  createRedirect({
    fromPath: `/contact-us`,
    toPath: `/contact`,
  })
}

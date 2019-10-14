exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    createRedirect({ fromPath: 'https://bloc-pt.skills.fund/*', toPath: 'https://bloc.skills.fund/:splat', isPermanent: true, force: true })
}
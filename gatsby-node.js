exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
 
    // createRedirect({ fromPath: 'https://bloc-pt.skills.fund/*', toPath: 'https://bloc.skills.fund/:splat', isPermanent: true, force: true })
    // createRedirect({ fromPath: '/go', toPath: '/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure'})
    // createRedirect({ fromPath: '/accepted', toPath: '/'})
    // createRedirect({ fromPath: '/designer-track', toPath: '/'})
    // createRedirect({ fromPath: '/web-developer-track', toPath: '/'})
   
    createRedirect({ fromPath: '/', toPath: 'https://thinkful.skills.fund/', isPermanent: true, force: true })
}
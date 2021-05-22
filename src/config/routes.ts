export const routes : { [index: string]: any } = {
    project: {
        path: '/project',
    }
}

export const routeByPath = (path: string) : string|undefined => {
    Object.keys(routes).forEach(key => {
        if (routes[key] === path) return key
    })
    return
}




function logger(req, res, next) {
    const start = +new Date()
    const url = req.url
    const method = req.method

    res.on('finish', () => {
        const ms = +new Date() - start
        console.log(`${method} ${url} took ${ms}ms`)
    })
    next();
}

export default logger;
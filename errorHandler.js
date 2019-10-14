const noRoute = ((req, res, next) => {
    const err = new Error('err')
    err.status = 404;
    err.message = "Oops, page not found. Looks like that route does not exist"
    console.log("**********************")
    console.log(err.message)
    console.log("**********************")
    next(err)
})

const globalError = ((err, req, res, next) => {

    res.locals.errorMessage = err.message
    res.locals.errorStatus = (err.status || 500)
    res.locals.errorStack = err.stack
    res.status(err.status || 500)
    res.render('error')
})

module.exports = { noRoute, globalError }
const middleware = {};
middleware.isLoggedIn = (req, res, next) => {
    console.log('isAuthenticated', req.isAuthenticated());
    if(req.isAuthenticated()){
        req.isLogged = true;        
    }
    return next();
};

module.exports = middleware;
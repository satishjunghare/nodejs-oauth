const express = require('express');

var router = express.Router();

function fetchTodos(req, res, next) {
    res.locals.todos = ['One', 'Two', 'Three'];
    // res.locals.activeCount = 2; // todos.filter(function(todo) { return !todo.completed; }).length;
    // res.locals.completedCount = todos.length - res.locals.activeCount;
    next();
}

router.get('/account', function(req, res, next) {
    if (!req.user) { return res.render('login'); }
    next();
}, fetchTodos, function(req, res, next) {
    // res.locals.filter = null;
    res.render('dashboard', { user: req.user });
});

module.exports = router;
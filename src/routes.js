const{ Router } = require('express');

const routes = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Okay'})
})

module.exports = routes;
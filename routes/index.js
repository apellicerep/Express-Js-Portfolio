const express = require('express')
const route = express.Router()
const { projects } = require('../data/data.json')

route.get('/', (req, res) => {
    res.render('index', { projects })
})

route.get('/about', (req, res) => {
    res.render('about')
})

route.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    if (projectId > projects.length - 1) {
        return res.redirect('/')
    }
    const project = projects[projectId]
    res.render('project', { project })
})


module.exports = route;
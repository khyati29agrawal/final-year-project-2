const express = require('express')
const FileController = require('../controller/ProjectController');

const Router = express.Router();

Router.get('/', isAuth, ProjectController.getIndex);
Router.get('/:id', isAuth, ProjectController.getProject);
Router.get('/file/:id', ProjectController.getFile);
Router.post('/newPost', isAuth, ProjectController.postNewProject);

module.exports = Router;
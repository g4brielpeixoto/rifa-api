import { Router } from 'express';
import { UserController } from './controllers/UserController'

const routes = Router();

//USER ROUTES
routes.post('/user' , UserController.create);
routes.get('/user' , UserController.index);
routes.get('/user/:id' , UserController.show);
routes.delete('/user/:id' , UserController.destroy);

export { routes }
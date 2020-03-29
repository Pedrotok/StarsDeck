import * as userController from '../controllers/userController.js'

const routes = (app) => {
  app.route('/user')
    .get(userController.getUsers)
    .post(userController.addUser);

  app.route('/user/top')
    .get(userController.getTopUsers);
}

export default routes;
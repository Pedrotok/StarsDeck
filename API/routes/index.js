import * as userController from '../controllers/userController.js'

const routes = (app) => {
  app.route('/user')
    .get(userController.getUsers)
    .post(userController.addEventForUser);

  app.route('/user/top')
    .get(userController.getTopUsers);
}

export default routes;
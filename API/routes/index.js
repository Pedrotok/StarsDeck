import * as userController from '../controllers/userController.js'

const routes = (app) => {
  app.route('/user')
    .get(userController.getUsers)
    .post(userController.addUser)
}

export default routes;
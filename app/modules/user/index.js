/* You'll need to import all 3 controllers and the service */
import angular from 'angular';

import config from './config';
import service from './service';

import loginController from './controllers/login';
import profileController from './controllers/profile';
import registerController from './controllers/register';

// make angular module

let user = angular.module("jk.user", []);

// wire stuff up

user.config(config);
user.controller('ProfileController', profileController);
user.controller('LoginController', loginController);
user.controller('RegisterController', registerController);
user.service('UserService', service);

// export it

export default user;

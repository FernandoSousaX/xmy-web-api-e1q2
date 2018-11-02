'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/clientesController');

	 app.route('/api/clientes')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/clientes/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};
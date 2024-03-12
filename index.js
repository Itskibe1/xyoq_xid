const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('JzZQGuI7WP', uuidlib.v4());
	}

module.exports = generateId

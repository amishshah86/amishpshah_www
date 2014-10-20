/*
	|	Amish Shah
	|	www.amishpshah.com
	|	amishshah86@gmail.com
*/

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('public')).listen(8888);
console.log('Server running at http://127.0.0.1:8888/')
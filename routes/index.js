//----------------------------------------------------------------------------------------
// Index Page

let path = require('path');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.sendFile(path.join(`${__dirname}/../views/index.html`));;
	})
}
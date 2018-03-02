import express from 'express'
const app = express()

import users from './routes/users'
import subreddits from './routes/subreddits'
import reddit from './routes/reddit'

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, jwt')
	if ('OPTIONS' === req.method) {
		return res.sendStatus(200);
	}
	next()
})

app.get('/users', users);
app.get('/subreddits', subreddits);
app.get('/reddit', reddit);

app.listen(3300, () => console.log('Example app listening on port 3300!'))
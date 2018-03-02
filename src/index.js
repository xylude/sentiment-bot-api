import express from 'express'
const app = express()

import users from './routes/users'
import subreddits from './routes/subreddits'
import reddit from './routes/reddit'

app.get('/users', users);
app.get('/subreddits', subreddits);
app.get('/reddit', reddit);

app.listen(3300, () => console.log('Example app listening on port 3300!'))
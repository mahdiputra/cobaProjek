const express = require('express');
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app =express();

const db = require('./config/key').mongoURI;

//connect ke mongoDb
mongoose.connect(db).then(()=>console.log('MongoDB Connected')).catch(err => console.log(err))

app.get('/',(req,res)=> res.send('hello! world!'));


//menggunakan routes
app.use('/api/users',users)
app.use('/api/profile',profile)
app.use('/api/posts',posts)

const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server running on port ${port}`))
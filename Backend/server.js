const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const PORT = 3000;
// const SECRET_KEY = 'Something';
dotenv.config()
const LoginRouter = require('./router/Login')
const RegisterRouter =require('./router/Register')
const Createticket= require('./router/Createticket')

const cors= require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( '/', LoginRouter)
app.use('/register',RegisterRouter)
app.use('/createticket',Createticket)
app.use(cors());
app.use (express.json())


// app.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = users.find(u => u.username === username);
//     if (!user) return res.status(400).send('Invalid credentials');

// const isMatch = await bcrypt.compare(password, user.password);
// if (!isMatch) return res.status(400).send('Invalid credentials');

// const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
// res.json({ token });


mongoose.connect(process.env.URL)
.then(()=> console.log("mongo connected"))
.catch((error)=>console.log('connect sucefully' , error))

app.listen(process.env.PORT ,()=> console.log("server Connected"))



// // Middleware to verify token
// const authenticateJWT = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.sendStatus(403);

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

// Protected route
// app.get('/api/protected', authenticateJWT, (req, res) => {
//     res.json({ message: 'This is a protected route', user: req.user });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
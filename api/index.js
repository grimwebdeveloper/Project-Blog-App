// @ts-check
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// express instance
const app = express();

// database
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Connected to database');
	})
	.catch((err) => {
		console.log('Error connecting to database', err);
	});

// middlewares
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.post('/register', async (req, res) => {
	const { username, password } = req.body;
	try {
		const salt = bcrypt.genSaltSync(10);
		const userDoc = await User.create({
			username,
			password: bcrypt.hashSync(password, salt),
		});
		res.json(userDoc);
	} catch (error) {
		res.status(400).json(error);
	}
});

app.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const userDoc = await User.findOne({ username });
	const passOk = bcrypt.compareSync(password, userDoc?.password || '');
	if (passOk) {
		const token = jwt.sign(
			{ username, id: userDoc?._id },
			process.env.JWT_SECRET,
			{},
			(err, token) => {
				if (err) throw err;
				res.cookie('token', token).json('OK');
			}
		);
	} else {
		res.status(400).json('wrong credentials');
	}
});

// start server
app.listen(process.env.PORT || 3000, () => {
	console.log(
		`Server is running on http://localhost:${process.env.PORT || 3001}/`
	);
});

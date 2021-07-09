const express = require('express');
const app = express();
const path = require('path');
const musql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
const db = musql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'userstorage'
});
db.connect(function (err) {
    if (err) {
        console.log('DB Error');
        throw err;
        return false;
    }
});

const sessionStorage = new MySQLStore({
    expiration: (1825 * 86400 * 1000),
    endConnectionClose: false
}, db);
app.use(session({
    key: 'wewfreghthtr',
    secret: 'sdfrgtyhty',
    store: sessionStorage,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1825 * 86400 * 1000),
        httpOnly: false
    }
}));
new Router(app, db);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build'));

});
app.listen(3000);
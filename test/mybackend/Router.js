const bcrypt = require('bcrypt');
class Router {
    constructor(app, db) {
        this.login(app, db);
        this.logout(app, db);
        this.isLoggedIn(app, db);

    }
    login(app, db) {
        app.post('/login', (req, res) => {
            let username = req.body.username;
            let email = req.body.email;
            let password = req.body.password;
            username = username.toLowerCase();

            if (username.length > 12 || password.length > 12) {
                res.json({
                    success: false,
                    msg: 'An error occured please try again'
                })
                return;
            }
            let cols = [username];
            db.query('SELECT * FROM user WEHRE username=? LIMIT =1', cols, (err, data, fields) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occured please try again'

                    })
                    return;
                }
                if (data && data.length === 1) {
                    bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {
                        if (verified) {
                            req.session.userID = data[0].id;

                            res.json({
                                success: true,
                                username: data[0].username,
                                email:data[0].email,
                            })
                            return;
                        }
                        else {
                            res.json({
                                success: false,
                                msg: 'Invalid Password'
                            });
                        }
                    });

                } else {
                    res.json({
                        success: false,
                        msg: 'User Not found Please try again'
                    });
                }
            });

        });
    }
    logout() { 

    }
    isLoggedIn() {

     }
}
module.exports = Router;
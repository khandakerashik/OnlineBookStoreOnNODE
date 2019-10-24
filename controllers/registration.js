var express = require('express');
//var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/index');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};
router.post('/registration', function(request, response){
    
        userModel.insert(user, function(status){	
            if(status){
                response.redirect("/registration");
            }else{
                response.redirect("/login");
            }
        });
    });

});

module.exports = router;
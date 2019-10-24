var express = require('express');
//var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('adminpanel/index');
});

router.get('/index', function(request, response){
	response.render('adminpanel/index');
});
// router.get('/add', function(request, response){
// 	response.render('adminpanel/add');
// });

router.get('/addbook', function(request, response){
	response.render('adminpanel/addbook');
});

router.get('/editbook', function(request, response){
	response.render('adminpanel/editbook');
});

router.get('/deletebook', function(request, response){
	response.render('adminpanel/deletebook');
});
router.get('/bookdetails', function(request, response){
	response.render('adminpanel/bookdetails');
});

router.get('/customerdetails', function(request, response){
	response.render('adminpanel/customerdetails');
});

router.get('/addcustomer', function(request, response){
	response.render('adminpanel/addcustomer');
});

router.get('/deletecustomer', function(request, response){
	response.render('adminpanel/deletecustomer');
});

router.get('/editcustomer', function(request, response){
	response.render('adminpanel/editcustomer');
});


router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	// userModel.validate(user, function(status){
	// 	if(status){
	// 		response.cookie('username', request.body.username);
	// 		response.redirect('/home');
	// 	}else{
	// 		response.send('invalid username/password');		
	// 	}
	// });

});

module.exports = router;
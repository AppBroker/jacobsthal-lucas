// BASE SETUP
// =============================================================================

// call the packages we need
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port     = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================

// create our router
const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => {
	// do logging
	console.log('Logging activated.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
	res.json({ message: 'hooray! welcome to our api!' });	
});


//Method to return jacobsthal
const returnJacobsthal = (n) => {
	return Math.pow(2, n) + Math.pow(-1, n);
}

const getSum = (total, num) => {
    return total + num;
}
// returns value based on /jacobsthal at nth
//https://en.wikipedia.org/wiki/Jacobsthal_number
// ----------------------------------------------------
router.route('/jacobsthal/:nth')
	.get((req, res) => {
		res.json({description:'The jacobsthal value at nth position', value: returnJacobsthal(req.params.nth) });
	});

// Calculates the value of the series of jacobsthal numbers up to an index but omits values divisible by 5 from the calculation
// ----------------------------------------------------
router.route('/addjacobsthalseries/:nth')
	.get((req, res) => {
		let sum = Array.from(Array(parseInt(req.params.nth)).keys())
		.map((item, index) => {
			return returnJacobsthal(index);
		})
		.filter((item) => {
			return !(item % 5 === 0) ;
		})
		.reduce(getSum);
		res.json({description:'The value of the calculation of a series/array of jacobsthal numbers up to an index ( omitting values divisible by 5 from the calculation)', value: sum });
	});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

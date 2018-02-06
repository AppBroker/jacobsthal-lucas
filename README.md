# Schroders Ryan McLaughlin (Jacobsthal-Lucas numbers)

Displaying 3 requirements
- Exposing endpoints via an api
- Create an endpoint that returns the Jacobsthal-Lucas number at an nth index
- Calculate the series/array of jacobsthal numbers up to an index ( omitting values divisible by 5 from the calculation)

## Requirements

- Node and npm

## Installation

- Clone the repo: `git clone https://github.com/AppBroker/jacobsthal-lucas.git`
- Install dependencies: `npm install`
- Start the server: `node server.js`
- Observe that port 8080 is running on localhost

## Endpoints
- Based on calculation:  `L_n = 2^n + (-1)^n. \,`
http://localhost:8080/api/jacobsthal/4 - returns the Jacobsthal-Lucas numbers at nth value where 4 is n.
- http://localhost:8080/api/jacobsthal/4/12 - returns the calculated series/array of jacobsthal numbers up to an index ( omitting values divisible by 5 from the calculation) where 12 is the index up to the series that should be calculated

## Calculations
Based on the methods here https://en.wikipedia.org/wiki/Jacobsthal_number, I have rewritten the javascript method to match as follows

## Demo
You can also preview view a demos of each endpoint here http://jacobsthal-lucas.mybluemix.net/api/jacobsthal/4 and the series based calculation here http://jacobsthal-lucas.mybluemix.net/api/jacobsthal/4/12

//Calculate Jacobsthal number https://en.wikipedia.org/wiki/Jacobsthal_number at n rewritten for javascript

- Original calculation:  `L_n = 2^n + (-1)^n. \,`

- Javascript calculation: `return Math.pow(2, n) + Math.pow(-1, n);`
- Series calculation function: `return Array.from(Array(parseInt(req.params.calculateSeries)).keys())
		.map((item, index) => {
			return returnJacobsthal(index);
		})
		.filter((item) => {
			return !(item % 5 === 0) ;
		})
		.reduce((total, num) => {
    		return total + num;
		});`


See server.js for the array series calculation.
Cheers
Ryan

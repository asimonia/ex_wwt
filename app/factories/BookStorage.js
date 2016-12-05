"use strict";

app.factory("BookStorage", ($http) => {


	// create a getBooks function that collects the guides json
	// and returns it as a Promise object
	let getBooks = () => {
		return new Promise (function(resolve, reject) {
			$http.get("https://wideworld-37718.firebaseio.com/guides.json")
			.success(function(bookObj) {
				resolve(bookObj);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {getBooks};
});
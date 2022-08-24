import request from "request";

request("https://www.google.com", function () {
	console.log("Terminé la petición");
});

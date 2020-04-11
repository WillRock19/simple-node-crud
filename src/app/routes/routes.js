const BookDao = require("../dao/book-dao");
const db = require("../../config/database");

module.exports = (app) => {
	app.get("/", (request, response) => {
		response.send(`
		<HTML>
				<HEAD>
						<meta charset="utf-8">
				</HEAD>
				<BODY>
						<H1>Subiu!</H1>
				</BODY>
		<HTML>`);
	});

	app.get("/books", (request, response) => {
		const bookDao = new BookDao(db);

		bookDao
			.getBooks()
			.then((books) =>
				response.marko(require("../views/books"), {
					books: books,
				})
			)
			.catch((error) => console.log(error));
	});
};
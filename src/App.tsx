import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const url =
	'https://edwardtanguay.netlify.app/share/techBooksUnstructured.json';

function App() {
	const [books, setBooks] = useState<IBook[]>([]);

	interface IBook {
		id: number;
		title: string;
		description: string;
		language: string;
		yearMonth: string;
		numberInStock: number;
	}

	useEffect(() => {
		(async () => {
			const rawBooks:any[] = (await axios.get(url)).data;
			const _books: IBook[] = [];
			rawBooks.forEach((rawBook:any) => {
				const book: IBook = {
					id: rawBook.id,
					title: rawBook.title,
					description: rawBook.description,
					language: rawBook.language,
					yearMonth: rawBook.yearMonth,
					numberInStock: rawBook.numberInStock,
				}
				_books.push(book);
			});
			setBooks(_books);
		})();
	}, []);

	return (
		<div className="App">
			<h1>TypeScript Site Example</h1>
			<h2>There are {books.length} books.</h2>

			<div className="bookArea">
				{books.map((book, i) => {
					return (
						<fieldset className="book" key={i}>
							<legend>ID: {book.id}</legend>

							<div className="row">
								<label>Title</label>
								<div>{book.title}</div>
							</div>

							<div className="row">
								<label>Description</label>
								<div>{book.description}</div>
							</div>

							<div className="row">
								<label>Language</label>
								<div>{book.language}</div>
							</div>

							<div className="row">
								<label>Year/Month</label>
								<div>{book.yearMonth}</div>
							</div>

							<div className="row">
								<label>In Stock</label>
								<div>{book.numberInStock}</div>
							</div>
						</fieldset>
					);
				})}
			</div>
		</div>
	);
}

export default App;

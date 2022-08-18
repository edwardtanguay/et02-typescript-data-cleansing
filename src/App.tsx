import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const url =
	'https://edwardtanguay.netlify.app/share/techBooksUnstructured.json';

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(url)).data);
		})();
	}, []);

	return (
		<div className="App">
			<h1>TypeScript Site Example</h1>
			<h2>There are {books.length} books.</h2>
		</div>
	);
}

export default App;

import './App.css'
import { books } from './features/books/books.ts'
import Demo from './features/demo/Demo.tsx'
import BookList from './features/books/BookList.tsx';



function App() {

	return (
		<main>
			<Demo />
			<BookList data={books} />
		</main>
	)
}

export default App

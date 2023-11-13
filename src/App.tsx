import './App.css'
import { books } from './features/books/books.ts'
import ViewMemes from './features/memes/ViewMemes.tsx'
import Demo from './features/demo/Demo.tsx'
import BookList from './features/books/BookList.tsx';



const App = () => (
	<main>
		<ViewMemes />
		<Demo />
		<BookList data={books} />
	</main>
)

export default App

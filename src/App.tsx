import { useState } from 'react'
import './App.css'
import { books } from './data/books.ts'
import BookList from './components/BookList.tsx';

type Action = () => void;

function App() {
	const [count, setCount] = useState<number>(0)

	const handleIncrease: Action = () => {
		setCount(count + 1)
	}

	return (
		<main>
			<section>
				<p> The count is: {count} </p>
				<button onClick={handleIncrease}> Increase </button>
			</section>
			<BookList data={books} />
		</main>
	)
}

export default App

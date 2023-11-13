import { useState, useRef } from 'react'
import './App.css'
import { books } from './data/books.ts'
import BookList from './components/BookList.tsx';


type Action = () => void;

function App() {
	const [count, setCount] = useState<number>(0)
	const inputRef = useRef<null | HTMLInputElement>(null)

	const handleIncrease: Action = () => {
		setCount(count + 1)
	}

	type ButtonClick = React.MouseEventHandler<HTMLButtonElement>
	const handlePrint: ButtonClick = event => {
		console.log('Event: ', event.button);
	}

	type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>
	const handleSearchChange: ChangeHandler = event => {
		// TODO: använd söksträngen för att begränsa vad som visas i listan
		console.log('Change event, value=' + event.target.value);
	}

	return (
		<main>
			<section>
				<p> The count is: {count} </p>
				<button onClick={handleIncrease}> Increase </button>
				<button onClick={handlePrint}> Print something </button>
				
				<input onChange={handleSearchChange}
					ref={inputRef}
					type="text"
					placeholder="Search" />
			</section>
			<BookList data={books} />
		</main>
	)
}

export default App

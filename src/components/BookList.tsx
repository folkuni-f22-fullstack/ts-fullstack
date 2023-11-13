import { Book } from '../data/books'

// Skapa ett interface/typalias som beskriver innehållet i props
type Props = {
	data: Book[];
}

const BookList = (props: Props) => {

	return (
		<div>
			{props.data.map(book => (
				<p key={book.id}>
					{book.name} by {book.author}
				</p>
			))}
		</div>
	)
}

export default BookList

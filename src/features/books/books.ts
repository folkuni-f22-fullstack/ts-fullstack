export type Book = {
	id: number;
	name: string;
	author: string;
	genre: string;
}

export const books: Book[] = [
	{ id: 1, name: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
	{ id: 2, name: '1984', author: 'George Orwell', genre: 'Dystopian' },
	{ id: 3, name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
	{ id: 4, name: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
	{ id: 5, name: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Coming-of-Age' },
	{ id: 6, name: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
	{ id: 7, name: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
	{ id: 8, name: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Mystery' },
	{ id: 9, name: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Science Fiction' },
	{ id: 10, name: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
	{ id: 11, name: 'The Shining', author: 'Stephen King', genre: 'Horror' },
	{ id: 12, name: 'The Road', author: 'Cormac McCarthy', genre: 'Post-Apocalyptic' },
	{ id: 13, name: 'The Girl on the Train', author: 'Paula Hawkins', genre: 'Thriller' },
	{ id: 14, name: 'The Alchemist', author: 'Paulo Coelho', genre: 'Philosophical Fiction' },
	{ id: 15, name: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
	{ id: 16, name: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy' },
	{ id: 17, name: 'The Outsiders', author: 'S.E. Hinton', genre: 'Young Adult' },
	{ id: 18, name: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', genre: 'Magical Realism' },
	{ id: 19, name: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian' },
	{ id: 20, name: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', genre: 'Science Fiction' }
];

// export { books }

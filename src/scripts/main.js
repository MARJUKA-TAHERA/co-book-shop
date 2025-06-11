// This file contains JavaScript code for the book shop home page.
// It may include functionality for interactive elements, such as handling user input or dynamically loading book data.

document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');

    // Sample book data
    const books = [
        { title: 'Book One', author: 'Author One', price: '$10.99' },
        { title: 'Book Two', author: 'Author Two', price: '$12.99' },
        { title: 'Book Three', author: 'Author Three', price: '$15.99' }
    ];

    // Function to display books
    function displayBooks() {
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <p>Price: ${book.price}</p>
            `;
            bookList.appendChild(bookItem);
        });
    }

    // Call the function to display books
    displayBooks();
});
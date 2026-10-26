
"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
            return;
        }

        this.isIssued = true;
        console.log(`${this.title} issued successfully.`);
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} was not issued.`);
            return;
        }

        this.isIssued = false;
        console.log(`${this.title} returned successfully.`);
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "ISBN101"),
    new Book("Data Structures", "Robert Lee", "ISBN102"),
    new Book("Web Development", "Amit Kumar", "ISBN103")
];

// Display books that are currently available
function showAvailableBooks() {
    console.log("\nAvailable Books:");

    books.filter(book => !book.isIssued).forEach(book => {
        console.log(`${book.title} | ${book.author} | ${book.ISBN}`);
    });
}

// Find a book by ISBN and issue it
function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

showAvailableBooks();
issueBookByISBN("ISBN102");
showAvailableBooks();

// Return the issued book
books.find(book => book.ISBN === "ISBN102").returnBook();
showAvailableBooks();

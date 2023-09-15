document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", async function () {
        try {
            const books = await fetchBooks();
            displayBooks(books);
        } catch (error) {
            console.error("Failed to fetch books: " + error.message);
        }
    });

    async function fetchBooks() {
        try {
            const response = await fetch("books.json"); 
            if (!response.ok) {
                throw new Error(`Failed to fetch books. Status code: ${response.status}`);
            }
            const books = await response.json();
            return books;
        } catch (error) {
            throw new Error("Network error: " + error.message);
        }
    }

    function displayBooks(books) {
        
        bookList.innerHTML = "";

        
        const ul = document.createElement("ul");
        books.forEach(function (book) {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author}`;
            ul.appendChild(li);
        });

        
        bookList.appendChild(ul);
    }
});

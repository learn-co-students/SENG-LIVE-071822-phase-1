//BookStore has been moved to data.js 

// Moving our data elsewhere helps us to keep our JS code 
// here a little more clean, organized.

// Separation of Concerns

// const store_name = bookStore.name;

// Function to Render Header

// const storeName = bookStore.name;

// Function Declaration => Definition
// Writing a Spell
function renderHeader() {
    // Access the Header
    const h1 = document.querySelector('h1');
    
    // Populate the Header With Content (Bookstore Name)
    h1.textContent = bookStore.name;
}

// Function Invocation => Execution
// Casting a Spell

// Function to Render Footer

function renderFooter() {
    const footerList = document.querySelector('#footer-list');
    const listItems = footerList.querySelectorAll('li');

    // name
    listItems[0].textContent = bookStore.name; 
    // address
    listItems[1].textContent = bookStore.address; 
    // hours
    listItems[2].textContent = bookStore.hours; 
}



// Function to Render Cards for Each of Our Book Objects

function renderBookCard(book) {
    // Select DOM Container (#book-list)
    const bookList = document.querySelector('#book-list');

    // if (book.title[0] === "E" ) {
        // Create 5 Elements for Each Book Object
        // li
        const li = document.createElement('li');
        // h3
        const h3 = document.createElement('h3');
        h3.textContent = book.title;
        // p
        const author = document.createElement('p');
        author.textContent = book.author;
        // p
        const price = document.createElement('p');
        price.textContent = book.price;
        // img
        const img = document.createElement('img');
        img.src = book.imageUrl;

        // Append Elements to Sub-Container (li)
        li.append(h3, author, price, img);

        // Append Sub-Container to Main Container
        bookList.append(li);
    // } else {
        // null
    // }
}

// Manually Select First Book
// renderBookList(bookStore.inventory[0]);

// For Each Book Object in "inventory", fire off renderBookList
// bookStore.inventory.forEach(book => renderBookList(book));
renderFooter();
renderHeader();
bookStore.inventory.forEach(renderBookCard);

// console.log(bookStore.inventory[0].title[0])
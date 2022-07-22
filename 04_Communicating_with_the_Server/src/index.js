document.addEventListener('DOMContentLoaded', () => {

// Render Functions
    // Renders Header
    function renderHeader(store){
        document.querySelector('h1').textContent = store.name
    }
    // Renders Footer
    function renderFooter(store){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = store.name
        footerDivs[1].textContent = store.address
        footerDivs[2].textContent = store.hours
    }

    function renderBookCard(cardData) {
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')

        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        btn.textContent = 'Delete'

        img.src = cardData.imageUrl
        li.className = 'list-li'

        //Event Listeners 
        btn.addEventListener('click',()=>li.remove());
    
        li.append(h3,pAuthor,pPrice,img,btn);
        document.querySelector('#book-list').append(li);

        books.push(li);
    }

// Event handlers 
    function handleForm(e){
        e.preventDefault()
        //Builds Book
        const book = {
            title: e.target.title.value,
            author:e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory:e.target.inventory.value,
            reviews:[]
        }
        renderBookCard(book)
    }

    const firstButton = document.querySelector('#first_button');
    const secondButton = document.querySelector('#second_button');
    const thirdButton = document.querySelector('#third_button');
    const showBooks = document.querySelector('#show_books');
    const hideBooks = document.querySelector('#hide_books');

    firstButton.addEventListener('click', () => setStore(1));
    secondButton.addEventListener('click', () => setStore(2));
    thirdButton.addEventListener('click', () => setStore(3));
    showBooks.addEventListener('click', () => handleBooksRequest() );
    hideBooks.addEventListener('click', () => clearBooks());

    // 👇️ Example promise
    // const p = Promise.resolve('hello');

    // p.then(value => {
    //     console.log(value); // 👉️ "hello"
    // })

    const baseUrl = 'http://localhost:3000';

    // fetch request
    // asynchronous? => allow the rest of our code to run
    // uninterrupted
    function setStore(id) {
        return fetch(baseUrl + `/stores/${id}`)
        .then(res => res.json())
        .then(store => {
            renderHeader(store);
            renderFooter(store);
        })
        .catch(err => console.log(err));
    }

    setStore(1)
    .then(() => {
        // some other asynchronous behaviors
        // that should take place afterwards

        // other changes to DOM
        // reassigning the value of variables set in Global Scope
    })

    function handleBooksRequest() {
        // returns undefined unless we include "return"
        fetch(baseUrl + '/books')
        .then(res => res.json())
        .then(books => {
            books.forEach(renderBookCard);
            console.log(books);
        })
        .catch(err => console.log(err));
    }

    // load up first store by default
    setStore(1);
    // handleBooksRequest();

    const bookList = document.querySelector('#book-list');
    
    let books = [];

    function clearBooks() {
        // bookList.remove();
        
        books.forEach(book => {
            book.remove();
        });

        books = [];
        console.log(books);
    }

    // fetch(`http://localhost:3000/${resource}`)
    // .then(res => res.json())
    // .then(data => console.log(data))

    // getResource => returns a promise
    // render header
    // getResource('stores/1')
    // .then(store => {
    //     renderHeader(store)
    //     renderFooter(store)
    // })
    // .catch(err => console.log(err));

//Invoking functions
    // renderHeader(bookStore)
    // renderFooter(bookStore)
    // bookStore.inventory.forEach(renderBookCard)
    document.querySelector('#book-form').addEventListener('submit', handleForm)


})
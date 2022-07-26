// console.log(apiKEY);

// https://pokeapi.co/api/v2/pokemon/ditto
// function handleSearch(name) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

// handleSearch('squirtle')


document.addEventListener('DOMContentLoaded', () => {
    // Fetch requests 
        // Function for making a GET request 
        function fetchResource(url){
            return fetch(url)
            .then(res => res.json())
        }

        // Function for making a POST Request
        function createResource(url, body){
            return fetch(url,{
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => res.json())
        }

        // Function for making a PATCH request
        function updateResource(url, body){
            return fetch(url,{
                method: 'PATCH', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => res.json())
        }

        // Function for making a DELETE request
        function deleteResource(url){
            return fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
        }

        // updateResource('http://localhost:3000/books/1', {price: 100})

    // Rendering functions
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
            const pInventory = document.createElement('input')
            const img = document.createElement('img')
            const btn = document.createElement('button')
    
            h3.textContent = cardData.title
            pAuthor.textContent = cardData.author
            pPrice.textContent = `$${cardData.price}`
            btn.textContent = 'Delete'
            pInventory.value = cardData.inventory
            pInventory.type = 'number'

            img.src = cardData.imageUrl
            li.className = 'list-li'
    
            //Event Listeners 
            btn.addEventListener('click', () => handleDeleteBook(cardData.id, li))
            pInventory.addEventListener('change', (e) => handleUpdateBook(cardData.id, e.target.value))
        
            li.append(h3,pAuthor,pPrice,img,pInventory,btn)
            document.querySelector('#book-list').append(li)
        }
    
    // Event Handlers
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
            createResource('http://localhost:3000/books', book)
            .then(renderBookCard)
            .catch(e => console.error(e))

        }

        function handleUpdateBook(id, inventoryNum) {
            updateResource(`http://localhost:3000/books/${id}`, {inventory: inventoryNum})
            .catch(e => console.error(e))
        }

        function handleDeleteBook(id, bookCard) {
            deleteResource(`http://localhost:3000/books/${id}`)
            // Pessimistic Rendering
            .then(() => bookCard.remove())
            // additional asynchronous behaviors...
            // .then(() => someFunction())
            // .then(() => someOtherFunction())
            .catch(e => console.error(e))
        }
    
        function handleRenderSearch(){
            document.querySelector('main').innerHTML = `
            <form id="api-Search">
                <label>API Search<label>
                <input type="text" name="search"></input>
                <input type="submit"></input>
            </form>
            `

            document.querySelector('#api-search').addEventListener('submit', handleAPIQuery)
        }
        
        //Handles Google Books API search
        function handleAPIQuery(e){
            e.preventDefault();
            
            const search = e.target.search.value;
            
            // console.log(search);

            // use this API endpoint
            // search term + API key to get the necessary responses
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20&key=${apiKEY}`)
            .then(res => res.json())
            .then(data => data.items.forEach(renderGoogleBook));
        }

        function renderGoogleBook(book) {
            
            // <ul>
            //  <li>
            //      <h2>Some Book</h2>
            //  </li>
            // </ul>
            // <ul>
            //  <li>
            //      <h2>Some Other Book</h2>
            //  </li>
            // </ul>
            // ...

            // const ul
            const div = document.createElement('div');

            // title
            const title = document.createElement('h2');
            // authors
            const authors = document.createElement('p');
            // publisher
            const publisher = document.createElement('p');
            // images
            const thumbnail = document.createElement('img');

            if(book.volumeInfo.authors) {
                const authorNames = book.volumeInfo.authors.join(' and ');
                
                authors.textContent = `Authors: ${authorNames}`;
            } else {
                authors.textContent = "No Authors!";
            }

            // set attributes, add content, etc.
            title.textContent = `Title: ${book.volumeInfo.title}`;
            
            if(book.volumeInfo.publisher) {
                publisher.textContent = `Publisher: ${book.volumeInfo.publisher}`;
            } else {
                publisher.textContent = "No Publisher!"
            }
            
            thumbnail.src = book.volumeInfo.imageLinks.smallThumbnail;

            // appending sub items to li
            div.append(title,publisher,authors,thumbnail);

            // console.log(document.querySelector('#book-list'));

            document.querySelector('main').append(div);
            // console.log(book.volumeInfo.authors.join(' and '));
        }

    // Invoking functions    
        fetchResource('http://localhost:3000/stores/1')
        .then(store => {
            renderHeader(store)
            renderFooter(store)
        })
        .catch(e => console.error(e))
    
        fetchResource('http://localhost:3000/books')
        .then(books => books.forEach(renderBookCard))
        .catch(e => console.error(e))
    
        document.querySelector('#book-form').addEventListener('submit', handleForm)
        document.querySelector('#nav-search').addEventListener('click', handleRenderSearch)
})
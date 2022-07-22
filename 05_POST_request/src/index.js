document.addEventListener('DOMContentLoaded', () => {

// Fetch requests 
    // Function for making a GET request 
    // function fetchResource(url){
    //     return fetch(url)
    //     .then(res => res.json())
    // }
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
        const img = document.createElement('img')
        const btn = document.createElement('button')

        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        btn.textContent = 'Delete'

        img.src = cardData.imageUrl
        li.className = 'list-li'

        //Event Listeners 
        btn.addEventListener('click',()=>li.remove())
    
        li.append(h3,pAuthor,pPrice,img,btn)
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
        
        // Optimistic Rendering
        // renderBookCard(book);

        // Pessimistic Rendering
        postResource('http://localhost:3000/stores', book)
        
        // .then(book => renderBookCard(book))
        .then(renderBookCard)
        .catch(e => console.error(e))
    }

    function handleStoreForm(e){
        e.preventDefault()
        
        // "location": "Seattle",
        // "address": "333 st ne Seattle wa 99999",
        // "number": 9999999999,
        // "name": "Easley's Technical Books",
        // "hours": "Monday - Friday 9am - 6pm" 
      
        //Builds Store
        const store = {
            location: e.target.location.value,
            address: e.target.address.value,
            number: e.target.number.value,
            name: e.target.name.value,
            hours: e.target.hours.value
        }

        // Optimistic Rendering
        // renderBookCard(book);

        // Pessimistic Rendering
        postResource('http://localhost:3000/stores', store)
        
        // .then(store => renderStoreCard(book))
        .then(store => console.log(`Store has been created! ${store}`))
        .catch(e => console.error(e))
    }


    function fetchResource(url){
        return fetch(url)
        
        // JSON => JS
        .then(res => res.json())
    }

    function postResource(url, data) {
        
        // Return a Promise
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // JS => JSON
            body: JSON.stringify(data)
        })
        .then(res => res.json())
    }

    // postResource('http://localhost:3000/books', book)
    // .then(book => {
    //     console.log(book);
    // })

// Invoking functions    

    // Optimistic Rendering
    // renderHeader(store)
    // renderFooter(store)

    // Pessimistic Rendering
    fetchResource('http://localhost:3000/stores/1')
    .then(store => {
        renderHeader(store)
        renderFooter(store)
    })
    .catch(e => console.error(e))

    // Optimistic Rendering
    // books.forEach(renderBookCard)

    // Pessimistic Rendering
    fetchResource('http://localhost:3000/books')
    .then(books => books.forEach(renderBookCard))
    .catch(e => console.error(e))

    // document.querySelector('#book-form').addEventListener('submit', handleForm)
    document.querySelector('#store-form').addEventListener('submit', handleStoreForm)
})
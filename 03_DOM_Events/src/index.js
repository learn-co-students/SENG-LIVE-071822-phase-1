document.addEventListener('DOMContentLoaded', () => {
    // Renders Header
    function renderHeader(){
        document.querySelector('h1').textContent = bookStore.name
    }

    // Renders Footer
    function renderFooter(){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = bookStore.name
        footerDivs[1].textContent = bookStore.address
        footerDivs[2].textContent = bookStore.hours
    }

    function renderBookCard(cardData) {
        // const declarations / assignments
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')

        // setting text content for appropriate consts
        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        
        btn.textContent = 'Delete'

        img.src = cardData.imageUrl
        li.className = 'list-li'

        // args => event name, callback function
        // optimistic vs. pessimistic rendering 
        // client (front end) / server (back end) communication
        // btn.addEventListener('click', () => li.remove());
        btn.addEventListener("click", () => li.remove());

        li.append(h3,pAuthor,pPrice,img,btn)
        document.querySelector('#book-list').append(li)
    }

    const cardForm = document.querySelector('#book-form');
    // cardForm.addEventListener('submit', (e) => handleForm(e));
    cardForm.addEventListener('submit', handleForm);

    // function to handle form submission
    function handleForm(e) {

        const bookStoreLength = bookStore.inventory.length;

        // prevent page refresh behavior
        e.preventDefault();
        
        // create a new book object with values from 
        // form inputs

        const newBook = {
            // why ++ incrementing by 2?
            // x ++ => x = x + 1
            // bookStore.inventory.length = bookStore.inventory.length + 1
            id: bookStoreLength + 1,
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            reviews: [],
            inventory: e.target.inventory.value,
            imageUrl: e.target.imageUrl.value
        };

        // log confirmation message to console
        // console.log(e.target.title.value);
        // console.log(e.target.author.value);
        // console.log(e.target.price.value);
        // console.log(e.target.inventory.value);
        // console.log(e.target.imageUrl.value);

        bookStore.inventory.push(newBook);
        
        console.log(newBook);
        console.log(`Bookstore Now Has ${bookStore.inventory.length} Books`);

        renderBookCard(newBook);
    }

    renderHeader();
    renderFooter();
    bookStore.inventory.forEach(renderBookCard);
});    
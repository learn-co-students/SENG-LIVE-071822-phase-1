//Data 
const inventory = [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10.00,
            reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
            inventory: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45.75,
            reviews: [{userID: 15, content:'good way to learn JQuery'}],
            inventory: 2,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36.00,
            reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
            inventory: 8,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25.50,
            reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
            inventory: 0,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            price: 6.00,
            reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        }, 
        {
            id:6,
            title: 'Learn Enough JavaScript to Be Dangerous',
            author: 'Michael Hartl',
            price: 24.00,
            reviews: [{userID: 50, content:'pretty good'}],
            inventory: 5,
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

        },
        {
            id:7,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            price: 49.95,
            reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
            inventory: 20,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]

// Function Declaration vs. Function Invocation

// Function Declaration
// function helloWorld() {
//     console.log("Hello world!");
// }

// Function Invocation
// helloWorld();

// Deliverable 1
// book => parameter
// function getBookPrice(book) {
//     // key <=> value
//     // return book.price;
//     return `$${book.price.toFixed(2)}`;
// }

// book => argument
// console.log(getBookPrice(inventory[0]));

// Cannot Reassign / Redeclare
// const inventory = "NEW";

// const getBookPrice = function(book) {
//     // key <=> value
//     // return book.price;
//     return `$${book.price.toFixed(2)}`;
// }

// console.log(getBookPrice(inventory[0]));

// const getBookTitleAndAuthor = function(book) {
//     return `${book.title} by ${book.author}`;
// }

// console.log(getBookTitleAndAuthor(inventory[2]));

// declaration
// const
// var
// var hello = "hello";

// reassign
// hello = "some new value";

// redeclare
// var hello = "HELLO!";

// console.log(hello);

// function getBookTitleAndAuthorOriginal(book) {
//     return `${book.title} by ${book.author} is on sale!`
// }

// const getBookTitleAndAuthorOne = book => `${book.title} by ${book.author} is on sale!`;

// const getBookTitleAndAuthorTwo = book => {
//     if (book) {
//         book.author = "No Author"

//         // console.log("Book exists!")
//     } else {
        
//         // console.log("Book doesn't exist!")
//     }
    
//     return `${book.title} by ${book.author} is on sale!`
// }

// // console.log(getBookTitleAndAuthorOne(inventory[0]))
// console.log(getBookTitleAndAuthorTwo(inventory[0]));

// console.log(getBookTitleAndAuthorOne(inventory[0]));

// const applyDiscount = (book, discount) => {
//     console.log(`$${(book.price * discount).toFixed(2)}`);
// }

// applyDiscount(inventory[0], 0.5);

// console.log(5 % 2);

// // Global Scope
// const sample_title = inventory[0].title;

// const createBook = (title, price, author, imageUrl="default_image.png") => {
//     let new_book = {};

//     new_book.my_new_key = "SOMETHING";
//     new_book.title = title;
//     new_book.price = price;
//     new_book.author = author;
    
//     // if imageUrl is passed in, assign it to the new book object
//     if (imageUrl) {
//         new_book.imageUrl = imageUrl;
//     } else {
//     // if not, assign a default image
//         new_book.imageUrl = 'default_image.png'
//     }

//     return new_book;
// }

// let my_book = createBook("Sample Title", 15, "Sample Author", "/my_image.jpg");
// let next_book = createBook("Next Title", 20, "Next Author");
// // console.log(my_book);

// inventory.push(my_book);
// inventory.push(next_book);
// console.log(inventory);

// const myArrowFunction = () => console.log("Hello!");

// myArrowFunction();

// Callback Function
// function addBook(book) {
//     return book;
// }

// Callback <=> Higher Order => Expresses a Relationship Between Functions

function doSomethingElse() {
    console.log("Hello!");
}

function doSomething(callbackFunction) {
    callbackFunction();
}

// doSomething => Higher Order Function
// doSomething Else => Callback Function
// doSomething(doSomethingElse);

// doSomething Else => Higher Order Function
// doSomething => Callback Function
// doSomethingElse(doSomething);
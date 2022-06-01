const booksByCategory = [
{
    category: 'Riqueza',
    books: [
        {
            title: 'Os segredos da mente milionária',
            author: 'T. Marv Exer',
        },
        {
            title: 'O homem mais rico da Babilônia',
            author: 'George S. Classon',
        },
        {
            title: 'Pai rico, pai pobre',
            author: 'Robert T. Klyesaki e Sharon L. Lechter',
        },
    ],
},
{
    category: 'Inteligência Emocional',
    books: [
        {
            title: 'Você é Insubstitutivel',
            author: 'Augusto Cury',
        },
        {
            title: 'Ansiedade',
            author: 'Augusto Cury',
        },
        {
            title: 'Os 7 hábitos das pessoas ',
            author: 'Stephen R. Covery',
        },
    ],
},
];

const totalCategories = booksByCategory.length
console.log(totalCategories);
for (let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}
function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
  
    }
    console.log('Total de autores: ', authors.length)
}
countAuthors();

function booksOfAugustoCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
  
    }
    console.log('Livros do autor: ', books)

}

countAuthors()

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
  
    }
    console.log('Livros do autor: '+author+':' +books)

}
booksOfAuthor('Augusto Cury')
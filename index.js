function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  // fetch request to the Game of Thrones API
    .then(response => response.json())
    // returned response should be converted to JSON
    .then(json => renderBooks(json))
    //renders book titles into the DOM by passing JSON object to renderbooks()
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}                 

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

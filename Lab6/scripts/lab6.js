//lab6 JavaScript file

    var book1 = {
    author: "William Shakespeare",
    title : "The Tempest",
    genre : "Historical Fiction"
    };

    var  book2 = {
    author: "Stephen King",
    title : "The Shining",
    genre : "Horror"
    };

    var book3 = {
    author: "Anne Frank",
    title : "The Diary of Anne Frank",
    genre : "Non-Fiction"
    };

var bookArray = new Array();

bookArray[0] = book1;
bookArray[1] = book2;
bookArray[2] = book3;

function addBooks(){
  // getting informaton from user
  var titleName =prompt("enter the book title");
  var authorName = prompt("enter the author");
  var genreName = prompt("enter the genre");

  //create an object
  var temptBook = {
    author: authorName,
    title: titleName,
    genre: genreName//dont use comma at last
  };

  //debug
  console.log(temptBook);

  //add into Array
  bookArray.push(temptBook);
  console.log(bookArray);
}

addBooks();

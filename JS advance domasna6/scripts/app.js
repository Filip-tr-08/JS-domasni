let Library = function (name, books, address) {
  this.name = name;
  this.books = books === undefined ? [] : books;
  this.address = address;
  this.numOfMembers = this.books.length * 15;
  this.printBooks = function () {
    this.books.forEach((book) => {
      if (this.books.length == 0) {
        console.log("There are not any books");
      }
      if (this.books.length != 0) {
        console.log(book.title);
      }
    });
  };
  this.addBook = function (b) {
    let findLibraryBook = this.books.find((book) => {
      return book.title === b.title;
    });
    if (findLibraryBook) {
      let copyBook = Object.create(b);
      this.books.push(copyBook);
    } else {
      console.log("There are not any books with this title");
    }
  };
};

let Book = function (title, genre, libraries, authors) {
  this.title = title;
  this.genre = genre;
  this.libraries = libraries === undefined ? [] : libraries;
  this.authors = authors === undefined ? [] : authors;
  this.addLibrary = function (lib) {
    this.libraries.push(lib);
    lib.books.push(this);
  };
  this.removeLibrary = function (lib) {
    const indexBook = lib.books.indexOf(this);
    if (indexBook > -1) {
      lib.books.splice(indexBook, 1);
    }
    const indexLib = this.libraries.indexOf(lib);
    if (indexLib > -1) {
      this.libraries.splice(indexLib, 1);
    }
  };
};

let Author = function (fName, lName, yearOfBirth) {
  this.fName = fName;
  this.lName = lName;
  this.yearOfBirth = yearOfBirth;
  this.books = [];
  this.currentBook = null;
  this.startBook = function (b) {
    if (this.currentBook != null) {
      this.books.push(this.currentBook);
      this.books.push(b);
      this.currentBook = b;
    }
    if (this.currentBook == null) {
      this.books.push(b);
      this.currentBook = b;
    }
  };
};

let piere = new Author("Pierre", "Lermaitre", 1951);
let linda = new Author("Linda", "Howard", 1950);
let susan = new Author("Susan Elizabeth", "Philips", 1948);

let alex = new Book("Alex", "thriller", [], [piere]);
let cRNM = new Book("Cry no more", "drama", [], [linda]);
let nBBM = new Book("Nobody's baby but mine", "romance", [], [susan]);

let nYPublicLib = new Library("New York Public Library", [], "New York");
let bPublicLib = new Library("Broklyn Public Library", [], "Broklyn");

alex.addLibrary(nYPublicLib);

console.log("The book Alex after it was added in the New York Library");
console.log(alex);

console.log(
  "The New York Public Library after adding the book Alex has only this book"
);
nYPublicLib.printBooks();

nYPublicLib.addBook(alex);
console.log("After the method addBook");
nYPublicLib.printBooks();

cRNM.addLibrary(bPublicLib);
nBBM.addLibrary(bPublicLib);
console.log("After the method adLibrary");
bPublicLib.printBooks();

nBBM.removeLibrary(bPublicLib);
console.log("After the method removeLibrary");
bPublicLib.printBooks();

console.log("Current book of Piere:");
console.log(piere.currentBook);
piere.startBook(alex);
console.log("Current Book of Piere after starting alex");

console.log(piere.currentBook);
console.log("Pieres Books");
console.log(piere.books);

piere.startBook(nBBM);
console.log("Current Book of Piere after starting Nobody's baby but mine");
console.log(piere.currentBook);
console.log("Piere's books now:");
console.log(piere.books);

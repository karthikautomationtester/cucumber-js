"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
let books = [];
let searchResult = [];
(0, cucumber_1.Given)('I have the following books in the store', (dataTable) => {
    books = dataTable.hashes();
    //console.log(books);
});
(0, cucumber_1.When)('I search for the books by author {string}', function (authorName) {
    searchResult =
    ;
});
(0, cucumber_1.Then)('I find {int} books', function (expectedCount) {
});

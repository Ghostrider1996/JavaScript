function searchedBook(input) {

    let favoriteBook = input[0];
    let currentBook = input[1];
    let checkedBooks = 0;
    let index = 2;

    while (currentBook !== "No More Books") {
        
        if (currentBook == favoriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        }

        currentBook = input[index];
        checkedBooks++;
        index++

    }

    if (currentBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`);
    }
}
searchedBook(["Troy", "Stronger", "Life Style", "Troy"])
searchedBook(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])


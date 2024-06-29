function vacationBookList(input){
    let totalPageCount = Number(input[0]);
    let pagesRatePerHour = Number(input[1]);
    let daysToReadThem = Number(input[2]);

    let requiredTime = totalPageCount / pagesRatePerHour
    let readHoursPerDay = requiredTime / daysToReadThem

    console.log(readHoursPerDay);
}
vacationBookList(["212", "20", "2"])
vacationBookList(["432", "15", "4"])

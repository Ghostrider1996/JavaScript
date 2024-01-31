function lab7(totalPages, readHourRate, daysAvailable) {
  let requiredTime = totalPages / readHourRate;
  let pagesPerDay = requiredTime / daysAvailable;
  console.log(pagesPerDay);
}
lab7(212, 20, 2);
lab7(432, 15, 4);

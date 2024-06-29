function exercise6(input) {
  let index = 0;
  let movieName = input[index];
  index++;
  let totalSeats = Number(input[index]);
  index++;

  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;
  let totalTickets = 0;

  while (movieName !== "Finish") {
    while (input[index] !== "End" && totalSeats > 0) {
      let newTicket = input[index];
      totalTickets++;
      totalSeats--;

      switch (newTicket) {
        case "student":
          studentTickets++;
          break;

        case "standard":
          standardTickets++;
          break;

        case "kid":
          kidTickets++;
          break;
      }
      index++;
    }

    console.log(
      `${movieName} - ${(
        (totalTickets / (totalSeats + totalTickets)) * 100 || 0
      ).toFixed(2)}% full.`
    );

    if (input[index] === "End") {
      index++;
    }
    movieName = input[index];
    if (movieName !== "Finish") {
      index++;
      totalSeats = Number(input[index]);
      index++;
    }
  }

  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((studentTickets / totalTickets) * 100 || 0).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((standardTickets / totalTickets) * 100 || 0).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidTickets / totalTickets) * 100 || 0).toFixed(2)}% kids tickets.`
  );
}

exercise6([
  "Shutter Island",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Rush",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Deadpool",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Finish",
]);

// exercise6([
//   "Taxi",
//   "10",
//   "standard",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "standard",
//   "End",
//   "Scary Movie",
//   "6",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "Finish",
// ]);

// exercise6([
//   "The Matrix",
//   "20",
//   "student",
//   "standard",
//   "kid",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "The Green Mile",
//   "17",
//   "student",
//   "standard",
//   "standard",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "Amadeus",
//   "3",
//   "standard",
//   "standard",
//   "standard",
//   "Finish",
// ]);

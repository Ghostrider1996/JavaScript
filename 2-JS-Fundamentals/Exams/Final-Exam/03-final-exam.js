function manageMessages(arry) {
    let capacity = arry.shift();
    let history = new Map();
  
    let command = arry.shift();
    
    while (command !== "Statistics") {
      let [action, ...args] = command.split("=");
  
      switch (action) {
        case "Add":
          let [username, sent, received] = args;
          sent = parseInt(sent);
          received = parseInt(received);
          if (!history.has(username)) {
            history.set(username, { sent, received });
          }
          break;
        case "Message":
          let [sender, receiver] = args;
          if (history.has(sender) && history.has(receiver)) {
            history.get(sender).sent++;
            history.get(receiver).received++;
            if (history[sender].sent > parseInt(capacity)) {
              console.log(`${sender} reached the capacity!`);
              history.delete(sender);
            }
            if (history[receiver].received > parseInt(capacity)) {
              console.log(`${receiver} reached the capacity!`);
              history.delete(receiver);
            }
          }
          break;
        case "Empty":
          let usernameToRemove = args[0];
          if (usernameToRemove === "All") {
            history.clear();
          } else {
            history.delete(usernameToRemove);
          }
          break;
      }
  
      command = arry.shift();
    }

    // Delete users who reached the capacity outside the loop
    for (let [username, { sent, received }] of history.entries()) {
        if (sent > parseInt(capacity)) {
            console.log(`${username} reached the capacity!`);
            history.delete(username);
        }
        if (received > parseInt(capacity)) {
            console.log(`${username} reached the capacity!`);
            history.delete(username);
        }
    }
  
    if (command === "Statistics") {
      console.log(`Users count: ${history.size}`);
      [...history.entries()].forEach(([username, { sent, received }]) => {
        console.log(`${username} - ${sent + received}`);
      });
    }
  }

manageMessages([
    "20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"
]);

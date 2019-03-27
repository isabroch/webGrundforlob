// Creating stats object, mapping out the six stats inside as 0 for now. We always want the array-like object to exist, but can still change the entries inside.
const stats = {
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0
}

// Roll 4d6, dropping the lowest number. Should return the final stat (sum of all rolls), the numbers that were rolled, and which roll was dropped.
function rollStats() {
  const sides = 6; // Does not need to change, so it is const(ant).
  let rolls = ["roll1", "roll2", "roll3", "roll4"]; // Is going to change later, when using .sort();
  let stat = ["Stat", "Rolls", "Dropped"]; // Holds the numbers needed.

  // Generate a random number between 1 & 6.
  function randomNumber() {
    return Math.floor( // Math.floor() = Rounds down to the nearest interger
      Math.random() * sides // Math.random() = Returns a decimal number between 0 & 1. // * sides makes that to a maxium of 5.99.
    ) + 1; //Without, would get range of 0 to 5, but we want from 1 to 6.
  }

  // Set each roll in roll array to the random rolled number ^.
  for (let i = 0; i < rolls.length; i++) {
    rolls[i] = randomNumber();
  }

  // Sort rolls in descending order, and then remove the last object in the array (in this case, the lowest number).
  rolls = rolls.sort(function(a, b){return b - a}); // To sort by ascending, use {return a - b}
  const dropped = rolls.pop(); // Stores the value of the removed object (the lowest number) in variable dropped.

  // Get the sum of all the values inside array when used as parameter in reduce().
  function finalStat(total, num) {
    return total + num;
  }

  stat[0] = rolls.reduce(finalStat); // Stores the sum of the 3 highest rolls.
  stat[1] = rolls; // Stores the 3 rolls that were kept.
  stat[2] = dropped; // Stores the roll that was dropped.

  return stat; // Returns the 3 stored values above as an array.
}

// Assign the stat values to each of the 6 stats.
function setStats() {
  Object.keys(stats).forEach( // For each key(e.g. str, dex) in stats (treated like an array)
    function(key) {
      stats[key] = rollStats(); // Set the value of the key to the array, i.e. str: [stat, roll, dropped].
    }
  );

  return stats; // Returns the new array-like object with all stats.
}

// Runs setStats.
setStats();
console.log(stats);

/* Now we're testing to see how many times somebody has to roll (all stats at once) to get a good set, dvs. above 12 in every stat */

let perfectSet = false;
let attempts = 1;

while (perfectSet == false && attempts < 100000000) {
  setStats();
  // console.log(stats.str[0]+", "+stats.dex[0]+", "+stats.con[0]+", "+stats.int[0]+", "+stats.wis[0]+", "+stats.cha[0]);
  perfectSet = stats.str[0] == 18 && stats.dex[0] == 18 && stats.con[0] == 18 && stats.int[0] == 18 && stats.wis[0] == 18 && stats.cha[0] == 18;
  attempts++;

  function progress(num) {
    if (attempts == num) {
      console.log("You've reached " + num + " tries and still haven't gotten perfect stats.")
    }
  }

  progress(100);
  progress(1000);
  progress(10000);
  progress(100000);
  progress(1000000);
  progress(10000000);
  progress(100000000);
}

if (perfectSet == true) {
  alert("It took you " + attempts + " tries to get a set above 12 in every stat.");
} else {
  alert("You never got a good roll.");
}

/* End test */


// For every stat key(e.g. str, dex), create a list item and print the values.
for (const [key, value] of Object.entries(stats)) { // For loop that gets the key (str) and value (the array) out of each entry (str: [array]) in our stats.
    const list = document.querySelector("#stats ul"); // The list that will hold the list item.
    const node = document.createElement("li"); // The element to put inside the list.
    node.idName = key.data; // Setting the ID of the new list item to the key (e.g. str).
    const textNode = key + ": " + value[0] + " [" + value[1] + " - <span class='dropped'>" + value[2] + "</span>]"; // Expected example output "str: 17 [5,6,6 - 2]"
    node.innerHTML = textNode; // Putting the text inside of the list item.

    list.insertAdjacentHTML('beforeend', node.outerHTML); // Inserting the list item with text at the end of, but still within, the list.
  };

// Expected example output:

// str: 17 [5,6,6 - 2]
// dex: 13 [3,4,6 - 2]
// con: 3 [1,1,1 - 1]

// and so on so forth...

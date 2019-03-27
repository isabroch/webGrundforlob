/* 
Testing my skills on 
https://en.wikipedia.org/wiki/Deaths_in_2019
Let's return a list of:
//- people under 40, sorted from youngest to oldest
// - Americans
//- people over 80, sorted from oldest to youngest
- list of deaths by age groups (dvs. 10s, 20s, 30s, mm.)
//- 10 oldest and 10 youngest
*/

// > All deaths
const listOfDeaths = Array.from(document.querySelectorAll('.mw-parser-output h3 ~ ul li')); /* Getting all the list items of deaths */
const deathsNoNotes = listOfDeaths.map(person => person.textContent.replace(/\[.*?\]/, '')); /* Removing all notes like [38] or [pt] etc. */

/* 
Want an object like:
const deaths = [
  {name: 'first last', age: 20, who: 'country etc.'},
  {name: 'first last', age: 20, who: 'country etc.'},
  ...
]
*/
const deaths = deathsNoNotes.map(person => {
  return {
    name: person.split(', ')[0],
    age: parseInt(person.split(', ')[1]),
    who: person.split(', ')[2],
  }
});


// > People under 40, sorted from youngest to oldest
const under40 = deaths.filter(person => person.age <= 40);
const under40Sorted = under40.sort((a, b) => (a.age > b.age) ? 1 : -1);
// console.table(under40Sorted);


// > People over 80, sorted from oldest to youngest
const over80 = deaths.filter(person => person.age >= 80);
const over80Sorted = over80.sort((a, b) => (a.age < b.age) ? 1 : -1);
// console.table(over80Sorted);


// > 10 oldest and 10 youngest deaths
const youngest = under40Sorted.filter(person => under40Sorted.indexOf(person) < 10);
const oldest = over80Sorted.filter(person => over80Sorted.indexOf(person) < 10)
const youngestAndOldest = youngest.concat(oldest).sort((a, b) => (a.age > b.age) ? 1 : -1);
// console.table(youngestAndOldest);


// > Americans
const americans = deaths.filter(function (person) {
  let isAmerican;
  if (person.who) {
    isAmerican = person.who.includes('American')
  };
  return isAmerican;
});


// > Number of deaths by age
const deaths10s = deaths.filter(person => person.age < 20);
const deaths20s = deaths.filter(person => person.age >= 20 && person.age < 30);
const deaths30s = deaths.filter(person => person.age >= 30 && person.age < 40);
const deaths40s = deaths.filter(person => person.age >= 40 && person.age < 50);
const deaths50s = deaths.filter(person => person.age >= 50 && person.age < 60);
const deaths60s = deaths.filter(person => person.age >= 60 && person.age < 70);
const deaths70s = deaths.filter(person => person.age >= 70 && person.age < 80);
const deaths80s = deaths.filter(person => person.age >= 80 && person.age < 90);
const deaths90s = deaths.filter(person => person.age >= 90 && person.age < 100);
const deaths100s = deaths.filter(person => person.age >= 100);
const deathsByAges = [
  {Age: 'Under 20', Deaths: deaths10s.length},
  {Age: '20 - 29', Deaths: deaths20s.length},
  {Age: '30 - 39', Deaths: deaths30s.length},
  {Age: '40 - 49', Deaths: deaths40s.length},
  {Age: '50 - 59', Deaths: deaths50s.length},
  {Age: '60 - 69', Deaths: deaths60s.length},
  {Age: '70 - 79', Deaths: deaths70s.length},
  {Age: '80 - 89', Deaths: deaths80s.length},
  {Age: '90 - 99', Deaths: deaths90s.length},
  {Age: 'Over 100', Deaths: deaths100s.length},
  {Age: 'Total', Deaths: deaths.length}
]
// console.table(deathsByAges);

// > Console logging

console.log('Number of deaths in each age group in March')
console.table(deathsByAges);
console.log('10 youngest and 10 oldest deaths in March')
console.table(youngestAndOldest);
console.log('All Americans that have died in March');
console.table(americans);
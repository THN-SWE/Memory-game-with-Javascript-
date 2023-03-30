const l = [
  "one",
  "one",
  "two",
  "two",
  "three",
  "three",
  "four",
  "four",
  "five",
  "five",
  "six",
  "six",
  "seven",
  "seven",
  "eight",
  "eight",
  "nine",
  "nine",
  "ten",
  "ten",
  "eleven",
  "elven",
  "twelve",
  "twleve",
];

function createCards() {
  newList = shuffle(l);
  ids = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
  ];
  for (i = 0; i < 24; i++) {
    document.getElementById(ids[i]).innerHTML = l[i];
  }
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function chooseTwo(id) {
  document.getElementById(id.id).style.fontSize = "30px";
  
}

 
 

createCards();

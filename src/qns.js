const qs = [
  {
    question: "What was Tandem previous name?",
    incorrect: ["Tandem", "Burger Shack", "Extraordinary Humans"],
    correct: "Devmynd",
  },
  {
    question:
      "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    incorrect: ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
    correct: "Et tu, Brute?",
  },
  {
    question: "A group of tigers are referred to as:",
    incorrect: ["Chowder", "Pride", "Destruction"],
    correct: "Ambush",
  },
  {
    question: "What is the top speed an average cat can travel?",
    incorrect: ["42 mph", "13 mph", "9 mph"],
    correct: "31 mph",
  },
  {
    question: "A cat can jump to _____ times its own height:",
    incorrect: ["3", "9", "7"],
    correct: "5",
  },
  {
    question: "What is the only letter that doesn't appear in a US state name?",
    incorrect: ["M", "Z", "X"],
    correct: "Q",
  },
  {
    question: "What is the name for a cow-bison hybrid?",
    incorrect: ["Cowson", "Bicow", "Mooson"],
    correct: "Beefalo",
  },
  {
    question: "What is the largest freshwater lake in the world?",
    incorrect: ["Lake Baikal", "Lake Michigan", "Lake Victoria"],
    correct: "Lake Superior",
  },

  {
    question: "In a website address bar, what does WWW stand for?",
    incorrect: ["Wild Wild West", "War World Web"],
    correct: "World Wide Web",
  },
  {
    question:
      "In a game of bingo, what number is represented by the name two little ducks?",
    incorrect: ["20", "55", "77"],
    correct: "22",
  },
  {
    question: "According to Greek mythology, who was the first woman on Earth?",
    incorrect: ["Lilith", "Eve", "Hera"],
    correct: "Pandora",
  },
  {
    question: "In which European city would you find Orly airport?",
    incorrect: ["London", "Belgium", "Munich"],
    correct: "Paris",
  },
  {
    question: "Where would you find the Sea of Tranquility?",
    incorrect: ["California", "Siberia", "China"],
    correct: "The Moon",
  },
  {
    question: "Which artist painted 'Girl with a Pearl Earrin'?",
    incorrect: ["Van Gogh", "Picasso", "Da Vinci"],
    correct: "Vermeer",
  },
  {
    question: "What is the official name for the 'hashtag' symbol?",
    incorrect: ["Number sign", "Hash Sign", "Pound"],
    correct: "Octothorpe",
  },
  {
    question: "Not American at all, where is apple pie from?",
    incorrect: ["Japan", "Ethiopia", "Canada"],
    correct: "England",
  },
  {
    question: "What is the national animal of Scotland?",
    incorrect: ["Bear", "Rabbit", "Seal"],
    correct: "Unicorn",
  },
  {
    question:
      "Where in the world is the only place where Canada is *due south*",
    incorrect: ["Alaska", "Russia", "Washington"],
    correct: "Detroit",
  },
  {
    question: "Approximately how many grapes go into a bottle of wine?",
    incorrect: ["500", "200", "1000"],
    correct: "700",
  },
  {
    question: "How much does a US One Dollar Bill cost to make?",
    incorrect: ["$0.25", "$1", "$5"],
    correct: "$0.05",
  },
  {
    question:
      "The Vatican bank has the only ATM in the world that allows users to do what?",
    incorrect: [
      "Receive withdrawls in rosary beads",
      "Vote for the Pope",
      "Purchase indulgences",
    ],
    correct: "Perform transactions in Latin",
  },
];

//added correct answer to incorrect array to be able to later on map all choices from that array and
//randomize options in array so they won't be at last index everytime
qs.forEach((q) => {
  q["incorrect"].push(q.correct);
  q.incorrect.sort(() => 0.5 - Math.random());
});

//add id to every answer option
qs.forEach((q) => {
  let id = 0;
  q.incorrect.forEach((alt) => {
    let idx = q.incorrect.indexOf(alt);
    if (idx !== -1) {
      q.incorrect[idx] = { alt, id };
      id++;
    }
  });
  id = 0;
});

//qb(question bank) is a promise that when resolved provides a set of 10 rnandom questions
let qb = (n = 10) =>
  Promise.resolve(qs.sort(() => 0.5 - Math.random()).slice(0.5, n));

export default qb;

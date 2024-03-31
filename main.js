

// Create Your Object Here
let member = {
name:"Elzeo",
age:38,
country: "Egypt",

fullDetails : function(){
return `My Name Is ${member.name},
 My Age Is ${this.age}, 
 I Live in ${this.country}`;
}
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


//##########ass2####################################################

// Method One
let objMethodOne ={
    property :"methide pne",
}

console.log(objMethodOne.property); // "Method One"

// Method Two
 let objMethodTwo = new Object();
 objMethodTwo["property"] = "methide two",

   

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({
    property:"methide 3",
});


console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign({},{property :"methide 4"})
console.log(objMethodFour.property); // "Method Four"
//##########ass3####################################################
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject =Object.assign({a},threeNums,twoNums)
//finalObject.a =1,
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
//##########ass4####################################################

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let obj= Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[obj[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[obj[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[obj[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First =>${myFavGames[obj[i]]["bestThree"]["one"]} `);
    console.log(`Second => ${myFavGames[obj[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[obj[i]]["bestThree"]["three"]}`);
  }
  console.log("#".repeat(20));
}

// Ouput

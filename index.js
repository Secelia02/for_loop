for (let i = 0; i <= 10; i++) {
  console.log(i)
}

const characters = ["Sonic", "Tails", "Luigi", "Mario"]

let para = document.querySelector("p")
let info = `The characters are `

for (let i = 0; i < characters.length; i++) {
  if (i === characters.length - 1) {
    info += `and ${characters[i]}.`
  } else {
    info += `${characters[i]}, `
  }
}
para.innerText = info

//Create an array of five colors, use a for loop to iterate over each color with the statement: "[color] is my fav color!" Console log the results.

let color = ["orange", "red", "blue", "purple", "gold"]


for (let i = 0; i < color.length; i++) {
  i === color.length
  console.log(`${color[i]} is my fav color!`)
}






























//Create a for loop that prints the numbers from 1 to 5. Use the statement: "This is number [number]!"
for (let i = 0; i <= 5; i++) {
  sentence = document.getElementById("sentence")
  sentence.innerText += ` This is number ${[i]}! `

}
//Create an array of three animals (e.g., lion, monkey, giraffe). Use a for loop to iterate over each animal with the statement: "I saw a [animal] at the zoo today!"
let animals = ["lion", "monkey", "giraffe"]

for (let i = 0; i < animals.length; i++) {
  i === "animals"
  animalSentence = document.getElementById("animalSentence")
  animalSentence.innerText += ` I saw a ${animals[i]} at the zoo today! `
}

//Use a nested for loop to create a multiplication table for the numbers 1 to 5. Display the results in the console, like this: 1 * 1 = 1, 1 * 2 = 2, 5 * 5 = 25
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
      console.log(`${i} * ${j} = ${i * j}`)
  }
  
}

//Create an array of students named Elena, Baris, Maria, and Dave. Use a for loop to iterate over each name with the statement: "Name of student is: [students]". Display the results in the console.

let students = ["Elena", "Baris", "Maria", "Dave"]
for (let i = 0; i < students.length; i++) {
  i === "students"
  console.log(`The name of the student is: ${students[i]}`)

}

function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});


//Read the text on for loops and watch the video. Do any examples and then create more practice like those using chatGPT

//Easy: Looping through Friends: 
//Create an array of three friends (e.g., Alice, Bob, Charlie). Use a for loop to iterate over each name with the statement: "My friend is: [friend]". Display the results in the console.
let friends = ["Alice", "Bob", "Charlie"] 
for (let i = 0; i < friends.length; i++) {
  i === "friends"
  console.log(`My friend is: ${friends[i]}.`)
}


//Average Difficulty: 
//Counting and Squaring Numbers: Create an array of numbers (e.g., 2, 4, 6, 8). Use a for loop to iterate over each number and display both the number and its square in the console. Use the statement: "The square of [number] is [square]".
let number = [2, 4, 6, 8]
for (let i = 0; i < number.length; i++) {
  i === "number"
  let square = number[i] ** 2
  console.log(`The square of ${number[i]} is ${square}.`)
}

//Challenge: Odd or Even Checker
//Create an array of numbers (e.g., 11, 14, 17, 20, 23). Use a for loop to iterate over each number and check if it's odd or even. Display the results in the console using the statement: "[number] is [odd/even]".
let numbers = [11, 14, 17, 20, 23]
for (let i = 0; i < numbers.length; i++) {
  i === "numbers"
  if (numbers[i] % 2 !== 0 ) {
    console.log(`${numbers[i]} is odd.`)
  } else {
    console.log(`${numbers[i]} is even.`)
  }
}
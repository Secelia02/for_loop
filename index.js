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

//Read the text on for loops and watch the video. Do any examples and then create more practice like those using chatGPT


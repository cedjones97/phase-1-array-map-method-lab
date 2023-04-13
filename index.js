const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
//   let capSentence = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
//  let words = (stringSplit) => tutorials.split(' ').map(capSentence);
//  let capSen = (stringJoin) => words.join(' ');
let capitalizeTitles = tutorials.map( (tutorial) => {
  let words = tutorial.split(' ')
  let capSentence = words.map( mapTutorial => { 
    return mapTutorial[0].toUpperCase() + mapTutorial.slice(1)})
  
    let join = capSentence.join(' ')
  return join

}
)
  return capitalizeTitles
}
console.log(titleCased())


// let sentence = "change my title case in this string."

// let capSentence = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
// let strWords = sentence.split(' ').map(capSentence);
// let titleCase = strWords.join(' ') 
// console.log(titleCase)






// let obj = {name: 'rose'}
// let obj2 = Object.assign({}, obj)
// console.log(obj2)
// obj2.name = 'bubbles'
// console.log(obj2)
// console.log(obj)

// myBooks = [
//   {
//     title: 'This is not a love story',
//     price: 30,
//     inventory: 20
//   },
//   {
//     title: 'Slick',
//     price: 25,
//     inventory: 30
//   },
//   {
//     title: 'May 9th',
//     price: 20,
//     inventory: 15
//   }
// ]
// const title = myBooks.map(function(item){
//   console.log(item.title)
// })


// function loopAndUpdate(array, updaterFoo){
//   const updatedArray = []
//   for(let item of array){
//     updatedArray.push(updaterFoo(item))
//   }
//   return updatedArray
// }

// function titles(item){
//   return item.title 
// }

// function pricesFoo(item){
//   console.log('inside of pricesFoo', item)
//   return item.price
// }

// const prices = myBooks.map(pricesFoo)

// const inventory = myBooks.map(item => item.inventory)
// console.log(inventory)

// function halfOff(item){
//   let itemCopy = Object.assign({}, item)
//   itemCopy.price = Math.floor(itemCopy.price/2)
//   return itemCopy
// }
// console.log(loopAndUpdate(myBooks, halfOff))








// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   return str.join(' ');
// }
// titleCase('what does the this keyword mean?');
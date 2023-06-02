// console.log("Hello,words");


// console.log("%cHello "," color: red; font-size: 50px;");
// console.log("Hello ", "there ", "World")

// console.log("Hello "+ "there, "+ "World")

// var patdog='rex'
// var patcat='prepper'
// console.log(patdog)
// console.log(patcat)
// console.log("my patdog name is a"+patdog)
// console.log("my patcat name is a"+patcat)


// var dogsond='woof'
// console.log( patdog + dogsond)

// console.log( patdog ,"Says " + dogsond)

// var catsond='purr'
// console.log(patcat,'says',catsond)
// var catsond='purr'
// catsond= 'meow'
// console.log(catsond)
// console.log(patcat ,'know says', catsond)

// var num1 = 2;
// var num2 = 5;
// var test1 = num1 % 2;
// var test2 = num2 % 2;
// var result1 = test1 == 0;
// var result2 = test2 == 0;
// console.log( num1, result1);
// console.log(num2, result2);




let button = document.querySelector("button");
let text = document.querySelector("textarea");
button.addEventListener("click", () => {
  let utterance = new
   SpeechSynthesisUtterance(text.value);
  speechSynthesis.speak(utterance);
});


/*
1. create variable for letter button that is keyPressed or clicked
2. Create a varaible that makes a random string. We then can split the string and can compare the index of each array to the guess. 
3. Create another variable the length of random string. This will be the "turn" that we take ex when variable 1 will will compart index 1 with the guess 1. 
4. Create buttons for each letter and when that button is clicked check if matches another variable for a letter. This will be done with a function 
5. Increment the varaibles so that they are all on the correct "turn"
6. create a turns varaible to display how many turns they have before they lose 
*/
let stringArray = ['hello', 'cat', 'neighboor', 'house', 'Baseball', 'football', 'soccer', 'plane', 'jogging', 'gaming']
let strings = Math.random().toString(36).substring(2,12)
let guess = stringArray[Math.floor(Math.random()*stringArray.length)].split('')
console.log(guess)
let turnOfHang = 0;
let tries = 6
let guessArr = []

function buttonHang(letter, buttonName){
document.querySelector('.' + buttonName).addEventListener('click', function(){

if(letter == guess[turnOfHang]){
document.querySelector('.guesses').textContent += letter;
turnOfHang +=1;
guessArr.push(guess[turnOfHang - 1])
console.log(guessArr)
 } 
else if(letter != guess[turnOfHang]){
    tries -= 1;
    console.log(tries)
    } 

 if(guessArr.join('') === guess.join('')){

document.querySelector('.congrats').textContent += 'You win';
} 

else if(tries == 0){

    document.querySelector('.congrats').textContent += 'lose'
}


})
}

buttonHang('a','a')
buttonHang('b','b')
buttonHang('c','c')
buttonHang('d','d')
buttonHang('e','e')
buttonHang('f','f')
buttonHang('g','g')
buttonHang('h','h')
buttonHang('i','i')
buttonHang('j','j')
buttonHang('k','k')
buttonHang('l','l')
buttonHang('m','m')
buttonHang('n','n')
buttonHang('o','o')
buttonHang('p','p')
buttonHang('q','q')
buttonHang('r','r')
buttonHang('s','s')
buttonHang('t','t')
buttonHang('u','u')
buttonHang('v','v')
buttonHang('w','w')
buttonHang('x','x')
buttonHang('y','y')
buttonHang('z','z')










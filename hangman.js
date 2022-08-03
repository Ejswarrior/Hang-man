/*
1. create variable for letter button that is keyPressed or clicked
2. Create a varaible that makes a random string. We then can split the string and can compare the index of each array to the guess. 
3. Create another variable the length of random string. This will be the "turn" that we take ex when variable 1 will will compart index 1 with the guess 1. 
4. Create buttons for each letter and when that button is clicked check if matches another variable for a letter. This will be done with a function 
5. Increment the varaibles so that they are all on the correct "turn"
6. create a turns varaible to display how many turns they have before they lose 
*/

//array for the hangman words and the we take a random word and split it for comparing the guesses
let stringArray = ['hello', 'cat', 'neighboor', 'house', 'Baseball', 'football', 'soccer', 'plane', 'jogging', 'gaming', 'computer', 'phone', 'car', 'gym', 'coordinates',
'fishing', 'lake', 'roof', 'highlord', 'country', 'russia']
let guess = stringArray[Math.floor(Math.random()*stringArray.length)].split('')

console.log(guess)
let turnOfHang = 0;
let tries = 6
let guessArr = []
let dashArr = []
dashTurn = 0;

// dashes being created for the quesses
for(let i = 0;i<guess.length; i++){
    dashArr.push('-')
    document.querySelector('.dashes').textContent = dashArr.join('');
    
} 


//created a function so we dont have to write 24 event listeners
function buttonHang(letter, buttonName){
document.querySelector('.' + buttonName).addEventListener('click', function(){

if(letter == guess[turnOfHang]){
//Incrementing the turn for the letters and the turn for the dashes
turnOfHang +=1;
dashTurn += 1;
//Created this so we can replace out - array one by one with each click
dashArr.splice(dashTurn - 1, 1, guess[turnOfHang - 1].toUpperCase())

document.querySelector('.dashes').textContent = dashArr.join('');
guessArr.push(guess[turnOfHang - 1])
console.log(guessArr)
 } 
if(letter != guess[turnOfHang]){
    //When guessing wrong we decrease tries by 1 
    if(tries>0 && guessArr.join('') != guess.join('') ){
    tries -= 1;
    console.log(tries)
    document.querySelector('.guesses').textContent = 'tries:' + tries

    }

} 

 if(guessArr.join('') === guess.join('')){
// joins both arrays and see if they are the same(you win if so)
document.querySelector('.congrats').textContent = 'You win';
} 

else if(tries == 0 ){
// if we go to zero we lose tries

    document.querySelector('.congrats').textContent = 'lose'
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










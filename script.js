// document.querySelector('.message').textContent = "correct guess!";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value =23;

// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));


    if(!guess){
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage("No Number");

    }else if(guess === secretNumber){
        // document.querySelector('.message').textContent = "Correct number";
        displayMessage("Correct Number");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#50e674';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
        
        //When the guess wrong
        }else if(guess !==secretNumber){
            if(score > 1){
            document.querySelector('.message').textContent = 
            guess > secretNumber ? "Too High" : "Too Low";
            // displayMessage("Too High")
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            // document.querySelector('.message').textContent = "You lost the game";
            displayMessage("You lost the game");
            document.querySelector('.score').textContent = 0;
        }    
        }

      //FOR TOO HIGH
    // }else if(guess > secretNumber){
    //     if(score > 1){
    //         // document.querySelector('.message').textContent = "Too high";
    //         displayMessage("Too High")
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         // document.querySelector('.message').textContent = "You lost the game";
    //         displayMessage("You lost the game");
    //         document.querySelector('.score').textContent = 0;
    //     }

     //FOR TOO LOW   
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         // document.querySelector('.message').textContent = "Too low";
    //         displayMessage("Too Low");
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         // document.querySelector('.message').textContent = "You lost the game";
    //         displayMessage("You loss the game");
    //         document.querySelector('.score').textContent = 0;
            
    //     }
        
    // }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = "Starting guess.......";
    displayMessage("Starting guess.........");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});
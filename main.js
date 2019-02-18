"use strict";

// Ask user if wants to play the game or not
{ 
 let greeting = prompt("Would you like to play a game?");

// Declare variables and ask for user name

if (greeting.toLowerCase() === "yes") {
    let userHealth = 40;
    let grantHealth = 10;
    let userName = prompt("What is your name?");
    let wins = 0;

// Print a welcome message to start the game
    console.log(`Let's Begin! ${userName}'s Starting Health is ${userHealth}, and Grant's Starting Health is ${grantHealth}`);

// While loop 
    while (userHealth >= 0 && wins < 3) {
        
        if (grantHealth <= 0) {
            grantHealth = 10;
            wins++;
            console.log( "Grant has been defeated" );
        } else 

        {   
        grantHealth -= Math.floor(Math.random()* 2 + 1);
        userHealth-= Math.floor(Math.random() * 2 + 1);
        console.log(`${userName}'s Health: ${userHealth}`); 
        console.log(`Grant's Health: ${grantHealth}`);
        }   
    }
    
    // validate the counts and print out a congratulation message
    if (wins === 3){
        console.log(`Grants has been defetead 3 times. That means that you are the winner ${userName}.  CONGRATULATIONS!!!!`);
    }

}
// if user does not want to play print out the following message
 else if (greeting === "no") {
    console.log("ugh... Ok, maybe next time?");pageYOffset
    }
}
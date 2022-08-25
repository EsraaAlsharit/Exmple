// import React, { useState } from 'react';

const CoinFlipping = (props) => {

    function tossCoin() {
            return Math.random() > 0.5 ? "heads" : "tails";
    }

    function fiveHeads() {
    return new Promise( (resolve, reject) => {
    // console.log( fiveHeadsSync() );
    // console.log( "This is run after the fiveHeadsSync function completes" );

    let headsCount = 0;
    let attempts = 0;

    while(headsCount < 15 && attempts < 100) {
        attempts++;
        let result = tossCoin();
        
        console.log(`${result} was flipped`);
        if(result === "heads"){
            headsCount++;
        } else {
            headsCount = 0;
        }
        
        if(headsCount === 5) {
            resolve("5 heads in a row!");
        } else if(attempts > 100) {
            console.log(attempts)
            reject("You've hit your limit");
        }
    }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );


    function fiveHeadsSync() {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if(result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }
            }
            return `It took ${attempts} tries to flip five "heads"`;
        }
        console.log( fiveHeadsSync() );
        console.log( "This is run after the fiveHeadsSync function completes" );
        
        

    return (
        <></>
    );
};

export default CoinFlipping;

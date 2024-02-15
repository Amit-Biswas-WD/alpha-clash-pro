// function play(){
//     // Setup 1: Hide the Home Screen to Hide the Screen add the class hidden to the Home Section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');  
//     // console.log(homeSection.classList);

//     // Show The Playground
//     const PlaygroundSection = document.getElementById('play-ground');
//     PlaygroundSection.classList.remove('hidden');
//     // console.log(PlaygroundSection.classList);
// }



function handleKeybordKeyUpEvent(event){
    const playerPress = event.key;
    console.log('player pressed', playerPress);

    // get the expected to press 
    const currnetAlphabetElement = document.getElementById('currnet-alphabet');
    const currnetAlphabet = currnetAlphabetElement.innerText;
    const expectedElement = currnetAlphabet.toLocaleLowerCase();
    // console.log(playerPress, expectedElement);

    // cheak matched or not
    if(playerPress === expectedElement){
        console.log('You have pressed currectly', expectedElement);
        // Update Score
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currnetScore = parseInt(currentScoreText);
        console.log(currnetScore);
        // 2. increase the score by 1 
        const newScore = currnetScore + 1;
        // 3. show the update score
        currentScoreElement.innerText = newScore;
        // start a new round 
        console.log('you got a point');
        removeBackgroundColorById(expectedElement);
        continueGames();
    }
    else{
        console.log('you missed. you loss a life');
        // 1. get the current life number 
        const currnetLifeElement = document.getElementById('currnet-life');
        const currentLifeText = currnetLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // 2. reduce the life const 
        const newLife = currentLife - 1;

        // display the update life count
        currnetLifeElement.innerText = newLife;

    }
}
// capture keybord keypress
document.addEventListener('keyup', handleKeybordKeyUpEvent);



function continueGames(){
    // Setup 1: genarate a random alphabaet 
    const alphabet = getARandonAlphabet();
    console.log('your random alphabet', alphabet);


    // set randomly generated alphabet to the screen (show it)
    const currnetAlphabetElement = document.getElementById('currnet-alphabet');
    currnetAlphabetElement.innerText = alphabet;

    // set Background Color
    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGames();
}
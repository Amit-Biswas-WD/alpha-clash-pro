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
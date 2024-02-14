function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}




function getARandonAlphabet(){
    const alphabaetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabaets = alphabaetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabaet = alphabaets[index];
    return alphabaet;
}




// function getARandonAlphabet(){
//     const alphabaetStrion = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabaets = alphabaetStrion.split('');
//     // console.log(alphabaets);

//     // get a random index between 0-25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
    
//     const alphabaet = alphabaets[index];
//     // console.log(index, alphabaet);
//     return alphabaet;
// }
function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400';)
}

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split(' ');
    // console.log(alphabets);

    // get a random index between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];

    // console.log(index, alphabet);
    return alphabet;

}
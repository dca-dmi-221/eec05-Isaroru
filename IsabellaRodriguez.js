'use strict'

console.log('Primer ejercicio');
/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/
let testWord = "esternocleidomastoideo";

function wordCutter(word) {
    for (let i = 0; i < word.length; i++) {
        let disorganized = Math.floor(Math.random() * (word.length - 0.5));
        console.log(word[disorganized])
    }
}
wordCutter(testWord);

console.log('Segundo ejercicio');
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    let wordsList2 = wordsList.map((character) => character.toLowerCase());
    targetWord = targetWord.toLowerCase();
    targetWord = normalizedWord(targetWord);
    targetWord = wordsList2.includes(targetWord);
    console.log(targetWord);
}

function normalizedWord(word) {
    return word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);

console.log('Tercer ejercicio');
/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let totalLetters = 0;
    wordsList.forEach(word => totalLetters += word.length);
    const averageSize = totalLetters / wordsList.length;

    const sortedWords = wordsList.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    })

    return {
        averageSize,
        shortest: sortedWords[0],
        longest: sortedWords[sortedWords.length - 1],
    }
}
console.log(wordLengthClassifier(testSampleList))


console.log('Cuarto ejercicio');
/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    let normalized = word.replace(/[^\w]/g, '').toLowerCase();
    let reversed = normalized.split('').reverse().join('');
    if (word.replace(/[^\w]/g, '').toLowerCase() !== reversed) {
        console.log(false);

    } else {
        console.log(true);
    }
}
palindromeVerifier(onVerificationWordA);

console.log('Quinto ejercicio');
/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(objectContainer) {
    let vowels = 0;
    let consonants = 0;
    objectContainer.list.forEach(word => {
        word.toLowerCase().split('').forEach(letter => {
            if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
                vowels += 1;
            } else {
                consonants += 1;
            }
        })
    })
    return [vowels, consonants]
}
console.log(lettersCounter(containerTestObject));

console.log('Sexto ejercicio');
/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    let join = listA.concat(listB);
    console.log(join);
}
arrayJoiner(wordArrayA, wordArrayB);

console.log('Séptimo ejercicio');
/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    let posAnagram = [];
    listOfWords.forEach((word, number) => {
        let organizedArray = word.split('').sort().join('');
        let organizedMethod = wordToExplore.split('').sort().join('');
        if (organizedArray === organizedMethod) {
            posAnagram.push(number);
        }
    })
    console.log(posAnagram);
}
anagramVerifier(testWordToExplore, wordsToVerify);

console.log('Octavo ejercicio');
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let lists = objectMultiContainer.listA.concat(objectMultiContainer.listB);
    for (let i = 0; i < lists.length; i++) {
        lists[i] = lists[i].replace(/[aeiou]/g, '');        
    }
    console.log(lists);
}

vocalsRemoverFromObject(testObjMultiContainer);

console.log('Noveno ejercicio');
/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacaer(words) {
    let vowels = ['a','e', 'i','o' , 'u']
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse();
        let letter = words[i].find((array,element,pos) => array [element] === vowels[pos]);
        words[i] = words[i].join('').replace(letter,'x');
        words[i] = words[i].split('').reverse().join('');
    }
    console.log(words)
}

lastVocalReplacaer(someWordsToTest);

console.log('Décimo ejercicio');
/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    let counter = 0;
    for (let i = 0; i < listA.length; i++) {
        for (let j = 0; j < listB.length; j++) {
            listA[i] = listA[i].split('').reverse().join('');
            if (listA[i] === listB[j]) {
                counter ++;
            } 
        }
    }
    return counter;
}

console.log(doubleListVerifier(testListA,testListB));
const destination = document.getElementById("main")

//loop through words.length
//alphabetize everything 
//check for duplicates
//when duplicate = true; push that index of the original index to an array and store it.


function anagramGrouper() {


    document.getElementById("findButton").onclick = function () {
        const typedText = document.getElementById("input").value;
        const anagrams = {};
        let obj = {};
        let counter = 0;

        for (j = 0; j < words.length; j++) {
            let anagram = alphabetize(words[j])
            let word = words[j]

            if (obj.hasOwnProperty(anagram)) {
                console.log(anagram + ' exists' + ' pushing word ' + words[j]);
                obj[anagram].push(words[j]);
            } else {
                Object.defineProperty(obj, anagram, {
                    value: new Array(),
                    writable: true,
                    enumerable: true,
                });
                obj[anagram].push(words[j]);
                console.log("creating new object for " + anagram + " with " + word[j])
            }
            if (obj[anagram].length > 4) {
                let div1 = document.createElement("span");
                let newContent = document.createTextNode(obj[anagram] + ":::::::::");
                div1.appendChild(newContent);
                document.getElementById("main").appendChild(div1);

            }
        }
        console.log(counter += 1)
        console.log("finished")
        console.log(obj)
    }
}


function alphabetize(word) {

    return word.toLowerCase().split("").sort().join("").trim();
}


// var b = 'b';
// var obj = {
//     a: 'test1',
//     b: 'test2',

// };

// if (obj.hasOwnProperty(b)) {
//     console.log('has b');
// } else {
//     Object.defineProperty(obj, "c", {
//         value: new Array(),
//         writable: true,
//         enumerable: true,
//     });
//     obj['c'].push("it's working");
//     obj['c'].push("and now I just added multiple values boo fucking ya");
//     console.log(obj);
// }


// if (obj.hasOwnProperty('c')) {
//     console.log('has c');

// } 
// else {
//     Object.defineProperty(obj, "c", {
//         value: 'test3',
//         writable: true,
//         enumerable: true,
//     });
//     console.log(obj)
// }
// store the result (anagrams object) in a variable called groupedAnagrams

// const destination = document.getElementById("main")

// function anagramGrouper() {


//     document.getElementById("findButton").onclick = function () {
//         const typedText = document.getElementById("input").value;
//         const anagrams = {};

//             for(i = 0; i < words.length; i++) {

//                 if (alphabetize(typedText) == alphabetize(words[i])){

//                     let div1 = document.createElement("div");
//                     let newContent = document.createTextNode(words[i]);
//                     div1.appendChild(newContent);
//                     document.getElementById("main").appendChild(div1);

//                 }

//         }
//     } 
// }

// function alphabetize(word) {

//     return word.toLowerCase().split("").sort().join("").trim();
// }
// function removeDuplicates(alphaArray){
//     let unique_array = []
//     for(let i = 0;i < alphaArray.length; i++){
//         if(unique_array.indexOf(alphaArray[i]) == -1){
//             unique_array.push(alphaArray[i])
//         }
//     }
//     return unique_array
// }




///############################################################################

//second try 

// const alphabetizeAndSort = {
//     alphaArray: [],
//     obj: {},
//     insertWords: function () {
//         let objOfKeys = this.arrayOfObj();
//         for (i = 0; i < 5; i++){
//             for (let property in objOfKeys) {
//                 if (property !== this.alphabetize(words[i])) {
//                     console.log("no: " + property + this.alphabetize(words[i]));
//                     break;
//                 }
//                 else if (property == this.alphabetize(words[i])) {
//                     console.log("yes");
//                     console.log(property.length);
//                     console.log(property);

//                 }
//             }
//         }

//         console.log(objOfKeys)
//         return objOfKeys;
//     },

//     //need to loop through the 
//     arrayOfObj: function () {
//         let removeDuplicates = this.removeDuplicate();
//         for (i = 0; i < removeDuplicates.length; i++) {
//             let thisWord = removeDuplicates[i];
//             Object.defineProperty(this.obj,thisWord, {
//                 value: [],
//                 writable: true,
//                 enumerable: true,
//             });
//         }
//         return this.obj
//     },

//     removeDuplicate: function () {
//         this.alphaArray = Array.from(new Set(this.alphabetizeArray()));
//         console.log(this.alphaArray.length)
//         return this.alphaArray;

//     },

//     alphabetizeArray: function (alphaArray) {
//         for (i = 0; i < words.length; i++) {
//             this.alphaArray.push(this.alphabetize(words[i]))
//         }

//         return this.alphaArray;
//     },
//     alphabetize: function (word) {

//         return word.toLowerCase().split("").sort().join("").trim();
//     },
// }
// alphabetizeAndSort.insertWords();







// //if the alphatized words is equal to one of the alphabetized words push it in to 

// function anagramGrouper() {


//     document.getElementById("findButton").onclick = function () {
//         const typedText = document.getElementById("input").value;
//         const anagrams = {};

//         for (i = 0; i < words.length; i++) {

//             if (alphabetize(typedText) == alphabetize(words[i])) {

//                 let div1 = document.createElement("div");
//                 let newContent = document.createTextNode(words[i]);
//                 div1.appendChild(newContent);
//                 document.getElementById("main").appendChild(div1);

//             }

//         }
//     }
// }

// function anagramGrouper() {


//     document.getElementById("findButton").onclick = function () {
//         const typedText = document.getElementById("input").value;
//         const anagrams = {};
//         let obj = {};
//         let counter = 0;
//         for (i = 0; i < words.length; i++) {
//             let anagram = alphabetize(words[i])
//             for (j = 0; j < words.length; j++) {
//                 let word = alphabetize(words[j])
//                 if (anagram == word) {
//                     console.log(word[j] + " is an anagram")
//                     if (obj.hasOwnProperty(anagram)) {
//                         console.log(anagram + ' exists' + ' pushing word ' + words[j]);
//                         obj[anagram].push(words[j]);
//                     } else {
//                         Object.defineProperty(obj, anagram, {
//                             value: new Array(),
//                             writable: true,
//                             enumerable: true,
//                         });
//                         obj[anagram].push(words[j]);
//                         console.log("creating new object for " + anagram + " with " + word[j])
//                     }
//                 } else {
//                     console.log(word[j] + "  is not and anagram")
//                 }
//             }
//             console.log(counter += 1)
//         }
//         console.log("finished")
//         console.log(obj)
//     }
// }

// function alphabetize(word) {

//     return word.toLowerCase().split("").sort().join("").trim();
// }
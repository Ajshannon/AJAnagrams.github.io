const destination = document.getElementById("main")

function anagramGrouper() {
    

    document.getElementById("findButton").onclick = function () {
        const typedText = document.getElementById("input").value;
        const anagrams = {};

            for(i = 0; i < words.length; i++) {
                console.log(typedText);
                if (alphabetize(typedText) == alphabetize(words[i])){
                    console.log("if");
                    let div1 = document.createElement("div");
                    let newContent = document.createTextNode(words[i]);
                    div1.appendChild(newContent);
                    document.getElementById("main").appendChild(div1);
                    console.log(newContent);
                }
                
        }
    } 
}

function alphabetize(word) {

    return word.toLowerCase().split("").sort().join("").trim();
}

// store the result (anagrams object) in a variable called groupedAnagrams

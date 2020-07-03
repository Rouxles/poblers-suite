function randomPoblersName() {
    let name = faker.name.findName();
    let fname = name.slice(0,name.indexOf(" "));
    let lname = name.slice(name.indexOf(" ")+1, name.indexOf(" ")+2) + "oblers";
    return `${fname} ${lname}`;
}

function randomPobler() {
    pobler_name = randomPoblersName();
    document.getElementById("pobler-name").innerHTML = pobler_name;
}

function poblerCoin() {
    if(Math.floor((Math.random())*2) === 0) {
        document.getElementById("pobler-coin").innerHTML = `No poblers`;
    } else {
        document.getElementById("pobler-coin").innerHTML = `Poblers!`;
    }
}

function randomName() {
    return names[Math.floor(Math.random() * names.length)];
}

function randomChar(word) {
    word_array = word.split("");
    return word_array[Math.floor(Math.random()*word_array.length)]
}

function generatePobler() {
    let message = document.getElementById("input-box").value.trim();
    if(message.length === 0) {
        document.getElementById("pobler-generator").innerHTML = `No poblers at all! Thanks ${randomName()}`
    } else if ((message.toLowerCase().replace( /\s/g, '')) == "taotry") {
        document.getElementById("pobler-generator").innerHTML = `13 13 13`;
    } else {
        let words = message.split(" ");
        let string = "";
        for(let i = 0; i<words.length; i++) {
            if (words[i].slice(-1) == "s") {
                string = string + `${randomChar(words[i]).slice(0,1).toUpperCase()}oblers `;
            } else {
                string = string + `${randomChar(words[i]).slice(0,1).toUpperCase()}obler `;
            }      
        }
        document.getElementById("pobler-generator").innerHTML = string;
    }
}


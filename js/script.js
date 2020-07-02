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
        document.getElementById("pobler-coin").innerHTML = `No poblers`
    } else {
        document.getElementById("pobler-coin").innerHTML = `Poblers!`
    }
}

function randomName() {
    let name = names[Math.floor(Math.random() * names.length)]
    return name
}

function generatePobler() {
    message = document.getElementById("input-box").innerHTML
    if(message.length === 0) {
        document.getElementById("pobler-generator").innerHTML = `No poblers at all! Thanks ${randomName()}`
    }
}


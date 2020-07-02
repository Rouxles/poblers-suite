function randomPoblersName() {
    let name = names[Math.floor(Math.random() * names.length)];
    let fname = name.slice(0,name.indexOf(" "));
    let lname = name.slice(name.indexOf(" ")+1, name.indexOf(" ")+2) + "oblers";
    return `${fname} ${lname}`;
}

function randomPobler() {
    pobler_name = randomPoblersName();
    document.getElementById("pobler-name").innerHTML = pobler_name;
}
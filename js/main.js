let dataObject = {
    profileName: "EMAMY",
    userName: "emamy574",
    age: 24,
    skills: {
        firstSkill: "HTML",
        secondSkill: "CSS",
        thirdSkill: "JavaScript"
    },
    descriptionPost: "I'm a Junior Front-End Developer",
}

let firstDiv = document.createElement("div");
firstDiv.classList.add("texts");
let firstHeading = document.createElement("h1");
let fHText = document.createTextNode(`Welcome, ${dataObject.profileName}`);
firstHeading.appendChild(fHText);
let firstParagraph = document.createElement("p");
firstParagraph.classList.add("first");
let fPText = document.createTextNode("@" + dataObject.userName);
firstParagraph.appendChild(fPText);
let secondParagraph = document.createElement("p");
secondParagraph.classList.add("second");
let sPText = document.createTextNode(`Age : ${dataObject.age}`);
secondParagraph.appendChild(sPText);
let thirdParagraph = document.createElement("p");
thirdParagraph.classList.add("third");
let tPText = document.createTextNode(`Skills: ${dataObject.skills.firstSkill} | ${dataObject.skills.secondSkill} | ${dataObject.skills.thirdSkill}`);
thirdParagraph.appendChild(tPText);
let fourthParagraph = document.createElement("p");
fourthParagraph.classList.add("fourth");
let fthPText = document.createTextNode(dataObject.descriptionPost);
fourthParagraph.appendChild(fthPText);
firstDiv.appendChild(firstHeading);
firstDiv.appendChild(firstParagraph);
firstDiv.appendChild(secondParagraph);
firstDiv.appendChild(thirdParagraph);
firstDiv.appendChild(fourthParagraph);

let myContainer = document.querySelector(".container");
myContainer.appendChild(firstDiv);
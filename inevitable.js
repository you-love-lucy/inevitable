function getNames() {
        var firstName = document.getElementById("firstName").value;
        var username = document.getElementById("username").value;
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('username', username);
}

function displayName() {
        document.getElementById("user").innerHTML = localStorage.getItem('username');
        document.getElementById("name").innerHTML = localStorage.getItem('firstName');
}


const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const storyNodes = {
    start: {
        text: "I have a challenge for you.",
        choices: [
            { text: "Who is this?", next: "1" },
            { text: "What challenge?", next: "1" }
        ]
    },
    1: {
        text: "You have one day to figure out who my next victim is.",
        choices: [
            { text: "Victim?", next: "2" },
            { text: "What are you talking about?", next: "2" }
        ]
    },
    2: {
        text: "I have killed before, and I will in 24 hours. You're friends with the next victim on this site.",
        choices: [
            { text: "I'm calling the cops.", next: "3" },
            { text: "I'll just warn them all.", next: "4" }
        ]
    },
    3: {
        text: "They won't believe you.",
        choices: [
            { text: "I'll just warn all my friends.", next: "4" },
            { text: "This is creepy.", next: "5" }
        ]
    },
    4: {
        text: "If you warn the wrong person, I'll kill them and you, too.",
        choices: [
            { text: "I'm calling the cops.", next: "3" },
            { text: "This is creepy", next: "5" }
        ]
    },
    5: {
        text: "Talk to your friends and figure out which one I'm coming for.",
    }
};

function showNode(nodeName) {
    const node = storyNodes[nodeName];
    storyElement.textContent = node.text;

    choicesElement.innerHTML = "";

    node.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => showNode(choice.next);
        choicesElement.appendChild(button);
    });
}

showNode("start");


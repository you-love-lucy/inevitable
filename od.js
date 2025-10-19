const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const storyNodes = {
    start: {
        text: "",
        choices: [
            { text: "You online?", next: "1" },
            { text: "Have you noticed anything weird lately?", next: "2" }
        ]
    },
    1: {
        text: "always lol",
        choices: [
            { text: "Have you noticed anything weird lately?", next: "2" },
            { text: "How have you been?", next: "3" }
        ]
    },
    2: {
        text: "nope. just the usual weird",
        choices: [
            { text: "What have you been up to recently?", next: "3" },
            { text: "What's the usual weird?", next: "3" }
        ]
    },
    3: {
        text: "ugh life. college, work, etc. etc. etc.",
        choices: [
            { text: "How's school?", next: "4" },
            { text: "How's work?", next: "5" }
        ]
    },
    4: {
        text: "good i guess",
        choices: [
            { text: "How's work?", next: "5" }
        ]
    },
    5: {
        text: "ugh. a guy threatened to unalive me the other day",
        choices: [
            { text: "We're on a true crime forum, you can say kill.", next: "6" },
            { text: "What!?!?", next: "7"}
        ]
    },
    6: {
        text: "lollllllll habit",
        choices: [
            { text: "What happened?", next: "7" }        
        ]
    },
    7: {
        text: "redneck w/ a gun :( i hate retail",
        choices: [
            { text: "I think someone might be trying to kill you for real.", redirect: "gameover.html"},       
            { text: "Well, stay safe. Talk later." }      
        ]

    },
};

function showNode(nodeName) {
    const node = storyNodes[nodeName];
    storyElement.textContent = node.text;

    choicesElement.innerHTML = "";

    if(node.choices) {
        node.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;

            button.onclick = () => {
                if (choice.redirect) {
                    window.location.href = choice.redirect;
                } else {
                    showNode(choice.next);
                }
            };
        

        choicesElement.appendChild(button);
        });
    }
}

showNode("start");
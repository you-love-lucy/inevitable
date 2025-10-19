const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const storyNodes = {
    start: {
        text: "heyyyyyyy what's up?",
        choices: [
            { text: "This guy is messaging me and creeping me out.", next: "1" },
            { text: "Have you noticed anything weird lately?", next: "2" }
        ]
    },
    1: {
        text: "ewwww, men, right? block him.",
        choices: [
            { text: "Have you noticed anything weird lately irl?", next: "2" },
            { text: "How have you been?", next: "4" }
        ]
    },
    2: {
        text: "uhhhhhh, not really. my car got robbed. :(",
        choices: [
            { text: "That sucks.", next: "3" },
            { text: "Really?", next: "3" }
        ]
    },
    3: {
        text: "yeah, my own fault tho. left it unlocked",
        choices: [
            { text: "Besides that, how have you been?", next: "4" },
            { text: "Talk later?", next: "5" }
        ]
    },
    4: {
        text: "pretty good. hbu",
        choices: [
            { text: "Ok. Look, I gtg. Talk later?", next: "5" },
            { text: "I think you're about to be killed", redirect: "gameover.html" }
        ]
    },
    5: {
        text: "ttyl",
    }
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
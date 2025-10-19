const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const storyNodes = {
    start: {
        text: "",
        choices: [
            { text: "Hey, how are you?", next: "1" },
            { text: "Have you noticed anything weird lately?", next: "2" }
        ]
    },
    1: {
        text: "Good, you?",
        choices: [
            { text: "Have you noticed anything weird lately?", next: "2" },
            { text: "Pretty good. What have you been up to?", next: "4" }
        ]
    },
    2: {
        text: "No.",
        choices: [
            { text: "What have you been up to recently?", next: "4" },
            { text: "Are you sure?", next: "3" }
        ]
    },
    3: {
        text: "Just been working and researching.",
        choices: [
            { text: "Researching what?", next: "4" },
            { text: "Talk later?", next: "5" }
        ]
    },
    4: {
        text: "Working on the old puzzle killer case.",
        choices: [
            { text: "The guy who made his victims solve murder mysteries?", next: "5" },
            { text: "Find anything?", next: "5"}
        ]
    },
    5: {
        text: "Yeah. I think I might know who it is.",
        choices: [
            { text: "Really?", next: "6" },
            { text: "Be careful.", next: "6"}
        ]
    },
    6: {
        text: "I'm going to go to the cops soon.",
        choices: [
            { text: "Well, keep me updated." },
            { text: "I think you might be in danger.", redirect: "gameover.html"}
        ]
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

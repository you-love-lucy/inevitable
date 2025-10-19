const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const storyNodes = {
    start: {
        text: "",
        choices: [
            { text: "Hey, Marie. How are you?", next: "1" },
            { text: "Have you noticed anything weird lately?", next: "3" }
        ]
    },
    1: {
        text: "Bored out of my mind!",
        choices: [
            { text: "Have you noticed anything weird lately?", next: "3" },
            { text: "Why?", next: "2" }
        ]
    },
    2: {
        text: "I'm stuck in the train station, we got delayed.",
        choices: [
            { text: "Where are you?", next: "4" },
            { text: "Have you noticed anything weird lately?", next: "3" }
        ]
    },
    3: {
        text: "Only the stupid snow blocking my train.",
        choices: [
            { text: "That sucks.", next: "5" },
            { text: "Where are you?", next: "4" }
        ]
    },
    4: {
        text: "Middle of nowhere Indiana.",
        choices: [
            { text: "Oof.", next: "5" },
            { text: "Where the puzzle killer was from?", next: "6"}
        ]
    },
    5: {
        text: "Yeah, I know. I've been here forever!!!",
        choices: [
            { text: "What brings you out there?", next: "6" },
            { text: "Be careful.", next: "6"}
        ]
    },
    6: {
        text: "Daisy wanted someone to check something out for her on the puzzle killer case, and I offered because I'm closest.",
        choices: [
            { text: "That's nice of you. Hope the train moves soon!"},
            { text: "I think you might be in danger.", redirect: "win.html"}
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
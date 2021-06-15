// The repo / project specs:


var Workshop = function(inventory) {
    this.inventory = Object.assign({}, inventory);
}

var Blueprint = function (steps) {

    this.partsList = createPartsList(steps);

    this.steps = steps;
}

Blueprint.prototype.hasEnoughInventory = function (inventory) {
    for (let part in this.partsList) {
        var notInInventory = !inventory[part];
        if (notInInventory || inventory[part] < this.partsList[part]) {
            return false
        }
        return true;
    }
}

Blueprint.prototype.build = function (inventory) {
    if (!this.hasEnoughInventory(inventory)) {
        console.log("ERROR: Not enough inventory");
        return inventory;
    }
    for (let i = 0; i < this.steps.length; i++) {
        let step = this.steps[i];
        for (let part in step.parts) {
            inventory[part]--;
        }
        console.log(step.description)
    }
    console.log("Successfully built")
    return inventory;
}


var createPartsList = function (steps) {
    return steps.reduce(function (currentParts, step) {
        for (var part in step.parts) {
            if (part in currentParts) {
                currentParts[part] += step.parts[part];
            } else {
                currentParts[part] += step.parts[part];
            }
        }
        return currentParts;
    }, {})
}


/*
What we want in the DebuggingProcess.md:
For each step:
  - State where you're going to look/ on what line you will put the debugger
  - State why you chose this line
  - Hypothesize what the state of the program will be when you hit this debugger (values for the different variables, etc.)
  - When it hits the debugger - take a screenshot, ideally showing the updated values
  - Compare these results with your hypothesis
  - Repeat

Notes:
- No console logs allowed
- Fill these questions out for every debugger statement
- Have to fill out at least 2 of these per bug (even if you already know what the bug is; complete the process and confirm your understanding)
- Emphasize the process over fixing the bugs
- Document your process in the DebuggingProcess.md.

When You Are Done:
- Fill out the Google Form with the line numbers each bug is on (in numerical order). If you did not finish a particular bug, you can just put line 1.
*/

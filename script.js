const userInput = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const arrFlavors = userInput.split(",");
const objFlavors = {};
for (let i = 0; i < arrFlavors.length; i++) {
    if (objFlavors[arrFlavors[i]] === undefined) {
        objFlavors[arrFlavors[i]] = 1;
    } else {
        objFlavors[arrFlavors[i]] += 1;
    }
}
console.table(objFlavors);

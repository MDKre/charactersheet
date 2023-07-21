const range = 0.5;

function generateAttribute(target) // Generates a number within range of target. Range 0.5 => 50% deviation from target
{
    const upperLevelLimit = target + target*range;    // Adds the range to the global level to get the upper limit. lvl 10 + 5 => lvl 15 upper limit

    const lowerLevelLimit = target - target*range;    // Subtracts the range from the global level to the get lower limit. lvl 10 - 5 => lvl 5 lower limit    

    return Math.round(Math.random() * (upperLevelLimit - lowerLevelLimit) + lowerLevelLimit);
}

let attributeLevel = generateAttribute(10);  // Calls the generateLevelWithinRange function 

function generateModifer(attributeLevel)    // Generates the modifier
{
    return Math.round(Math.floor((attributeLevel-10)/2));
}

let modifier = generateModifer(attributeLevel);    // Calls the generateModifier function

console.log(attributeLevel);
console.log(modifier);
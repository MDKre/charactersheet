const target = parseInt(document.getElementById("playerLevel").value);
const range = 0.5;
const upperLevelLimit = Math.round(target + target * range);
const lowerLevelLimit = Math.round(target - target * range);

function generateRandomLevel(targetLevel)
{
    const target = targetLevel; // The target around which the random levels are generated
    const range = 0.5;  // 0.5 => 50% deviation from target and so on
    const upperLevelLimit = Math.round(target + target * range);    // Target + 50% deviation
    const lowerLevelLimit = Math.round(target - target * range);    // Target - 50% deviation
    let x = parseInt(Math.random() * (upperLevelLimit - lowerLevelLimit) + lowerLevelLimit);    // Generate Level within 50% of target
    return x;
}

function populateAttributes()
{
    document.getElementById("strengthScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);
    document.getElementById("charismaScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);
    document.getElementById("intelligenceScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);
    document.getElementById("willpowerScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);
    document.getElementById("perceptionScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);
    document.getElementById("movementScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);
    document.getElementById("finesseScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);
    document.getElementById("constitutionScore").value = generateRandomLevel(document.getElementById("playerLevel").valueAsNumber);

    generateStrengthMod();
    generateCharismaMod();
    generateIntelligenceMod();
    generateWillpowerMod();
    generatePerceptionMod();
    generateMovementMod();
    generateFinesseMod();
    generateConstitutionMod();
}

function generateStrengthMod()
{
    let x = parseInt(document.getElementById("strengthScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("strengthModifier").value = x;
}

function generateCharismaMod()
{
    let x = parseInt(document.getElementById("charismaScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("charismaMod").value = x;
}

function generateIntelligenceMod()
{
    let x = parseInt(document.getElementById("intelligenceScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("intelligenceMod").value = x;
}

function generateWillpowerMod()
{
    let x = parseInt(document.getElementById("willpowerScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("willpowerMod").value = x;
}

function generatePerceptionMod()
{
    let x = parseInt(document.getElementById("perceptionScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("perceptionMod").value = x;
}

function generateMovementMod()
{
    let x = parseInt(document.getElementById("movementScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("movementModifer").value = x;
}

function generateMovementMod()
{
    let x = parseInt(document.getElementById("movementScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("movementMod").value = x;
}

function generateFinesseMod()
{
    let x = parseInt(document.getElementById("finesseScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("finesseMod").value = x;
}

function generateConstitutionMod()
{
    let x = parseInt(document.getElementById("constitutionScore").value);
    x = Math.round(Math.floor((x-10)/2));
    document.getElementById("constitutionMod").value = x;
}
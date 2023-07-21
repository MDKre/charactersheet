const target = parseInt(document.getElementById("playerLevel").value);
const range = 0.5;
const upperLevelLimit = Math.round(target + target * range);
const lowerLevelLimit = Math.round(target - target * range);

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
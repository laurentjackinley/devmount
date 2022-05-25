// Jon stats
let JonSnowAttack = 25;
let JonSnowHealth = 100;
let JonSnowDefense = 25;
//Jamie stas
let jamieLannisterAttack = 35;
if (JonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jon Snow");
} else if (JonSnowAttack < jamieLannisterAttack) {
    console.log("Jamie has the better attack");
} else {
    console.log("Jamie Lannister has better attack than Jon");
}
//Jon snow health = jon health - jamie attack
if (JonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain");
} else {
    JonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${JonSnowHealth}`);
}
//jon pick's up a shield
JonSnowDefense += 25;
if (JonSnowHealth <= jamieLannisterAttack - JonSnowDefense) {
    console.log("Jon Snow has been slain");
} else {
    JonSnowHealth -= (jamieLannisterAttack - JonSnowDefense);
    console.log(`Jon Snow's health is down to ${JonSnowHealth}`);
}
// peasan throws Jon a heatlh kit of 50
let healthkit = 50;
if ((JonSnowHealth + healthkit) >= 100) {
    JonSnowHealth = 100;
} else {
    JonSnowHealth += healthkit;
    console.log(`Jon health go's up! ${JonSnowHealth}`);
}
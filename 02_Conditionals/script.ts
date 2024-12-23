// ======== CONDITIONALS ========
// ======== Level 2_1 ========
console.log("Level 2_1");
const johnAge = 22;
const johnHeight = 170;
const meikeAge = 34;
const meikeHeight = 168;

const johnScore = johnAge * 5 + johnHeight;
console.log(`John's score: ${johnScore}`);
const meikeScore = meikeAge * 5 + meikeHeight;
console.log(`Meike's score: ${meikeScore}`);

if (meikeScore > johnScore) {
    console.log(`Meike gewinnt das Spiel mit ${meikeScore} Punkten!`);
} else if (johnScore < meikeScore) {
    console.log(`John gewinnt das Spiel mit ${johnScore} Punkten!`);
} else {
    console.log(`Es gibt ein Unentschieden!`);
}

// ======== Level 2_3 ========

function diff (zahl:number) {
    const differenz = zahl - 27;
    
    if(differenz > 27) {
        const multi = differenz * 2;
        console.log(`Ergebnis: ${differenz}. -> ${differenz} * 2 = ${multi}`);
    } else {
        console.log(`Ergebnis: ${differenz}`);
    }
}
diff(35);
diff(74);
diff(123);

// ======== TERNARY OPERATOR ========
// ======== Level 1_4 ========
console.log("Level 1_4");

const btn = document.querySelector("#pw-btn") as HTMLInputElement;
btn.addEventListener("click", pwCheck)

function pwCheck() {
    event?.preventDefault();

    const inputField = (document.querySelector("#pw") as HTMLInputElement).value;
    const feedback = document.querySelector("#pw-feedback") as HTMLSpanElement;

    feedback.innerText = 
        inputField.length >= 8 
        ? "Welcome to your account"
        : "The password is too short";

    feedback.style.color = 
        inputField.length >= 8
        ? "green"
        : "red";
}

// ======== Level 2_2 ========
console.log("Level 2_2");

const isOnline = Math.random() < 0.5 ;
const isPremiumUser = Math.random() < 0.5;
const isAdult = Math.random() < 0.5;

const OnOffStatus = 
    isOnline == true 
    ? "online" 
    : "offline";
console.log(`Status: ${OnOffStatus}`);

const monthlyFee = 
    isPremiumUser == true 
    ? 19.99 
    : 12.99;
console.log(`Monthly fee: ${monthlyFee}`);

const ageReaction =
    isAdult == false
    ? "Keine Berechtigung"
    : "Willkommen";
// window.alert(ageReaction);

const randomAge = Math.floor(Math.random() * 120);
const randomSalary = Math.floor(Math.random() * 15000);

const isMiddleAged =
    randomAge >= 40 && randomAge <= 65
    ? true
    : false;
console.log(isMiddleAged);

const judgy =
    randomSalary > 10000
    ? "You are rich"
    : (
        randomSalary > 1500
        ? "Not too bad"
        : "Not that much"
    )
console.log(judgy);

// ======== IF/ELSE/SWITCH ========
// ======== Level 2_4 ========
console.log("Level 2_4");

const zufall1 = Math.floor(Math.random() * 77);
const zufall2 = Math.floor(Math.random() * 77);

if (zufall1 == zufall2) {
    console.log("Was für ein Zufall");
} else if (zufall1 > zufall2) {
    console.log("Erste Zahl größer");
} else {
    console.log("Zweite Zahl größer");
}

const zufallDiff = zufall1 - zufall2;

switch(true) {
    case zufallDiff == 0:
        console.log("Was für ein Zufall");
        break;
    case zufallDiff < 0:
        console.log("Erste Zahl ist größer");
        break;
    case zufallDiff > 0:
        console.log("Zweite Zahl ist größer");
}
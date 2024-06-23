// matter 1
function mrMs(person) {
    if (typeof person === "object")
        return (
            (person.gender === "male" && `Janob ${person.name}`) ||
            (person.gender === "female" && `Xonim ${person.name}`) ||
            "Bunday jins mavjud emas"
        );
}

// console.log(mrMs({ name: "Usmonjon", gender: "male" }));

// masala 2
function card(card, method) {
    card = card.replace(/[^0-9]/g, "");
    return method ? `${card.slice(0, 4)} **** **** **${card.slice(-2)}` : card;
}

// console.log(card("8600 1234 5651 2589", true));
// console.log(card("9860 1601 5368 7458", false));

// masala 3
function perimeterRect(a, b) {
    return 2 * (a + b);
}

// console.log(perimeterRect(5, 6));
// console.log(perimeterRect(12, 8));

// masala 4
const yesNo = (text) =>
    text.toLowerCase() === "ha" ||
    !(text.toLowerCase() === "yo'q") ||
    "Not'g'ri so'rov";

// console.log(yesNo("Yo'q"));
// console.log(yesNo("Ha"));

// masala 5
function telNumber(phone) {
    if (phone[0] !== "+") return `+${phone}`;
    return phone;
}

// console.log(telNumber("+998 90 123 4567"));
// console.log(telNumber("998 90 123 4567"));

// masala 6
const greeting = () => "Hello world";

// console.log(greeting());

// masala 7
function brightness(mode) {
    switch (mode) {
        case "light":
            return "dark";
        case "dark":
            return "light";
        default:
            return "not'g'ri so'rov";
    }
}
// console.log(brightness("light"));
// console.log(brightness("dark"));
// console.log(brightness("auto"));

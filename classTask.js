//TASK 7

const users = [{
        name: "Alice",
        age: 30,
        interests: ["coding", "hiking"],
        email: "alice@example.com"
    },
    {
        name: "Bob",
        age: 25,
        interests: ["gaming", "reading"],
        email: "bob@example.com"
    },
    {
        name: "Charlie",
        age: 35,
        interests: ["coding", "cooking", "reading"],
        email: "charlie@example.com"
    },
    {
        name: "Diana",
        age: 28,
        interests: ["yoga", "reading", "gardening"],
        email: "diana@example.com"
    },
    {
        name: "Ethan",
        age: 40,
        interests: ["hiking", "photography"],
        email: "ethan@example.com"
    },
    {
        name: "Fiona",
        age: 22,
        interests: ["music", "gaming"],
        email: "fiona@example.com"
    },
    {
        name: "George",
        age: 32,
        interests: ["coding", "gaming", "reading"],
        email: "george@example.com"
    },
    {
        name: "Hannah",
        age: 27,
        interests: ["writing", "yoga"],
        email: "hannah@example.com"
    },
    {
        name: "Ian",
        age: 30,
        interests: ["photography", "cooking"],
        email: "ian@example.com"
    },
    {
        name: "Julia",
        age: 24,
        interests: ["coding", "yoga"],
        email: "julia@example.com"
    },
];



const sendEmailNotification = users.map((user) => {
    if (user.age >= 18) {
        return `${user.name} adli sexse, yasi ${user.age} olduguna gore bu email unvanina (${user.email}) mesaj gonderildi`;
    }
});


for (let i = 0; i < 5; i++) {
    setInterval(() => {
        console.log(sendEmailNotification);
    }, 1000);
}
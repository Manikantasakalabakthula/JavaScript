// data types
// non-primitive data types
// arrays
const myArray = [
    {
        id: 1,
        name: "Aarav",
        skills: ["HTML", "CSS", "JavaScript"],
        details: {
        age: 24,
        city: "Visakhapatnam",
        isActive: true
        },
        scores: [85, 90, 92]
    },
    {
        id: 2,
        name: "Sneha",
        skills: ["Python", "SQL"],
        details: {
        age: 27,
        city: "Hyderabad",
        isActive: false
        },
        scores: [78, 82, 88]
    },
    {
        id: 3,
        name: "Rahul",
        skills: ["React", "JavaScript", "Git"],
        details: {
        age: 22,
        city: "Bengaluru",
        isActive: true
        },
        scores: [95, 89, 94]
    }
    ];
    console.log(myArray)
    console.log(myArray[2].scores[2])
    console.log(myArray[1].details.isActive)
    console.log(myArray[0].skills[2])

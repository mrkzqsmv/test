//Task 2
//Part 1
const employeeDetails = {
    fullName: 'Markaz Gasimov',
    position: 'Flutter Developer',
    yearsOfExperience: 0.5,
    skills: ['Flutter', 'Dart', 'Firebase'],
    contact: {
        email: 'mrkzqsmv@gmail.com',
        phone: '+994 50 357 53 44',
    }
};

employeeDetails.department = 'Mobile Development';

console.log(employeeDetails);

//Part 2
const {
    fullName: employeeName,
    position,
    contact,
    ...rest
} = employeeDetails;

console.log(employeeName, position, contact);
console.log(employeeName);
console.log(position);
console.log(contact);
console.log(rest);

//Part 3

const projectScores = [{
        projectId: 1,
        score: 79,
    },
    {
        projectId: 2,
        score: 90,
    },
];

console.log('Project Id for the first project ' + projectScores[0].projectId);
console.log('Project Score for the first project ' + projectScores[0].score);


//Part 4
const personalInfo = {
    homeAddress: 'Baku, Azerbaijan',
    emergencyContact: {
        name: 'Markaz',
        phone: '+994 50 357 53 44',
    },
    marritalStatus: 'Single',
};

const completeEmployeeProfile = {
    ...employeeDetails,
    ...personalInfo,
};

console.log(completeEmployeeProfile);
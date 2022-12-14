const notes = [
    {
        course: "Educación física",
        note : 10,
        credit: 2,
    },
    {
        course: "Programación",
        note : 8,
        credit: 5,
    },
    {
        course: "Finanzas Personales",
        note : 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(
    function (noteObject){
        return noteObject.note * noteObject.credit;
    }
);

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function(sum = 0, newVal){
        return sum + newVal;
    }
);

const credits = notes.map(
    function (noteObject){
        return noteObject.credit;
    }
);

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);

const promedioPonderado = sumOfNotesWithCredit / sumOfCredits;


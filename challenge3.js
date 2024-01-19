students_data = [
    {
        "name": "John Doe",
        "grades": [
            {"subject": "Math", "grade": 90},
            {"subject": "English", "grade": 85},
            {"subject": "Science", "grade": 92},
            {"subject": "History", "grade": 88},
            {"subject": "Art", "grade": 95}
        ]
    },
    {
        "name": "Jane Smith",
        "grades": [
            {"subject": "Math", "grade": 88},
            {"subject": "English", "grade": 92},
            {"subject": "Science", "grade": 87},
            {"subject": "History", "grade": 90},
            {"subject": "Art", "grade": 93}
        ]
    },
    {
        "name": "Bob Johnson",
        "grades": [
            {"subject": "Math", "grade": 78},
            {"subject": "English", "grade": 85},
            {"subject": "Science", "grade": 80},
            {"subject": "History", "grade": 88},
            {"subject": "Art", "grade": 82}
        ]
    }
]
function calculateGradesMetrics(studentsData) {
    // Function to calculate the mean (average) of an array of numbers
    const calculateMean = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

    // Calculate the average grade for each student
    const studentAverages = studentsData.map(student => {
        const grades = student.grades.map(gradeObj => gradeObj.grade);
        const average = calculateMean(grades);
        return { name: student.name, average };
    });

    // Calculate the average grade for each subject across all students
    const subjectAverages = {};
    studentsData.forEach(student => {
        student.grades.forEach(gradeObj => {
            const { subject, grade } = gradeObj;
            if (!subjectAverages[subject]) {
                subjectAverages[subject] = { sum: 0, count: 0 };
            }
            subjectAverages[subject].sum += grade;
            subjectAverages[subject].count += 1;
        });
    });

    for (const subject in subjectAverages) {
        const { sum, count } = subjectAverages[subject];
        subjectAverages[subject] = sum / count;
    }

    // Calculate the overall average grade across all students
    const allGrades = [].concat(...studentsData.map(student => student.grades.map(gradeObj => gradeObj.grade)));
    const overallAverage = calculateMean(allGrades);

    // Calculate the standard deviation of grades across all students
    const calculateStandardDeviation = (arr, mean) => {
        const squaredDifferences = arr.map(value => Math.pow(value - mean, 2));
        const variance = calculateMean(squaredDifferences);
        return Math.sqrt(variance);
    };

    const standardDeviation = calculateStandardDeviation(allGrades, overallAverage);

    return {
        studentAverages,
        subjectAverages,
        overallAverage,
        standardDeviation
    };
}

// Example usage with the provided students_data
const result = calculateGradesMetrics(students_data);
console.log(result);
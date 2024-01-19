# Layer0x_challenge3
Calculate Average and Deviation of JSON Objects with Subjects
Calculate Average and Deviation of JSON Objects with Subjects

You are given an array of JSON objects, where each object represents a student's grades in different subjects. Each JSON object has the following format

```json
{
  "name": "John Doe",
  "grades": [
    {"subject": "Math", "grade": 90},
    {"subject": "English", "grade": 85},
    {"subject": "Science", "grade": 92},
    {"subject": "History", "grade": 88},
    {"subject": "Art", "grade": 95}
  ]
}
```

The "grades" field is an array of objects, each containing a "subject" (string) and a "grade" (integer) representing the student's grade in that subject. Write a Python function that takes an array of such JSON objects as input and returns the following:

1. The average grade for each student.
2. The average grade for each subject across all students.
3. The overall average grade across all students.
4. The standard deviation of grades across all students.

**Input:**

- The input is an array of JSON objects, where each object has a "name" field (string) and a "grades" field (list of objects with "subject" and "grade" fields).

**Output:**

- The output is a dictionary with the following keys:
    - "average_grades": a list of floats representing the average grade for each student.
    - "average_subjects": a list of floats representing the average grade for each subject across all students.
    - "overall_average": a float representing the overall average grade across all students.
    - "std_deviation": a float representing the standard deviation of grades across all students.

**Example:**

```json
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
```

**Expected Output:**

```json
{
  "average_grades": [90.0, 90.0, 82.6],
  "average_subjects": [85.33333333333333, 87.33333333333333, 82.66666666666667, 88.66666666666667, 90.0],
  "overall_average": 87.53333333333333,
  "std_deviation": 4.585847077998597
}

```

This output represents the average grades for each student, the average grade for each subject across all students, the overall average grade, and the standard deviation of grades across all students.

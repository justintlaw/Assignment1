let submit = document.getElementById("formResponse")

// compute the grade with the given weights
const computeGrade = () => {
    // weights for each portion
    const assignmentsWeight = 0.5
    const groupProjectWeight = 0.1
    const quizzesWeight = 0.1
    const examsWeight = 0.2
    const intexWeight = 0.1

    // attempt to calculate grade
    try {
        let assignments = parseFloat(document.getElementById("assignments").value) * assignmentsWeight
        let groupProject = parseFloat(document.getElementById("groupProject").value) * groupProjectWeight
        let quizzes = parseFloat(document.getElementById("quizzes").value) * quizzesWeight
        let exams = parseFloat(document.getElementById("exams").value) * examsWeight
        let intex = parseFloat(document.getElementById("intex").value) * intexWeight

        // add weights to create final grade
        const finalGrade = Math.round(((assignments + groupProject + quizzes + exams + intex) * 100)) /100

        if (isNaN(finalGrade)) {
            throw "One or more inputs is not a valid number."
        }

        // add letter to grade
        let output = finalGrade.toString() + "%"

        if (finalGrade < 64) {
            output += " (D-)"
        }
        else if (finalGrade < 67) {
            output += " (D)"
        }
        else if (finalGrade < 70) {
            output += " (D+)"
        }
        else if (finalGrade < 74) {
            output += " (C-)"
        }
        else if (finalGrade < 77) {
            output += " (C)"
        }
        else if (finalGrade < 80) {
            output += " (C+)"
        }
        else if (finalGrade < 84) {
            output += " (B-)"
        }
        else if (finalGrade < 87) {
            output += " (B)"
        }
        else if (finalGrade < 90) {
            output += " (B+)"
        }
        else if (finalGrade < 94) {
            output += " (A-)"
        }
        else {
            output += " (A)"
        }

        // output final grade with letter
        document.getElementById("finalGrade").innerHTML = output
    }
    // alert if calculation fails
    catch (err) {
        alert(`Grading failed!\nError message: ${err}`)
    }
}

// add an event listener
submit.addEventListener("click", computeGrade)
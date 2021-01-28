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
        let assignments = parseFloat($("#assignments").val()) * assignmentsWeight
        let groupProject = parseFloat($("#groupProject").val()) * groupProjectWeight
        let quizzes = parseFloat($("#quizzes").val()) * quizzesWeight
        let exams = parseFloat($("#exams").val()) * examsWeight
        let intex = parseFloat($("#intex").val()) * intexWeight

        // add weights to create final grade
        const finalGrade = Math.round(((assignments + groupProject + quizzes + exams + intex) * 100)) /100

        if (isNaN(finalGrade)) {
            throw "One or more inputs is not a valid number."
        }

        // only calculate if number is beetween 0 and 100
        if ($("#assignments").val() > 100 || $("#assignments").val() < 0) {
            throw "Must be a valid number between 0 and 100."
        }

        if ($("#groupProject").val() > 100 || $("#groupProject").val() < 0) {
            throw "Must be a valid number between 0 and 100."
        }

        if ($("#quizzes").val() > 100 || $("#quizzes").val() < 0) {
            throw "Must be a valid number between 0 and 100."
        }

        if ($("#exams").val() > 100 || $("#exams").val() < 0) {
            throw "Must be a valid number between 0 and 100."
        }

        if ($("#intex").val() > 100 || $("#intex").val() < 0) {
            throw "Must be a valid number between 0 and 100."
        }

        // add letter to grade
        let output = finalGrade.toString() + "%"

        if (finalGrade < 60) {
            output += " (E)"
        }
        else if (finalGrade < 64) {
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

        // save last calculated grade in session storage
        sessionStorage.setItem("finalGrade", output)

        // output final grade with letter
        $("#finalGrade").html(output)

        alert("Final Grade: " + output)
    }
    // alert if calculation fails
    catch (err) {
        alert(`Grading failed!\nError message: ${err}`)
    }
}

// add an event listener
$("#formResponse").click(computeGrade)

// grab grade from session storage and assign it to final grade
$(document).ready(() => {
    if (sessionStorage.getItem("finalGrade")) {
        $("#finalGrade").html(sessionStorage.getItem("finalGrade"))
    }
})
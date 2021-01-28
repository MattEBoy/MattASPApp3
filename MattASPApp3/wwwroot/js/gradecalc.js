$("#submit").click( function () {
    var gradeCalc = 0;


    var asg = $("Assignments").value
    var proj = $("Projects").value
    var quiz = $("Quizzes").value
    var exam = $("Exams").value
    var intex = $("INTEX").value
    //Projects
    gradeCalc = parseInt(asg)*0.5 + parseInt(proj)*0.1 + parseInt(quiz)*0.1 + parseInt(exam)*0.2 + parseInt(intex)*0.1;


    $("expected_grade").innerHTML = "Expected Grade: " + gradeCalc + "%";
    alert(gradeCalc)
    alert(asg)
});
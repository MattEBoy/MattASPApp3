$("#submit").click(function () {
    var gradeCalc = 0;


    var asg = $("#Assignments").val()
    var proj = $("#Projects").val()
    var quiz = $("#Quizzes").val()
    var exam = $("#Exams").val()
    var intex = $("#INTEX").val()
    //Projects
    gradeCalc = parseInt(asg)*0.5 + parseInt(proj)*0.1 + parseInt(quiz)*0.1 + parseInt(exam)*0.2 + parseInt(intex)*0.1;


    $("expected_grade").innerHTML = "Expected Grade: " + gradeCalc + "%";
    alert(gradeCalc)
});
function calculateCurrentGrade(){

//average for homework
    var homeworkGrade = document.getElementById("homework").value;
    var homeworkWeight =  parseInt(document.getElementById("homeworkWeight").value);
    var hwArray = convertArrayStringToNumber(homeworkGrade);
    var hwAverage = averageArray(hwArray);
    // console.log(hwAverage);
    var hwWeightGrade = (hwAverage * homeworkWeight)/ 100;
    // console.log(hwWeightGrade);
    if(hwWeightGrade < 80){
        document.getElementById("homework").innerHTML = ""

    }


//string for homework gets taken and turned into numbers, returns average.
    var classWorkGrade = document.getElementById("classwork").value;
    var classworkWeight = parseInt(document.getElementById("classworkWeight").value);
    var classworkArr = convertArrayStringToNumber(classWorkGrade);
    var classworkAverage = averageArray(classworkArr);
    // console.log(classworkAverage);
    var classworkWeightGrade = (classworkAverage * classworkWeight)/ 100;
    // console.log(classworkWeightGrade);

// takes the string given for participation, turns them into numbers, and returns the average of numbers input.
    var participationGrade = document.getElementById("participation").value;
    var participationWeight = parseInt(document.getElementById("participationWeight").value);
    var participationArr = convertArrayStringToNumber(participationGrade);
    var participationAverage = averageArray(participationArr);
    var participationWeightGrade = (participationAverage * participationWeight) /100;
    // console.log(participationWeightGrade);


//averages grades for tests, quizzes.
    var assessmentGrade = document.getElementById("assessment").value;
    var assessmentWeight = parseInt(document.getElementById("assessmentWeight").value);
    var assessmentArray = convertArrayStringToNumber(assessmentGrade);
    var assessmentAverage = averageArray(assessmentArray);
    // console.log(assessmentAverage);
    var assessmentWeightGrade = (assessmentAverage * assessmentWeight)/ 100;
    // console.log(assessmentWeightGrade);


    var finalGrade = (hwWeightGrade + classworkWeightGrade + participationWeightGrade + assessmentWeightGrade);
    console.log(hwWeightGrade + classworkWeightGrade + participationWeightGrade + assessmentWeightGrade);
    document.getElementById("percentage").innerHTML = homeworkWeight + classworkWeight + participationWeight + assessmentWeight + "%";
    document.getElementById("finalGrade").innerHTML = finalGrade + "%";
    var grade = Math.round(finalGrade);
    return grade;
}

function calculateGradeNeeded() {
    var gradeDesired = document.getElementById("gradeDesired").value;
    var gradeWeight = document.getElementById("finalWeight").value;

    var gradeNeeded = gradeDesired-(1-(gradeWeight/100))* calculateCurrentGrade();
    // console.log(gradeNeeded);

    var finalGrade = 100 * (gradeNeeded/gradeWeight);
    var grade = Math.round(finalGrade);
    console.log(finalGrade);
    document.getElementById("finalGradeNeeded").innerHTML = grade + "%" + " is needed to receive a " + gradeDesired;
    // document.getElementById("myButton").style.display = "none";
    return grade;
}

function convertArrayStringToNumber(strings){
    var arr = strings.split(",");
    for(var i = 0; i< arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function averageArray(arr){
    var average = 0;
    for(var i = 0; i < arr.length; i++){
        average += (arr[i]);
    }
    // average = average / arr.length;
    return average/arr.length;
        // / arr.length;
}

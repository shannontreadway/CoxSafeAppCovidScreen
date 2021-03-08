window.addEventListener("load", function(){
    let form = document.querySelector('form')
    let covidPositive = document.getElementById('covidPositive');
    let symptomCheck = document.getElementById('symptomCheck');
    let iAttest = document.getElementById('iAttest');
    let submit = document.getElementById('submitButton');
    let iPass = document.getElementById("iPass");
    let iFail = document.getElementById("iFail");

    submit.addEventListener("click", function() {
        function submitAssessment() {
            alert("This is a test");
            event.preventDefault();
            console.log("this works");
            console.log(covidPositive.value);
            console.log(symptomCheck.value);
            console.log(iAttest.value);
            
            if (covidPositive.value === 0 || symptomCheck.value === 0){
                alert("All fields are required.");
                return;
            };
            
            if (covidPositive.value === 2 || symptomCheck.value === 2){
                iFail.style.visibility = 'visible';
                submit.setAttribute("href", "fail.html");
                //console.log(submit.href);
                return;
            };
        
            if (covidPositive.value === 1 && symptomCheck.value === 1){
                submit.href="pass.html";
                return;
            };

            console.log(submit.href);
        };
        submitAssessment();
    });
});

window.addEventListener("load", function(){
    let form = document.querySelector('form')
    let covidPositive = document.getElementById('covidPositive');
    let symptomCheck = document.getElementById('symptomCheck');
    let iAttest = document.getElementById('iAttest');
    let varContinue = document.getElementById('continue');
    // let iPass = document.getElementById("iPass");
    // let iFail = document.getElementById("iFail");
    

    varContinue.addEventListener("click", function() {
        let myLink = "";
        function submitAssessment() {
            //event.preventDefault();
            console.log(covidPositive.value);
            console.log(symptomCheck.value);
            
            if (covidPositive.value === 0 || symptomCheck.value === 0){
                alert("All fields are required.");
                return;
            };
            
            if (covidPositive.value === 2 || symptomCheck.value === 2){
                //iFail.style.visibility = 'visible';
                myLink = "fail.html";
                return myLink;
            };
        
            if (covidPositive.value === 1 && symptomCheck.value === 1){
                myLink = "pass.html";
                return myLink;
            };

        };
        console.log(submitAssessment());
        //window.location.href = myLink;
    });
});

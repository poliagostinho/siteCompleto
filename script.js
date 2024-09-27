function disableOptions(questionName){
    let options = document.getElementsByName (questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    });
}
function playSound(){
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
function submitQuiz(){
 
    let correctAnswers = {
        q1: 'D',
        q2: 'B',
        q3: 'B',
        q4: 'B',
        q5: 'A',
        q6: 'B',
        q7: 'B',
        q8: 'C',
        q9: 'B',
        q10: 'B'
    };
 
    let form = document.getElementById('quiz-form');
    let score = 0;
 
    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value;
        if(userAnswer === correctAnswers[key]){
            score++;
        }
    }
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 7 perguntas.`
 
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);
 
    if(score === 7){
        let sucessSound = document.getElementById("venceusom");
        sucessSound.play();
    }else{
        let failSound = document.getElementById("perdeusom");
        failSound.play();
    }
    document.getElementById('enviar').disabled=true;
    document.getElementById('recomeco').disabled=false;
}
function recomecar(){
    let form = document.getElementById('quiz-form');
    form.reset();
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
    score = 0;
    result.innerHTML = "";
    document.getElementById('enviar').disabled=false;
    document.getElementById('recomeco').disabled=true;
};
 
function responderNovamente(){
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = " ";
    document.getElementById('quiz-form').reset();
    let options=document.querySelectorAll('input[type="radio"]');
   options.forEach(option => option.disabled=false);
}
















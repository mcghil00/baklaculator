var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = q.text;  
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
};


function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score +=10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions -1){
		loadNextQuestion.textContent = 'Calculate';
	}
	
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		
	
		 if (score==0){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('DI KA NABABAGAY SA LARONG ITO!')
		}
				else if (score==10){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('ISA KANG LALAKI!!')
			
		}
			else if (score==20){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('ISA KANG SILAHIS')
			
		}
		else if (score==30){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('IM CONFUSED')
			
		}
		else if (score==40){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('KALOKA!!')
			
		}
		else if (score==50){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('PALOMA!! IS THAT YOU?')
			
		}else if (score==60){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('LuyaT sibuyas isa kang PAMINTA!!')
			
		}else if (score==70){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('ALAM NA THIS!!')
			
		}else if (score==80){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('PAK PAK KA BHES!')
			
		}
		else if (score==90){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('WELCOME SA FEDERASYON!!')
			
		}
		else if (score==100){
			
			resultCont.textContent = 'You got: ' + score+'%';
			alert('ISA KANG hoka-GAY!!!')
			
		}
					
			
		return;
		
	}
	  
	
	loadQuestion(currentQuestion);
	
}

loadQuestion(currentQuestion);
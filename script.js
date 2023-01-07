const quizData = [
  {
    question: 'What is 1 + 1?',
    a: '11',
    b: 'window',
    c: '2',
    correct: 'c'
  },
  {
    question: 'What is the best programming language?',
    a: 'Typescript',
    b: 'C++',
    c: 'Java',
    correct: 'a'
  }
];

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');


var currentQuiz = 0;

function loadQuiz() {
const currentQuizData = quizData[currentQuiz];
  
questionEl.innerText = currentQuizData.question;
  
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c; 

  currentQuestion++;
}

loadQuiz();







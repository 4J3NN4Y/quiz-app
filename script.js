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

const a_label = document.getElementById('a_label');
const b_label = document.getElementById('b_label');
const c_label = document.getElementById('c_label');


let currentQuiz = 0;

let randomID = Math.floor(Math.random() * 2);

function loadQuiz() {
const currentQuizData = quizData[randomID];
  
questionEl.innerText = currentQuizData.question;
  
  a_label.innerHTML = currentQuizData.a;
  b_label.innerHTML = currentQuizData.b;
  c_label.innerHTML = currentQuizData.c; 

  currentQuiz++;
}

loadQuiz();







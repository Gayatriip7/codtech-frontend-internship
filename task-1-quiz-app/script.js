const questions = [
  { q: "HTML stands for?", a: ["Hyper Text Markup Language", "High Text"], correct: 0 },
  { q: "CSS is used for?", a: ["Styling", "Logic"], correct: 0 }
];

let index = 0, score = 0;

function loadQuestion() {
  const q = questions[index];
  document.getElementById("quiz").innerHTML = `
    <p>${q.q}</p>
    ${q.a.map((opt,i)=>`<button onclick="check(${i})">${opt}</button>`).join("")}
  `;
}

function check(i){
  if(i === questions[index].correct) score++;
  document.getElementById("score").innerText = "Score: " + score;
}

function nextQuestion(){
  index++;
  if(index < questions.length) loadQuestion();
  else alert("Quiz Finished. Score: "+score);
}

loadQuestion();

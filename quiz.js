function checkAnswers() {
    const answers = {
      q1: 'a',
      q2: 'a',
      q3: 'b',
      q4: 'a',
      q5: 'b',
      q6: 'b',
      q7: 'a',
      q8: 'b',
      q9: 'a',
      q10: 'a',
      q11: 'b',
      q12: 'b',
      
    };

    let score = 0;
    let total = Object.keys(answers).length;

    for (let key in answers) {
      const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
      if (userAnswer && userAnswer.value === answers[key]) {
        score++;
      }
    }

    document.getElementById('result').innerText = `You scored ${score} out of ${total}`;
  }
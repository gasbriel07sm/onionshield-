document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Respostas corretas
    const correctAnswers = {
      q1: 'c',
      q2: 'b',
      q3: 'c',
      q4: 'b',
      q5: 'c',
      q6: 'c',
      q7: 'b',
      q8: 'b',
      q9: 'c',
      q10: 'a',
      q11: 'b',
      q12: 'c',
      q13: 'b',
      q14: 'c',
      q15: 'c',

      // Continue para as 15 perguntas
    };
  
    let score = 0;
  
    // Verifica as respostas
    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
      const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
      if (userAnswer && userAnswer.value === correctAnswer) {
        score++;
      }
    }
  
    // Exibe o resultado
    let result = '';
    if (score < 5) {
      result = 'Iniciante';
    } else if (score >= 5 && score < 10) {
      result = 'Intermediário';
    } else if (score >= 10 && score < 15) {
      result = 'Avançado';
    } else if (score === 15) {
      result = 'Arrasou!';
    }
  
    alert(`Você acertou ${score} perguntas. Resultado: ${result}`);
  });
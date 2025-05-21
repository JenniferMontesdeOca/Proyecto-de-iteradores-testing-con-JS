document.getElementById('process-btn').addEventListener('click', () => {
  const inputText = document.getElementById('input-story').value;

  if (!inputText.trim()) {
    alert('Por favor escribe una historia antes de corregir.');
    return;
  }

  let storyWords = inputText.split(' ');
  let unnecessaryWord = 'literally';
  let misspelledWord = 'beautifull';
  let badWord = 'freaking';

  // Contar palabras
  let count = 0;
  storyWords.forEach(() => count++);

  // Eliminar palabras innecesarias
  storyWords = storyWords.filter(word => word !== unnecessaryWord);

  // Corregir errores ortográficos
  storyWords = storyWords.map(word =>
    word === misspelledWord ? 'beautiful' : word
  );

  // Reemplazar palabra inapropiada
  let badWordIndex = storyWords.findIndex(word => word === badWord);
  if (badWordIndex !== -1) {
    storyWords[badWordIndex] = 'really';
  }

  // Validar longitud de palabras
  let lengthCheck = storyWords.every(word => word.length <= 10);

  // Mostrar resultados
  const finalStory = storyWords.join(' ');
  document.getElementById('edited-story').textContent = finalStory;
  document.getElementById('word-count').textContent = count;
  document.getElementById('length-check').textContent = lengthCheck ? 'Sí ✅' : 'No ❌';

  document.getElementById('result').style.display = 'block';
});

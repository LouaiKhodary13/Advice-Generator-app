'use strict';

const adviceBtn = document.querySelector('.advice-dice-button');
const adviceId = document.querySelector('.advice-heading__id');
const adviceText = document.querySelector('.advice-text');

async function getAdvice() {
  const AdviceApi = 'https://api.adviceslip.com/advice';
  try {
    const response = await fetch(AdviceApi);
    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }
    const result = await response.json();
    const { id, advice } = result.slip;
    adviceId.textContent = id;
    adviceText.textContent = `${' " '}${advice}${' " '}`;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
}

adviceBtn.addEventListener('click', getAdvice);

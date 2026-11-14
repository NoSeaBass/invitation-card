const card = document.querySelector('.card')
const hint = document.querySelector('.hint')

card.addEventListener('click', () => {
  const flipped = card.classList.toggle('is-flipped')
  card.setAttribute('aria-pressed', String(flipped))
  hint.textContent = flipped
    ? 'Cliquez sur la carte pour revoir le recto'
    : 'Cliquez sur la carte pour voir le verso'
})

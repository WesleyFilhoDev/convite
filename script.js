// ALTERE A DATA AQUI (ANO, MÊS -1, DIA, HORA, MINUTO)
const eventDate = new Date(2025, 11, 27, 19, 0, 0).getTime();
// Exemplo: Janeiro = 0 | Fevereiro = 1

const timerEl = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    timerEl.innerHTML = "🎉 É HOJE! Bora comemorar! 🍻";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

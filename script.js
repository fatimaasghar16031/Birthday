// Countdown Timer
const targetDate = new Date("2025-05-30T00:00:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "🎉 It's Kashaf's Birthday! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s until the celebration!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Confetti Effect
const canvas = document.querySelector('.confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  d: Math.random() * 5 + 1,
  color: `hsl(${Math.random() * 50 + 40}, 100%, 50%)`
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  moveConfetti();
}

function moveConfetti() {
  confetti.forEach(c => {
    c.y += c.d;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
      const template = button.closest('.template');
      template.style.display = 'none';
  });
});

setInterval(drawConfetti, 33);

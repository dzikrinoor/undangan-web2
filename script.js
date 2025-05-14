// script.js
AOS.init();

// Countdown Timer
const countdown = () => {
  const countDate = new Date("Jul 20, 2025 08:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("countdown").innerHTML = `<p>Hitung Mundur: ${d} Hari ${h} Jam ${m} Menit ${s} Detik</p>`;
};
setInterval(countdown, 1000);

// RSVP WhatsApp Redirect
const rsvpForm = document.getElementById("rsvp-form");
rsvpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const waMessage = `Halo Rina & Dimas, saya *${name}* menyatakan akan *${status}* di acara pernikahan.`;
  const encodedMessage = encodeURIComponent(waMessage);
  const phone = "6281234567890"; // Ganti dengan nomor WA tujuan
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
});

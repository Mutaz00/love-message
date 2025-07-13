function yesLove() {
  alert("أنا بعد أحبك واهواك ي بعد الدنيا كلها انتيمو انسانه عاديه انتي غير عن لكل انتي الي ميزتيني عن الباقين انتي سبب تحملي ووجودي بذي الحياة رغم المشاكل الي تصير بيننا الا اني ما اتخيل حياتي بدونك وانا بدونك مابقدر اواجه كل شيء صعب جالسه تشوفيه بحياتي وفيه الي تعرفيه والي ماتعرفيه لاكن فعلا مر باشياء لولاك ماقدرت اتحملها فا مرهاحبك يقلب قلبي ويانفسي ❤️❤️❤️");
}

function moveNo() {
  const noBtn = document.getElementById("no");
  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 300) - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
window.addEventListener("load", () => {
  const canvas = document.getElementById("heartCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const hearts = [];
  const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Heart {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 8 + 4;
      this.speedY = Math.random() * 1 + 0.5;
      this.speedX = (Math.random() - 0.5) * 1;
      this.opacity = 1;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + (mouse.x - canvas.width / 2) * 0.0005;
      this.opacity -= 0.005;
    }

    draw() {
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = "rgba(255, 105, 180)";
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size,
                        this.x + this.size * 1.5, this.y + this.size / 2,
                        this.x, this.y + this.size * 1.5);
      ctx.bezierCurveTo(this.x - this.size * 1.5, this.y + this.size / 2,
                        this.x - this.size / 2, this.y - this.size,
                        this.x, this.y);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function addHeart() {
    hearts.push(new Heart(Math.random() * canvas.width, -10));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    addHeart();
    hearts.forEach((heart, index) => {
      heart.update();
      heart.draw();
      if (heart.opacity <= 0) {
        hearts.splice(index, 1);
      }
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  animate();
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 20 + 10;
    this.speedY = Math.random() * 1 + 0.5;
    this.speedX = (Math.random() - 0.5) * 1;
    this.opacity = 1;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX + (mouse.x - canvas.width / 2) * 0.0005;
    this.opacity -= 0.005;
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = "rgba(255, 105, 180)";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size,
                      this.x + this.size * 1.5, this.y + this.size / 2,
                      this.x, this.y + this.size * 1.5);
    ctx.bezierCurveTo(this.x - this.size * 1.5, this.y + this.size / 2,
                      this.x - this.size / 2, this.y - this.size,
                      this.x, this.y);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function addHeart() {
  hearts.push(new Heart(Math.random() * canvas.width, -10));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  addHeart();
  hearts.forEach((heart, index) => {
    heart.update();
    heart.draw();
    if (heart.opacity <= 0) {
      hearts.splice(index, 1);
    }
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();

const hour = new Date().getHours();
if (hour >= 6 && hour < 18) {
  document.body.classList.add("day");
} else {
  document.body.classList.add("night");
}

const messages = [
  "أحبك اليوم أكثر من أمس 💗",
  "إنتي سبب ابتسامتي ♥️",
  "كل سطر كتبته... كتبته بحبك",
  "قلبي ما يعرف إلا إنتِ 💖",
];
let i = 0;
setInterval(() => {
  document.getElementById("loveWords").textContent = messages[i];
  i = (i + 1) % messages.length;
}, 3000);

document.addEventListener("click", (e) => {
  const emoji = document.createElement("div");
  emoji.textContent = "💗";
  emoji.style.position = "absolute";
  emoji.style.left = e.pageX + "px";
  emoji.style.top = e.pageY + "px";
  emoji.style.fontSize = "24px";
  emoji.style.opacity = "1";
  emoji.style.transition = "all 1s ease";
  document.body.appendChild(emoji);
  setTimeout(() => {
    emoji.style.top = e.pageY - 100 + "px";
    emoji.style.opacity = "0";
  }, 10);
  setTimeout(() => emoji.remove(), 1000);
});



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const player = {
	x: canvas.width/2,
	y: canvas.height - 50,
	width: 50,
	height: 50,
	speed: 5,
	color: "blue"
};

const enemies = [
	{
		x: 100,
		y: 50,
		width: 40,
		height: 40,
		speed: 2,
		color: "red"
	},
	{
		x: 300,
		y: 100,
		width: 30,
		height: 30,
		speed: 3,
		color: "red"
	},
	{
		x: 500,
		y: 150,
		width: 20,
		height: 20,
		speed: 4,
		color: "red"
	}
];

const bullets = [];
const bulletSpeed = 10;

function drawPlayer() {
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawEnemies() {
	enemies.forEach(function(enemy) {
		ctx.fillStyle = enemy.color;
		ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
	});
}

function movePlayer() {
	if (keys[37] && player.x > 0) { 
		player.x -= player.speed;
	}
	if (keys[39] && player.x < canvas.width - player.width) { 
		player.x += player.speed;
	}
	if (keys[32]) { 
		shoot();
	}
}

function moveEnemies() {
	enemies.forEach(function(enemy) {
		enemy.y += enemy.speed;
		if (enemy.y > canvas.height) {
			enemy.y = -enemy.height;
			enemy.x = Math.random() * (canvas.width - enemy.width);
		}
	});
}

function drawBullets() {
	bullets.forEach(function(bullet) {
		ctx.fillStyle = "yellow";
		ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
	});
}

function moveBullets() {
	bullets.forEach(function(bullet) {
		bullet.y -= bulletSpeed;
	});
	bullets = bullets.filter(function(bullet) {
		return bullet.y > 0;
	});
}

window.onload = function() {
    var navLinks = document.getElementsByTagName("a");
    navLinks[0].textContent = "Homepage";
}

const currentSongElement = document.getElementById('current-song');
const audioElement = document.querySelector('audio');

audioElement.addEventListener('playing', () => {
  currentSongElement.textContent = `Now playing: ${audioElement.src}`;
});

audioElement.addEventListener('pause', () => {
  currentSongElement.textContent = '';
});

  const stars = document.querySelectorAll(".star");
  stars.forEach(function(star) {
    star.addEventListener("click", setRating);
  });
  
  const rating = parseInt(localStorage.getItem("rating"));
  if (rating) {
    highlightStars(rating - 1);
  }
  
  function setRating(ev) {
    const star = ev.currentTarget;
    const rating = parseInt(star.dataset.value);
    
    localStorage.setItem("rating", rating);
    highlightStars(rating - 1);
  }
  
  function highlightStars(index) {
    const stars = document.querySelectorAll(".star");
    stars.forEach(function(star, i) {
      if (i <= index) {
        star.classList.add("filled");
      } else {
        star.classList.remove("filled");
      }
    });
  }



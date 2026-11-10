// ============================================
// KIMMO'S BIRTHDAY WEBSITE ❤️
// Complete JavaScript
// ============================================


// ============================================
// 1. BACKGROUND STARS
// ============================================

const starsContainer = document.getElementById("stars");
const particlesContainer = document.getElementById("particles");

// Create stars
for (let i = 0; i < 100; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);
}


// ============================================
// 2. FLOATING HEARTS AND PARTICLES
// ============================================

const hearts = ["♡", "♥", "✧", "✦"];

for (let i = 0; i < 18; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    particle.style.left = Math.random() * 100 + "%";

    particle.style.fontSize = (10 + Math.random() * 15) + "px";

    particle.style.animationDuration =
        (8 + Math.random() * 12) + "s";

    particle.style.animationDelay = Math.random() * 10 + "s";

    particlesContainer.appendChild(particle);
}


// ============================================
// 3. ELEMENT REFERENCES
// ============================================

const surpriseBtn = document.getElementById("surpriseBtn");

const welcomeScreen = document.getElementById("welcomeScreen");

const celebrationScreen =
    document.getElementById("celebrationScreen");

const continueBtn = document.getElementById("continueBtn");

const storyScreen = document.getElementById("storyScreen");

const letterBtn = document.getElementById("letterBtn");

const letterScreen = document.getElementById("letterScreen");

const envelope = document.getElementById("envelope");

const envelopeHint = document.getElementById("envelopeHint");

const finalBtn = document.getElementById("finalBtn");

const finalScreen = document.getElementById("finalScreen");

const giftBox = document.getElementById("giftBox");

const giftHint = document.getElementById("giftHint");

const finalMessage = document.getElementById("finalMessage");


// ============================================
// 4. CONFETTI ANIMATION
// ============================================

function startConfetti(target = null) {

    const container = target ||
        document.getElementById("confetti-container");

    if (!container) return;

    const colors = [
        "#ffb6d9",
        "#d9a7ff",
        "#ffe6a7",
        "#ffffff",
        "#ff85bd",
        "#c8a2ff"
    ];

    let count = 0;

    const interval = setInterval(() => {

        for (let i = 0; i < 5; i++) {

            const piece = document.createElement("div");

            piece.classList.add("confetti");

            piece.style.left = Math.random() * 100 + "%";

            piece.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];

            piece.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            piece.style.animationDelay =
                Math.random() * 0.5 + "s";

            piece.style.pointerEvents = "none";

            container.appendChild(piece);

            setTimeout(() => {
                piece.remove();
            }, 8000);

        }

        count++;

        if (count >= 12) {
            clearInterval(interval);
        }

    }, 300);

}


// ============================================
// 5. WELCOME SCREEN TO BIRTHDAY SCREEN
// ============================================

surpriseBtn.addEventListener("click", () => {

    welcomeScreen.style.transition =
        "opacity 1s ease, transform 1s ease";

    welcomeScreen.style.opacity = "0";

    welcomeScreen.style.transform = "scale(1.08)";

    setTimeout(() => {

        welcomeScreen.style.display = "none";

        celebrationScreen.classList.add("active");

        startConfetti();

    }, 1000);

});


// ============================================
// 6. BIRTHDAY SCREEN TO OUR STORY
// ============================================

continueBtn.addEventListener("click", () => {

    celebrationScreen.style.transition = "opacity 1s ease";

    celebrationScreen.style.opacity = "0";

    setTimeout(() => {

        celebrationScreen.classList.remove("active");

        celebrationScreen.style.display = "none";

        celebrationScreen.style.opacity = "1";

        storyScreen.classList.add("active");

        storyScreen.scrollTop = 0;

    }, 1000);

});


// ============================================
// 7. OUR STORY TO LOVE LETTER
// ============================================

letterBtn.addEventListener("click", () => {

    storyScreen.style.transition = "opacity 1s ease";

    storyScreen.style.opacity = "0";

    setTimeout(() => {

        storyScreen.classList.remove("active");

        storyScreen.style.display = "none";

        storyScreen.style.opacity = "1";

        letterScreen.classList.add("active");

        letterScreen.scrollTop = 0;

    }, 1000);

});


// ============================================
// 8. OPEN THE LOVE LETTER
// ============================================

envelope.addEventListener("click", () => {

    // Prevent multiple clicks

    if (envelope.classList.contains("open")) {
        return;
    }

    // Open envelope

    envelope.classList.add("open");

    envelopeHint.textContent =
        "A LITTLE SOMETHING FROM MY HEART ❤️";

    // Reveal final surprise button

    setTimeout(() => {

        finalBtn.classList.add("show");

    }, 1800);

});


// ============================================
// 9. LOVE LETTER TO FINAL SURPRISE
// ============================================

finalBtn.addEventListener("click", () => {

    letterScreen.style.transition = "opacity 1s ease";

    letterScreen.style.opacity = "0";

    setTimeout(() => {

        letterScreen.classList.remove("active");

        letterScreen.style.display = "none";

        letterScreen.style.opacity = "1";

        finalScreen.classList.add("active");

        finalScreen.scrollTop = 0;

    }, 1000);

});


// ============================================
// 10. OPEN THE FINAL GIFT
// ============================================

giftBox.addEventListener("click", () => {

    // Prevent opening more than once

    if (giftBox.classList.contains("open")) {
        return;
    }

    // Open gift box

    giftBox.classList.add("open");

    giftHint.textContent =
        "A LITTLE HAPPINESS, JUST FOR YOU ❤️";

    // Reveal final birthday message

    setTimeout(() => {

        finalMessage.classList.add("show");

        // Confetti on the final screen

        startConfetti(finalScreen);

        // Scroll to final message on mobile

        finalMessage.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 1200);

});


// ============================================
// 11. WEBSITE INITIALIZATION
// ============================================

console.log("--------------------------------");

console.log("❤️ KIMMO'S BIRTHDAY WEBSITE");

console.log("✨ Website loaded successfully!");

console.log("🎂 Birthday celebration ready!");

console.log("💌 Love letter ready!");

console.log("🎁 Final surprise ready!");

console.log("--------------------------------");



// ============================================
// 12. BACKGROUND MUSIC SYSTEM
// ============================================

const backgroundMusic = document.getElementById("backgroundMusic");

const musicToggle = document.getElementById("musicToggle");

const musicIcon = document.getElementById("musicIcon");

const musicText = document.getElementById("musicText");

let musicPlaying = false;


// Set initial volume

backgroundMusic.volume = 0.35;


// Play music

async function playMusic() {

    try {

        await backgroundMusic.play();

        musicPlaying = true;

        musicToggle.classList.add("playing");

        musicIcon.innerHTML = "♫";

        musicText.innerHTML = "MUSIC ON";

        musicToggle.setAttribute("aria-label", "Pause background music");

    } catch (error) {

        console.log("Music playback failed:", error);

        musicPlaying = false;

        musicText.innerHTML = "TAP TO PLAY";

    }

}


// Pause music

function pauseMusic() {

    backgroundMusic.pause();

    musicPlaying = false;

    musicToggle.classList.remove("playing");

    musicIcon.innerHTML = "♫";

    musicText.innerHTML = "MUSIC OFF";

    musicToggle.setAttribute("aria-label", "Play background music");

}


// Music button

musicToggle.addEventListener("click", () => {

    if (musicPlaying) {

        pauseMusic();

    } else {

        playMusic();

    }

});


// Start music when Kimmo unlocks the surprise

surpriseBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        playMusic();

    }

});


// Update button if playback is interrupted

backgroundMusic.addEventListener("pause", () => {

    musicPlaying = false;

    musicToggle.classList.remove("playing");

    musicText.innerHTML = "MUSIC OFF";

});

backgroundMusic.addEventListener("play", () => {

    musicPlaying = true;

    musicToggle.classList.add("playing");

    musicText.innerHTML = "MUSIC ON";

});

console.log("🎵 Background music system ready!");
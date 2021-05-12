
tsParticles.load('tsparticles', obtainParticles(isDarkMode()));

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  tsParticles.load('tsparticles', obtainParticles(isDarkMode()));
});

function obtainParticles(isDarkMode) {
  return {
    "fpsLimit": 60,
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "shape": {
        "type": "image",
        "image": images(isDarkMode)
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
          "size_min": 0.5,
          "sync": false
        }
      },
      "links": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "parent",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble",
          "parallax": {
            "enable": false,
            "force": 5,
            "smooth": 2
          }
        },
        "onclick": {  
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 40,
          "size": 6,
          "duration": 10,
          "opacity": 0.8
        },
        "repulse": {
          "distance": 60
        },
        "push": {
          "particles_nb": 6
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "background": {
      "color": background(isDarkMode),
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    }
  };
}

function isDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function images(isDarkMode) {
  if(isDarkMode) {
    return [
      {
        "src": "assets/darkmode/apple.png",
        "width": 24,
        "height": 24
      },
      {
        "src": "assets/darkmode/android.png",
        "width": 24,
        "height": 24
      }
    ];
  } else {
    return [
      {
        "src": "assets/lightmode/apple.png",
        "width": 24,
        "height": 24
      },
      {
        "src": "assets/lightmode/android.png",
        "width": 24,
        "height": 24
      }
    ];
  }
}

function background(isDarkMode) {
  return isDarkMode ? "#28292c"  : "#ffffff";
}
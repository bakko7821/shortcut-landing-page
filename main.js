// =========================
// VIDEO LINKS
// =========================

const videos = [
    {
      src: 'https://www.youtube.com/embed/Y2VfshsfKes',
      title: 'Project 1'
    },
    {
      src: 'https://www.youtube.com/embed/8uh125-cA_U',
      title: 'Project 2'
    },
    {
      src: "https://www.youtube.com/embed/tH34UnUkmlc?si=ZoSvvWrT5d2TAXs5",
      title: "YouTube video player" 
    },
    {
      src: "https://www.youtube.com/embed/bBbdLSiZKjg?si=wWMiJqp4uo4wGtw9",
      title: "YouTube video player" 
    },
    {
      src: "https://www.youtube.com/embed/AKygkgBaei4?si=Z7K3KQ7MUwpYv_Qb",
      title: "YouTube video player" 
    }
];

// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .is-clickable').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('is-pointer');
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-pointer');
  });
});

// =========================
// HERO LINES ANIMATION
// =========================

const wait = ms => new Promise(r => setTimeout(r, ms));

const LINE_DURATION = 500;
const CHECKPOINT_PAUSE = 700;

async function animateLine(wrapper) {
  const progressPath = wrapper.querySelector('.progress-path');
  const markers = wrapper.querySelectorAll('.marker');
  const labels = wrapper.querySelectorAll('.label');

  if (!progressPath) return;

  const length = progressPath.getTotalLength();

  progressPath.style.strokeDasharray = length;
  progressPath.style.strokeDashoffset = length;

  const checkpoints = [0.3, 0.6, 1];
  let currentOffset = length;

  for (let i = 0; i < checkpoints.length; i++) {
    const p = checkpoints[i];
    const targetOffset = length * (1 - p);

    progressPath.animate(
      [
        { strokeDashoffset: currentOffset },
        { strokeDashoffset: targetOffset }
      ],
      {
        duration: LINE_DURATION,
        easing: 'ease-out',
        fill: 'forwards'
      }
    );

    await wait(LINE_DURATION);
    currentOffset = targetOffset;

    if (markers[i]) {
      markers[i].classList.add('active');
      labels[i].classList.add('active');

      await wait(CHECKPOINT_PAUSE);

      labels[i].classList.remove('active');
    }
  }

  triggerFlash()
}

// =========================
// CAMERA FLASH ANIMATION
// =========================

function triggerFlash() {
  const camera = document.querySelector('.cameraImage');
  const flash = document.querySelector('.flash-overlay');

  if (!camera || !flash) return;

  camera.classList.add('flash');
  flash.classList.add('active');

  setTimeout(() => {
    camera.classList.remove('flash');
    flash.classList.remove('active');
  }, 300);
}

// =========================
// TYPE MACHINE ANIMATION
// =========================

function typeMachineAnimation() {
  const svgContainers = document.querySelectorAll('.svg-container');

  svgContainers.forEach(container => {
    const svg = container.querySelector('svg');
    const paths = Array.from(container.querySelectorAll('path'));
    const svgCursor = container.querySelector('.svgCursor');

    let current;
    const isLeft = container.classList.contains('left');

    // получаем масштаб SVG → CSS
    const viewBoxWidth = svg.viewBox.baseVal.width;
    const svgRect = svg.getBoundingClientRect();
    const scaleX = svgRect.width / viewBoxWidth;

    if (isLeft) {
      current = 0;

      function showNextLeft() {
        if (current < paths.length) {
          const path = paths[current];
          path.style.opacity = 1;

          const bbox = path.getBBox();
          const x = (bbox.x + bbox.width) * scaleX;

          svgCursor.style.left = `${x}px`;

          current++;
          setTimeout(showNextLeft, 200);
        } else {
          svgCursor.style.display = 'none';
        }
      }

      showNextLeft();

    } else {
      current = paths.length - 1;

      function showNextRight() {
        if (current >= 0) {
          const path = paths[current];
          path.style.opacity = 1;

          const bbox = path.getBBox();
          const x = bbox.x * scaleX;

          svgCursor.style.left = `${x}px`;

          current--;
          setTimeout(showNextRight, 200);
        } else {
          svgCursor.style.display = 'none';
        }
      }

      showNextRight();
    }
  });
}

// =========================
// SLIDER
// =========================

const previewIframe = document.querySelector('.video-preview iframe');
const nextSlide = document.querySelector('.video-slider');
const count = document.querySelector('.slider-count');

const btnLeft = document.querySelector('button.left');
const btnRight = document.querySelector('button.right');

let currentIndex = 0;
const total = videos.length;

function getVideoId(url) {
    return url.split('/embed/')[1].split('?')[0];
}

function render(direction = 'right') {
    previewIframe.classList.add(
        direction === 'right' ? 'animate-out-left' : 'animate-out-right'
    );

    setTimeout(() => {
        previewIframe.src = videos[currentIndex].src;
        previewIframe.className = 'animate-in';
    }, 250);

    const nextIndex = (currentIndex + 1) % total;
    nextSlide.style.backgroundImage =
        `url(https://img.youtube.com/vi/${getVideoId(videos[nextIndex].src)}/hqdefault.jpg)`;

    count.textContent = `${currentIndex + 1}/${total}`;
}

btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    render('right');
});

btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    render('left');
});

// =========================
// LOAD FADE ANIMATION
// =========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});


// =========================
// LOAD CONTENT
// =========================

addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.line-wrapper')
    .forEach(w => animateLine(w));
  typeMachineAnimation()

  render();
})

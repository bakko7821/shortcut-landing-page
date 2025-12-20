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

function typeMachineAnimation() {
  const svgContainers = document.querySelectorAll('.svg-container');

  svgContainers.forEach(container => {
  const paths = Array.from(container.querySelectorAll('path'));
  const svgCursor = container.querySelector('.svgCursor');
  let current;

  // Определяем направление
  const isLeft = container.classList.contains('left');

  if (isLeft) {
      current = 0;

      function showNextLeft() {
          if(current < paths.length){
              const path = paths[current];
              path.style.opacity = 1;

              const bbox = path.getBBox();
              svgCursor.style.left = bbox.x + bbox.width + 'px';

              current++;
              setTimeout(showNextLeft, 200);
          } else {
              svgCursor.style.display = 'none';
          }
      }

      showNextLeft();

  } else { // right
      current = paths.length - 1;

      function showNextRight() {
          if(current >= 0){
              const path = paths[current];
              path.style.opacity = 1;

              const bbox = path.getBBox();
              svgCursor.style.left = bbox.x + 'px'; // курсор слева от буквы

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



addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.line-wrapper')
    .forEach(w => animateLine(w));
  typeMachineAnimation()
})

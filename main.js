function getMarkerLengthOnPath(path, marker) {
  const markerPoint = {
    x: parseFloat(marker.getAttribute('cx')),
    y: parseFloat(marker.getAttribute('cy'))
  };

  const pathLength = path.getTotalLength();
  let closestLength = 0;
  let minDistance = Infinity;

  for (let l = 0; l <= pathLength; l += 2) {
    const p = path.getPointAtLength(l);
    const dx = p.x - markerPoint.x;
    const dy = p.y - markerPoint.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < minDistance) {
      minDistance = dist;
      closestLength = l;
    }
  }

  return closestLength / pathLength;
}

/* ================= CURSOR ================= */

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

/* ================= LINES ================= */

// 🔥 NEW: счётчик завершённых линий
let finishedLines = 0;
const totalLines = document.querySelectorAll('.line-wrapper').length;

// 🔥 NEW: финальная анимация камеры
function triggerCameraAnimation() {
  const camera = document.querySelector('.cameraImage');
  const flash = document.querySelector('.flash-overlay');

  if (!camera || !flash) return;

  camera.classList.add('flash');
  flash.classList.add('active');

  setTimeout(() => {
    camera.classList.remove('flash');
  }, 600);
}

// 🔥 NEW: вызывается, когда линия закончилась
function onLineFinished() {
  finishedLines++;

  if (finishedLines === totalLines) {
    triggerCameraAnimation();
  }
}

document.querySelectorAll('.line-wrapper').forEach(wrapper => {
  const path = wrapper.querySelector('.progress-line');
  const markers = wrapper.querySelectorAll('.marker');
  const labels = wrapper.querySelectorAll('.label');

  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  const markerPercent = Array.from(markers).map(marker =>
    getMarkerLengthOnPath(path, marker)
  );

  let progress = 0;
  let currentMarker = 0;
  let paused = false;

  function animate() {
    if (paused) return;

    progress += 2;
    path.style.strokeDashoffset = pathLength - progress;

    if (
      currentMarker < markers.length &&
      progress / pathLength >= markerPercent[currentMarker]
    ) {
      paused = true;

      markers[currentMarker].classList.add('active');
      labels[currentMarker].classList.add('active');

      setTimeout(() => {
        labels[currentMarker].classList.remove('active');
        paused = false;
        currentMarker++;
        requestAnimationFrame(animate);
      }, 1500);

      return;
    }

    // 🔥 NEW: линия дошла до конца
    if (progress >= pathLength) {
      onLineFinished();
      return;
    }

    requestAnimationFrame(animate);
  }

  animate();
});

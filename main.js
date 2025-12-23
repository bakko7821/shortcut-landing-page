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
      src: 'https://www.youtube.com/embed/64VbLdwtvvc?si=pOr85Jp8xMfZl7oj',
      title: 'Project 3'
    },
    {
      src: 'https://www.youtube.com/embed/ASrCDx0VM8o?si=-LK-eg1ow6IM-Z5T',
      title: 'Project 4'
    },
    {
      src: 'https://www.youtube.com/embed/TCl7OzSZhvM?si=6Cgv8yMDsH84UlrL',
      title: 'Project 5'
    },
    {
      src: 'https://www.youtube.com/embed/bPSGDmRNiLU?si=aXY6WQiNObr1gh1Z',
      title: 'Project 6'
    },
    {
      src: 'https://www.youtube.com/embed/UQIquJhSsJg?si=7K-aUjt03ZTyayJL',
      title: 'Project 7'
    },
];

// =========================
// SERVICE CONFIGURATOR DATA
// =========================
const CONFIG = [
  {
    id: "preparation",
    title: "Подготовка",
    type: "sectionCheckbox",          // секция с главным чекбоксом
    defaultChecked: false,
    count: 60000,
    items: [
      { type: "text", label: "Диагностика текущего контента и точек роста" },
      { type: "text", label: "Анализ ниши и конкурентов" },
      { type: "text", label: "Создание чата проекта" },
      { type: "text", label: "Разработка индивидуального стиля, оформление канала" },
      { type: "text", label: "Индивидуальная ИИ-аналитика бизнеса клиента для более точной адаптации" },
      { type: "text", label: "Сценарные тезисы по роликам" },
      { type: "text", label: "Контент-план на месяц" },
      { type: "text", label: "Формирование рубрик и постоянных форматов" },
      { type: "text", label: "Определение позиционирования и тональности канала" },
    ],
  },
  {
    id: "realization",
    title: "Реализация",
    type: "sectionCheckbox",
    defaultChecked: false,
    items: [
      {
        type: "counter",
        id: "videosCount",
        label: "Количество роликов",
        min: 1,
        max: 50,
        step: 1,
        defaultValue: 1,
      },
      { type: "checkbox", id: "clientShooting", label: "Съемка силами клиента", defaultChecked: false, count: 0 },
      { type: "checkbox", id: "locations", label: "Подбор локаций для съемок", defaultChecked: false, count: 0 },
      { type: "checkbox", id: "editing", label: "Монтаж и подготовка к публикации", defaultChecked: false, count: 0 },
      { type: "checkbox", id: "preview", label: "Превью", defaultChecked: false, count: 0 },
      { type: "checkbox", id: "horizontal", label: "Монтаж горизонтальных роликов", defaultChecked: false, count: 0 },
      { type: "checkbox", id: "verticalCuts", label: "Нарезка вертикальных роликов для соцсетей", defaultChecked: false, count: 0 },
      { type: "checkbox", id: "seo", label: "Оптимизация роликов (заголовок, описание, теги)", defaultChecked: false, count: 0 },
      { type: "checkbox", id: "publish", label: "Публикация на платформах YouTube, Telegram, ВКонтакте, Rutube", defaultChecked: false, count: 0},
    ],
  },
  {
    id: "support",
    title: "Поддержка",
    type: "sectionCheckbox",          // секция с главным чекбоксом
    defaultChecked: false,
    count: 25000,
    items: [
      { type: "checkbox", label: "Аналитика и разбор результатов", defaultChecked: false  },
      { type: "checkbox", label: "Корректировка форматов и подачи", defaultChecked: false  },
      { type: "checkbox", label: "Обновление контент-плана для YouTube", defaultChecked: false  },
      { type: "checkbox", label: "Продюсерское сопровождение", defaultChecked: false  },
      { type: "checkbox", label: "Созвон", defaultChecked: false  },
      { type: "checkbox", label: "Разбор", defaultChecked: false  },
      { type: "checkbox", label: "Контроль задач и сроков", defaultChecked: false  },
      { type: "checkbox", label: "Актуализация контента", defaultChecked: false  },
      { type: "checkbox", label: "Ответы на комментарии роликов", defaultChecked: false  },
    ],
  },
  {
    id: "socialMedia",
    title: "Ведение социальных сетей",
    type: "sectionCheckbox",          // секция с главным чекбоксом
    defaultChecked: false,
    count: 100000,
    items: [
      { type: "checkbox", label: "Актуализация контент-плана", defaultChecked: false  },
      { type: "checkbox", label: "Создание и оформление постов", defaultChecked: false  },
      { type: "checkbox", label: "Сторис и короткие форматы", defaultChecked: false  },
      { type: "checkbox", label: "Взаимодействие с аудиторией", defaultChecked: false  },
      { type: "checkbox", label: "Аналитика и отчётность", defaultChecked: false  },
      { type: "checkbox", label: "Поиск рекламодателей и партнёров", defaultChecked: false  },
    ],
  },
  {
    id: "learning",
    title: "Обучение",
    type: "sectionCheckbox",          // секция с главным чекбоксом
    defaultChecked: false,
    count: 19000,
    items: [
      { type: "checkbox", label: "Основы композиции", defaultChecked: false  },
      { type: "checkbox", label: "Настройки съемочного оборудования или телефона", defaultChecked: false  },
      { type: "checkbox", label: "Техники съемки для качественного контента", defaultChecked: false  },
      { type: "checkbox", label: "Практические рекомендации для самостоятельного производства роликов", defaultChecked: false  },
    ],
  },
];

// =========================
// MONTAGE CONFIGURATOR DATA
// =========================

const MONTAGE_CONFIG = [
  {
    id: "podcast",
    title: "Подкаст",
    type: "sectionCheckbox",
    defaultChecked: false,
    count: 60000,
    items: []
  },
  {
    id: "expert_video",
    title: "Экспертное видео",
    type: "sectionCheckbox",
    defaultChecked: false,
    count: 60000,
    items: []
  },
  {
    id: "artistic",
    title: "Художественный",
    type: "sectionCheckbox",
    defaultChecked: false,
    count: 60000,
    items: []
  },
  {
    id: "ad",
    title: "Реклама",
    type: "sectionCheckbox",
    defaultChecked: false,
    count: 60000,
    items: []
  },
  {
    id: "reals",
    title: "Рилсы",
    type: "sectionCheckbox",
    defaultChecked: false,
    count: 60000,
    items: []
  },
]

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
// CONFIGURATOR RENDER HELPERS (WITH SVG)
// =========================

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderItem(card, item) {
  if (item.type === "text") {
    return `<li>${escapeHtml(item.label)}</li>`;
  }

  if (item.type === "checkbox") {
    const id = `${card.id}__${item.id ?? escapeHtml(item.label)}`;
    return `
      <li>
        <span>${escapeHtml(item.label)}</span>
        <label class="checkWrap">
          <input type="checkbox"
                 class="option-checkbox"
                 name="${escapeHtml(id)}"
                 ${item.defaultChecked ? "checked" : ""}>
          <span class="custom-checkbox" aria-hidden="true"></span>
        </label>
      </li>
    `;
  }

  if (item.type === "counter") {
    const id = `${card.id}__${item.id}`;
    const value = item.defaultValue ?? item.min ?? 1;

    return `
      <li>
        <span>${escapeHtml(item.label)}</span>
        <label class="counter"
               data-counter="${escapeHtml(id)}"
               data-min="${item.min ?? 1}"
               data-max="${item.max ?? 999}"
               data-step="${item.step ?? 1}">
          
          <button type="button" class="plus" aria-label="Увеличить">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33325 7.99998H7.99992M7.99992 7.99998H12.6666
                       M7.99992 7.99998V3.33331
                       M7.99992 7.99998V12.6666"
                    stroke="#120303"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>

          <span class="count">${value}</span>

          <button type="button" class="minus" aria-label="Уменьшить">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9999 8.6653H3.99992
                       C3.82311 8.6653 3.65354 8.59507
                       3.52851 8.47004
                       C3.40349 8.34502 3.33325 8.17545
                       3.33325 7.99864
                       C3.33325 7.82183 3.40349 7.65226
                       3.52851 7.52723
                       C3.65354 7.40221 3.82311 7.33197
                       3.99992 7.33197H11.9999
                       C12.1767 7.33197 12.3463 7.40221
                       12.4713 7.52723
                       C12.5963 7.65226 12.6666 7.82183
                       12.6666 7.99864
                       C12.6666 8.17545 12.5963 8.34502
                       12.4713 8.47004
                       C12.3463 8.59507 12.1767 8.6653
                       11.9999 8.6653Z"
                    fill="#120303"/>
            </svg>
          </button>

          <input type="hidden" name="${escapeHtml(id)}" value="${value}">
        </label>
      </li>
    `;
  }

  return "";
}

function renderCard(card) {
  const sectionInputId = `section-${card.id}`;
  const items = Array.isArray(card.items) ? card.items : [];

  return `
    <article class="card" id="${escapeHtml(card.id)}">
      <div class="preview">
        <div class="textBox">
          <span>${escapeHtml(card.title)}</span>

          <button type="button"
                  class="dropDownButton"
                  aria-expanded="false"
                  aria-controls="content-${escapeHtml(card.id)}">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.7111 8.6212L18.3681 2.9642
                   L16.9541 1.5502
                   L12.0041 6.5002
                   L7.05414 1.5502
                   L5.64014 2.9642
                   L11.2971 8.6212
                   C11.4847 8.80867 11.739 8.91399
                   12.0041 8.91399
                   C12.2693 8.91399 12.5236 8.80867
                   12.7111 8.6212Z"
                fill="black"/>
            </svg>
          </button>
        </div>

        <label class="checkWrap">
          <input type="checkbox"
                 class="section-toggle"
                 id="${sectionInputId}"
                 name="${escapeHtml(card.id)}__enabled"
                 ${card.defaultChecked ? "checked" : ""}>
          <span class="custom-checkbox" aria-hidden="true"></span>
        </label>
      </div>

      <div class="content" id="content-${escapeHtml(card.id)}" hidden>
        <ul>
          ${items.map(item => renderItem(card, item)).join("")}
        </ul>
      </div>
    </article>
  `;
}

function renderMontageCard(card) {
  const radioId = `montage-${card.id}`;

  return `
    <article class="card montage-card" id="${escapeHtml(card.id)}">
      <div class="preview montage-preview">
        <div class="textBox">
          <span>${escapeHtml(card.title)}</span>
        </div>

        <label class="checkWrap checkWrap--radio">
          <input type="radio"
                 class="montage-radio"
                 id="${radioId}"
                 name="montage_type"
                 value="${escapeHtml(card.id)}"
                 ${card.defaultChecked ? "checked" : ""}>
          <span class="custom-checkbox custom-checkbox--radio" aria-hidden="true"></span>
        </label>
      </div>
    </article>
  `;
}

// =========================
// ROOTS / FORMS
// =========================

const serviceRoot = document.querySelector("#serviceRoot");
const montageRoot = document.querySelector("#montageRoot");

const serviceForm = document.querySelector("#configForm");
const montageForm = document.querySelector("#montageForm");

const serviceButton = document.querySelector(".serviceButton");
const montageButton = document.querySelector(".montageButton");

const cameraImage = document.querySelector("#cameraImage");

let activeMode = "service"; // 'service' | 'montage'

// =========================
// RENDER
// =========================

function renderConfiguratorInto(rootEl, configArr, renderCardFn) {
  rootEl.innerHTML = configArr.map(renderCardFn).join("");
}


function setMode(mode) {
  activeMode = mode;
  const isService = mode === "service";

  serviceButton.classList.toggle("active", isService);
  montageButton.classList.toggle("active", !isService);

  if (isService) {
    renderConfiguratorInto(serviceRoot, CONFIG, renderCard);
  } else {
    renderConfiguratorInto(montageRoot, MONTAGE_CONFIG, renderMontageCard);
  }

  serviceForm.hidden = !isService;
  montageForm.hidden = isService;

  serviceForm.style.display = isService ? "flex" : "none";
  montageForm.style.display = isService ? "none" : "flex";

  updateCamera();
}


function getActiveRoot() {
  return activeMode === "service" ? serviceRoot : montageRoot;
}

function updateCamera() {
  const root = getActiveRoot();

  let selected = 0;

  if (activeMode === "service") {
    selected = root.querySelectorAll(".section-toggle:checked").length;
  } else {
    selected = root.querySelectorAll(".montage-radio:checked").length; // 0 или 1
  }

  const cameraState = Math.min(selected + 1, 6);

  cameraImage.style.opacity = 0;
  setTimeout(() => {
    cameraImage.src = `images/cameraState/camera${cameraState}.png`;
    cameraImage.style.opacity = 1;
  }, 300);
}

// init + tab clicks
document.addEventListener("DOMContentLoaded", () => {
  setMode("service");

  serviceButton.addEventListener("click", (e) => {
    e.preventDefault();
    setMode("service");
  });

  montageButton.addEventListener("click", (e) => {
    e.preventDefault();
    setMode("montage");
  });
});

// =========================
// INTERACTIONS (dropdown + counter) — делегирование на оба root
// =========================

function handleRootClick(root, e) {
  // dropdown
  const ddButton = e.target.closest(".dropDownButton");
  if (ddButton) {
    const card = ddButton.closest(".card");
    const content = card.querySelector(".content");
    const isOpen = content.classList.contains("open");

    const allCards = root.querySelectorAll(".card");

    allCards.forEach((otherCard) => {
      const otherContent = otherCard.querySelector(".content");
      const otherButton = otherCard.querySelector(".dropDownButton");

      if (otherCard !== card) otherCard.style.display = "none";

      otherContent.classList.remove("open");
      otherContent.setAttribute("hidden", "true");
      otherButton.style.transform = "rotate(0deg)";
      otherButton.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      content.classList.add("open");
      content.removeAttribute("hidden");
      ddButton.style.transform = "rotate(180deg)";
      ddButton.setAttribute("aria-expanded", "true");
      card.style.display = "flex";
      card.style.justifyContent = "start";
    } else {
      allCards.forEach((otherCard) => {
        otherCard.style.display = "flex";
        otherCard.style.justifyContent = "center";
      });
    }
    return;
  }

  // counter +/- (unchanged)
  const plus = e.target.closest(".plus");
  const minus = e.target.closest(".minus");
  if (plus || minus) {
    const counter = e.target.closest(".counter");
    const countEl = counter.querySelector(".count");
    const input = counter.querySelector('input[type="hidden"]');

    const min = Number(counter.dataset.min);
    const max = Number(counter.dataset.max);
    const step = Number(counter.dataset.step);

    let value = Number(input.value);
    if (plus) value = Math.min(max, value + step);
    if (minus) value = Math.max(min, value - step);

    input.value = String(value);
    countEl.textContent = String(value);
  }
}

serviceRoot.addEventListener("click", (e) => handleRootClick(serviceRoot, e));
montageRoot.addEventListener("click", (e) => handleRootClick(montageRoot, e));

// =========================
// CHANGE: section toggle -> disable inner inputs + update camera (делегирование)
// =========================

function handleRootChange(root, e) {
  // service checkbox
  const section = e.target.closest(".section-toggle");
  if (section) {
    const card = section.closest(".card");
    const innerInputs = card.querySelectorAll(".content input, .content button");
    innerInputs.forEach((el) => {
      el.disabled = !section.checked;
    });
    updateCamera();
    return;
  }

  // montage radio
  const radio = e.target.closest(".montage-radio");
  if (radio) {
    updateCamera();
    return;
  }
}

serviceRoot.addEventListener("change", (e) => handleRootChange(serviceRoot, e));
montageRoot.addEventListener("change", (e) => handleRootChange(montageRoot, e));

// =========================
// FORM LOGIC
// =========================

serviceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(serviceForm).entries());
  console.log("SERVICE RESULT:", data);
});

montageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(montageForm).entries());
  console.log("MONTAGE RESULT:", data);
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

const steps = [
  {
    eyebrow: "Перед началом",
    title: "Проверьте место установки",
    lead: "Камин должен стоять ровно, получать воздух и оставаться доступным для обслуживания.",
    image: "assets/pdf-p19-02.jpg",
    contain: true,
    content: `
      <ul class="step-list">
        <li>Оставьте не менее 3 см между стенками камина и нишей.</li>
        <li>Над пламенем желательно оставить не менее 500 мм свободного пространства.</li>
        <li>Рекомендуемый вырез: 330 × 240 мм, глубина ниши — 280 мм.</li>
        <li>Не перекрывайте нижние и боковые вентиляционные каналы.</li>
      </ul>
      <div class="warning">Не устанавливайте камин у ванной, душа, бассейна, на сквозняке или ближе 1 метра к горючим предметам.</div>
    `,
    confirm: "Место ровное, вентиляция и доступ обеспечены"
  },
  {
    eyebrow: "Шаг 2",
    title: "Подключите питание",
    lead: "Используйте одно из двух гнезд: заднее или нижнее.",
    image: "assets/power-connect.gif",
    contain: true,
    content: `
      <ul class="step-list">
        <li>Подключайте кабель только к одному гнезду.</li>
        <li>Переставьте защитную заглушку в свободное гнездо.</li>
        <li>Подключите камин к доступной розетке 5 А / 240 В.</li>
      </ul>
      <div class="warning">Перед перестановкой заглушки обязательно отключите камин от электросети. Электроподключение должен выполнять квалифицированный электрик.</div>
    `,
    confirm: "Кабель подключен, свободное гнездо закрыто"
  },
  {
    eyebrow: "Шаг 3",
    title: "Подготовьте воду",
    lead: "Для исправной работы и сохранения гарантии подходит только дистиллированная вода.",
    image: "assets/pdf-p05-02.jpg",
    contain: true,
    content: `
      <ul class="step-list">
        <li>Подготовьте емкость с дистиллированной водой.</li>
        <li>Не используйте водопроводную, фильтрованную или доочищенную воду.</li>
        <li>Не добавляйте масла, ароматизаторы и лекарственные средства.</li>
      </ul>
      <div class="tip">Медленное мигание кнопки питания означает, что камину нужна заправка.</div>
    `,
    confirm: "Использую дистиллированную воду без добавок"
  },
  {
    eyebrow: "Шаг 4",
    title: "Заправьте камин",
    lead: "Камин сам остановит насос, когда наберет нужное количество воды.",
    image: "assets/water-fill.gif",
    contain: true,
    content: `
      <div class="warning water-warning"><strong>Важно:</strong> используйте только дистиллированную воду без масел и других добавок.</div>
      <ul class="step-list">
        <li>Наденьте шланг на нижний штуцер «Заправка».</li>
        <li>Опустите второй конец в емкость, стоящую ниже уровня камина.</li>
        <li>Нажмите кнопку питания один раз и дождитесь быстрого мигания.</li>
        <li>Нажмите еще раз, чтобы докачать воду из шланга.</li>
      </ul>
      <div class="tip">Чтобы остановить заправку, удерживайте кнопку 2 секунды. Для принудительной заправки нажмите кнопку питания 3 раза быстро.</div>
    `,
    confirm: "Заправка завершена, шланг отсоединен"
  },
  {
    eyebrow: "Шаг 5",
    title: "Включите и настройте пламя",
    lead: "Одно нажатие кнопки питания включает или выключает камин.",
    image: "assets/pdf-p06-02.jpg",
    contain: true,
    content: `
      <ul class="step-list">
        <li>Выберите один из 4 уровней пламени в приложении или кнопкой M на пульте.</li>
        <li>Кнопка со звуком циклически переключает 3 варианта потрескивания.</li>
        <li>Подсветка и RGB-режим доступны в зависимости от комплектации.</li>
      </ul>
      <div class="warning">Не прикасайтесь к внутренним деталям и не закрывайте вентиляцию. Непрерывная работа — не более 10 часов.</div>
    `,
    confirm: "Камин включается, пламя работает"
  },
  {
    eyebrow: "Шаг 6 · по желанию",
    title: "Подключите приложение",
    lead: "Приложение Fireplace дает доступ к пламени, звуку, подсветке и заправке.",
    image: "assets/pdf-p09-02.jpg",
    contain: true,
    content: `
      <ul class="step-list">
        <li>Скачайте Fireplace в RuStore или App Store.</li>
        <li>Удерживайте кнопку питания на камине 15 секунд — светодиоды начнут мигать.</li>
        <li>В приложении нажмите «Добавьте устройство» → «Начать поиск».</li>
        <li>Выберите найденный камин, домашнюю Wi‑Fi сеть, введите пароль и сохраните.</li>
      </ul>
      <div class="tip">Режим сопряжения действует 2 минуты. Если время вышло, снова удерживайте кнопку 15 секунд.</div>
    `,
    confirm: "Приложение подключено или я пропускаю этот шаг"
  },
  {
    eyebrow: "Шаг 7 · по желанию",
    title: "Добавьте Яндекс Алису",
    lead: "Сначала камин должен быть включен и уже подключен к домашнему Wi‑Fi.",
    image: "assets/pdf-p13-02.jpg",
    contain: true,
    content: `
      <ul class="step-list">
        <li>В Fireplace откройте настройки и нажмите «Подключить».</li>
        <li>Войдите или зарегистрируйтесь в личном кабинете.</li>
        <li>Добавьте устройство по показанному ключу и дождитесь статуса «онлайн».</li>
        <li>Откройте раздел «Яндекс.Алиса» и свяжите аккаунты.</li>
      </ul>
      <div class="tip">После этого можно сказать: «Алиса, включи камин» или выбрать режим пламени от 1 до 4.</div>
    `,
    confirm: "Алиса подключена или я пропускаю этот шаг"
  },
  {
    eyebrow: "На будущее",
    title: "Как правильно слить воду",
    lead: "Сливайте воду перед транспортировкой, длительным простоем и обслуживанием.",
    image: "assets/pdf-p05-02.jpg",
    contain: true,
    content: `
      <ul class="step-list">
        <li>Отодвиньте шторку и наденьте шланг на верхний штуцер «Слив».</li>
        <li>Опустите шланг в емкость объемом не менее 5 литров.</li>
        <li>В приложении удерживайте кнопку заправки и выберите «Откачать».</li>
        <li>Когда вода перестанет идти, нажмите «Отменить» и снимите шланг.</li>
      </ul>
      <div class="warning">Даже после откачки внутри остается немного воды. При переноске не наклоняйте камин более чем на 45°.</div>
    `,
    confirm: "Я знаю, как слить воду"
  },
  {
    eyebrow: "Готово",
    title: "Установка завершена",
    lead: "Теперь все разделы инструкции доступны в любой момент.",
    image: "assets/pdf-p01-01.jpg",
    contain: false,
    content: `
      <ul class="step-list">
        <li>Не оставляйте воду в камине дольше 4 дней.</li>
        <li>Проводите очистку примерно раз в 1–1,5 месяца.</li>
        <li>Для дезинфекции используйте только 3% перекись водорода и не включайте парение во время обработки.</li>
        <li>При неисправности отключите устройство от розетки.</li>
      </ul>
      <div class="tip">Сервис: +7 (495) 181-22-81 · support@schonesfeuer.ru</div>
    `,
    confirm: "Все понятно, завершить инструкцию"
  }
];

const icons = {
  start: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7-11-7Z"/></svg>`,
  water: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3S6 10 6 15a6 6 0 0 0 12 0c0-5-6-12-6-12Z"/></svg>`,
  control: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v16M18 4v16M3 9h6M15 15h6"/></svg>`,
  clean: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 20 6-6m0 0 7-7 3 3-7 7m-3-3 3 3M5 5l.5 1.5L7 7l-1.5.5L5 9l-.5-1.5L3 7l1.5-.5L5 5Z"/></svg>`,
  error: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 19h18.4L12 3Zm0 5v5m0 3v.1"/></svg>`,
  contact: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4H4v3c0 7.2 5.8 13 13 13h3v-3l-4-2-2 2a11 11 0 0 1-7-7l2-2-2-4Z"/></svg>`
};

const mainActions = [
  { type: "step", step: 0, icon: "start", title: "Первый запуск", text: "Полная настройка за 9 шагов" },
  { type: "step", step: 2, icon: "water", title: "Залив воды", text: "Подготовка и безопасная заправка" },
  { type: "step", step: 4, icon: "control", title: "Управление", text: "Пламя, звук, пульт и приложение" },
  { type: "problem", problem: "cleaning", icon: "clean", title: "Очистка", text: "Когда и как обслуживать камин" },
  { type: "anchor", anchor: "help", icon: "error", title: "Ошибки", text: "Быстрые проверки при проблеме" },
  { type: "anchor", anchor: "support", icon: "contact", title: "Контакты", text: "Телефон и почта поддержки" }
];

const problems = [
  {
    id: "no-steam",
    symbol: "≈",
    title: "Нет пара",
    short: "Камин включен, но эффекта нет",
    step: 2,
    content: `
      <ol>
        <li>Проверьте, не мигает ли медленно кнопка питания — это сигнал о необходимости заправки.</li>
        <li>Убедитесь, что в камине дистиллированная вода и заправка завершилась автоматически.</li>
        <li>Выключите и снова включите камин одним нажатием кнопки питания.</li>
      </ol>
      <div class="problem-note">Не опускайте руки и предметы внутрь камина. Если пар не появился, отключите устройство от розетки и обратитесь в сервис.</div>
    `
  },
  {
    id: "no-light",
    symbol: "☼",
    title: "Не горит подсветка",
    short: "Пламя есть, подсветка выключена",
    step: 4,
    content: `
      <ol>
        <li>Откройте значок подсветки в приложении и проверьте уровень яркости.</li>
        <li>На пульте включите синюю или RGB-подсветку, если эта опция есть в комплектации.</li>
        <li>Если включен увлажнитель, настройте подсветку в меню «Увлажнение».</li>
      </ol>
      <div class="problem-note">Синяя и RGB-подсветка являются опциями и могут отсутствовать в вашей комплектации.</div>
    `
  },
  {
    id: "low-steam",
    symbol: "≋",
    title: "Мало пара",
    short: "Эффект пламени слишком слабый",
    step: 4,
    content: `
      <ol>
        <li>Выберите более высокий из четырех режимов пламени.</li>
        <li>Проверьте, что вентиляционные каналы не перекрыты.</li>
        <li>Уберите сквозняк, вентилятор или сильный поток воздуха рядом с камином.</li>
      </ol>
      <div class="problem-note">При максимальной интенсивности увлажнения рядом с камином может образоваться конденсат.</div>
    `
  },
  {
    id: "error",
    symbol: "!",
    title: "Горит ошибка",
    short: "Необычная индикация или сбой",
    step: 0,
    content: `
      <ol>
        <li>Выключите камин и выньте вилку из розетки.</li>
        <li>Проверьте, не перекрыта ли вентиляция и нет ли посторонних предметов внутри.</li>
        <li>Не разбирайте устройство и не пытайтесь ремонтировать его самостоятельно.</li>
      </ol>
      <div class="problem-note">В исходной инструкции нет таблицы кодов ошибок. Запишите характер индикации и сообщите его сервисному центру.</div>
    `
  },
  {
    id: "drain",
    symbol: "↓",
    title: "Как слить воду",
    short: "Перед перевозкой или хранением",
    step: 7,
    content: `
      <ol>
        <li>Наденьте шланг на верхний штуцер «Слив» и опустите его в емкость не менее 5 литров.</li>
        <li>В приложении удерживайте кнопку заправки и выберите «Откачать».</li>
        <li>Когда вода перестанет поступать, нажмите «Отменить» и снимите шланг.</li>
      </ol>
      <div class="problem-note">После слива внутри остается немного воды. Не наклоняйте камин более чем на 45°.</div>
    `
  },
  {
    id: "cleaning",
    symbol: "✦",
    title: "Очистка камина",
    short: "Обслуживание раз в 1–1,5 месяца",
    step: 8,
    hidden: true,
    content: `
      <ol>
        <li>Слейте воду. Для обработки используйте только 3% раствор перекиси водорода.</li>
        <li>Заправьте камин раствором и оставьте выключенным на 1 час. Не включайте парение.</li>
        <li>Слейте раствор и дважды промойте бак дистиллированной водой.</li>
        <li>Дайте камину просохнуть несколько часов.</li>
      </ol>
      <div class="problem-note">Запрещены растворители, отбеливатели, хлорсодержащие и абразивные средства.</div>
    `
  }
];

const storageKey = "hl300-guide-state-v1";
const state = loadState();
let currentStep = Math.min(state.currentStep || 0, steps.length - 1);

const $ = (selector) => document.querySelector(selector);
const guideDialog = $("#guideDialog");
const contentsDialog = $("#contentsDialog");
const problemDialog = $("#problemDialog");
const confirmStep = $("#confirmStep");
let activeProblem = null;

function loadState() {
  try {
    return { completed: false, maxStep: 0, currentStep: 0, ...JSON.parse(localStorage.getItem(storageKey) || "{}") };
  } catch {
    return { completed: false, maxStep: 0, currentStep: 0 };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
  updateHome();
}

function renderStep(index) {
  currentStep = index;
  const step = steps[index];
  const isLast = index === steps.length - 1;

  $("#stepCounter").textContent = `Шаг ${index + 1} из ${steps.length}`;
  $("#progressBar").style.width = `${((index + 1) / steps.length) * 100}%`;
  $("#stepEyebrow").textContent = step.eyebrow;
  $("#stepTitle").textContent = step.title;
  $("#stepLead").textContent = step.lead;
  $("#stepContent").innerHTML = step.content;
  $("#confirmText").textContent = step.confirm;
  $("#stepMedia").className = `step-media${step.contain ? "" : " cover"}`;
  $("#stepMedia").innerHTML = `<img src="${step.image}" alt="">`;
  $("#prevStep").disabled = index === 0;
  $("#prevStep").style.visibility = index === 0 ? "hidden" : "visible";
  $("#nextStep span").textContent = isLast ? "Завершить" : "Далее";

  const alreadyPassed = state.completed || index < state.maxStep;
  confirmStep.checked = alreadyPassed;
  $("#nextStep").disabled = !alreadyPassed;
  state.currentStep = index;
  saveState();
}

function openStep(index) {
  const canOpen = state.completed || index <= state.maxStep;
  if (!canOpen) {
    openGuide(state.maxStep);
    return;
  }
  if (contentsDialog.open) contentsDialog.close();
  renderStep(index);
  if (!guideDialog.open) guideDialog.showModal();
}

function openGuide(index = currentStep) {
  renderStep(index);
  if (!guideDialog.open) guideDialog.showModal();
}

function next() {
  if (!confirmStep.checked) return;
  state.maxStep = Math.max(state.maxStep, Math.min(currentStep + 1, steps.length - 1));

  if (currentStep === steps.length - 1) {
    state.completed = true;
    state.maxStep = steps.length - 1;
    state.currentStep = 0;
    saveState();
    guideDialog.close();
    renderContents();
    contentsDialog.showModal();
    return;
  }

  saveState();
  renderStep(currentStep + 1);
}

function renderMainActions() {
  $("#mainActions").innerHTML = mainActions.map((item) => {
    const locked = item.type === "step" && !state.completed && item.step > state.maxStep;
    return `
      <button class="action-card${locked ? " locked" : ""}" type="button"
        data-type="${item.type}" data-value="${item.step ?? item.problem ?? item.anchor}">
        <span class="action-icon">${icons[item.icon]}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".action-card").forEach((button) => {
    button.addEventListener("click", () => {
      const { type, value } = button.dataset;
      if (type === "step") openStep(Number(value));
      if (type === "problem") openProblem(value);
      if (type === "anchor") document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderContents() {
  $("#lockedHint").hidden = false;
  $("#contentsList").innerHTML = steps.map((step, index) => {
    const unlocked = state.completed || index <= state.maxStep;
    const passed = state.completed || index < state.maxStep;
    return `
      <button class="contents-item" type="button" data-step="${index}" ${unlocked ? "" : "disabled"}>
        <span class="contents-number">${String(index + 1).padStart(2, "0")}</span>
        <span><strong>${step.title}</strong><small>${step.eyebrow}</small></span>
        ${passed ? '<span class="contents-state">Пройдено</span>' : ""}
      </button>
    `;
  }).join("");

  document.querySelectorAll(".contents-item:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => openStep(Number(button.dataset.step)));
  });
}

function renderProblems() {
  $("#problemGrid").innerHTML = problems.filter((problem) => !problem.hidden).map((problem) => `
    <button class="problem-card" type="button" data-problem="${problem.id}">
      <span class="problem-icon">${problem.symbol}</span>
      <h3>${problem.title}</h3>
      <p>${problem.short}</p>
    </button>
  `).join("");

  document.querySelectorAll(".problem-card").forEach((button) => {
    button.addEventListener("click", () => openProblem(button.dataset.problem));
  });
}

function openProblem(id) {
  activeProblem = problems.find((problem) => problem.id === id);
  if (!activeProblem) return;
  $("#problemSymbol").textContent = activeProblem.symbol;
  $("#problemTitle").textContent = activeProblem.title;
  $("#problemContent").innerHTML = activeProblem.content;
  $("#problemStepButton").textContent = activeProblem.id === "cleaning" ? "Открыть раздел обслуживания" : "Открыть нужный шаг";
  problemDialog.showModal();
}

function renderManualPreview() {
  $("#manualPreview").innerHTML = steps.slice(0, 6).map((step, index) => {
    const locked = !state.completed && index > state.maxStep;
    return `
      <div class="preview-item${locked ? " locked" : ""}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${step.title}</strong>
      </div>
    `;
  }).join("");
}

function updateHome() {
  const hasProgress = state.maxStep > 0 && !state.completed;
  const visibleStep = state.completed ? steps.length : Math.min(state.currentStep + 1, steps.length);
  const progress = state.completed ? 100 : Math.max(1, (state.maxStep / (steps.length - 1)) * 100);

  $("#startGuide").querySelector("span").textContent = state.completed ? "Открыть инструкцию" : "Начать за 7 минут";
  $("#continueGuide").hidden = !hasProgress;
  $("#homeProgressLabel").textContent = state.completed ? "Первый запуск завершен" : `Первый запуск · Шаг ${visibleStep} из ${steps.length}`;
  $("#homeProgressBar").style.width = `${progress}%`;
  renderMainActions();
  renderContents();
  renderManualPreview();
}

confirmStep.addEventListener("change", () => {
  $("#nextStep").disabled = !confirmStep.checked;
});

$("#startGuide").addEventListener("click", () => {
  if (state.completed) {
    renderContents();
    contentsDialog.showModal();
  } else {
    openGuide(0);
  }
});

$("#continueGuide").addEventListener("click", () => openGuide(state.currentStep));
$("#nextStep").addEventListener("click", next);
$("#prevStep").addEventListener("click", () => renderStep(currentStep - 1));
$("#closeGuide").addEventListener("click", () => guideDialog.close());
const showContents = () => {
  renderContents();
  contentsDialog.showModal();
};
$("#openContents").addEventListener("click", showContents);
$("#openManual").addEventListener("click", showContents);
$("#closeContents").addEventListener("click", () => contentsDialog.close());
$("#openOriginal").addEventListener("click", () => window.open("HL-300 инструкция 19.03.pdf", "_blank"));
$("#closeProblem").addEventListener("click", () => problemDialog.close());
$("#problemStepButton").addEventListener("click", () => {
  if (!activeProblem) return;
  problemDialog.close();
  openStep(activeProblem.step);
});

$("#restartGuide").addEventListener("click", () => {
  const confirmed = window.confirm("Сбросить прогресс и начать инструкцию заново?");
  if (!confirmed) return;
  Object.assign(state, { completed: false, maxStep: 0, currentStep: 0 });
  saveState();
  openGuide(0);
});

guideDialog.addEventListener("click", (event) => {
  if (event.target === guideDialog) guideDialog.close();
});
contentsDialog.addEventListener("click", (event) => {
  if (event.target === contentsDialog) contentsDialog.close();
});
problemDialog.addEventListener("click", (event) => {
  if (event.target === problemDialog) problemDialog.close();
});

renderProblems();
updateHome();

if (window.location.hash === "#guide") {
  requestAnimationFrame(() => openGuide(state.completed ? 0 : state.currentStep));
} else if (window.location.hash === "#contents") {
  requestAnimationFrame(() => contentsDialog.showModal());
} else if (window.location.hash.startsWith("#problem-")) {
  requestAnimationFrame(() => openProblem(window.location.hash.replace("#problem-", "")));
}

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
    image: "assets/pdf-p04-02.jpg",
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
    image: "assets/pdf-p05-02.jpg",
    contain: true,
    content: `
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

const quickItems = [
  { step: 3, title: "Заправить водой", text: "Шланг, вода и запуск насоса" },
  { step: 5, title: "Подключить Wi‑Fi", text: "Приложение Fireplace за 2 минуты" },
  { step: 6, title: "Настроить Алису", text: "Связать аккаунт и устройство" },
  { step: 7, title: "Слить воду", text: "Перед перевозкой или обслуживанием" }
];

const storageKey = "hl300-guide-state-v1";
const state = loadState();
let currentStep = Math.min(state.currentStep || 0, steps.length - 1);

const $ = (selector) => document.querySelector(selector);
const guideDialog = $("#guideDialog");
const contentsDialog = $("#contentsDialog");
const confirmStep = $("#confirmStep");

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

function renderQuickCards() {
  $("#quickCards").innerHTML = quickItems.map((item, index) => {
    const locked = !state.completed && item.step > state.maxStep;
    return `
      <button class="quick-card${locked ? " locked" : ""}" type="button" data-step="${item.step}">
        <span class="card-number">0${index + 1}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".quick-card").forEach((button) => {
    button.addEventListener("click", () => openStep(Number(button.dataset.step)));
  });
}

function renderContents() {
  $("#lockedHint").hidden = state.completed;
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

function updateHome() {
  const hasProgress = state.maxStep > 0 && !state.completed;
  $("#startGuide").querySelector("span").textContent = state.completed ? "Открыть инструкцию" : "Начать настройку";
  $("#continueGuide").hidden = !hasProgress;
  renderQuickCards();
  renderContents();
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
$("#openContents").addEventListener("click", () => {
  renderContents();
  contentsDialog.showModal();
});
$("#closeContents").addEventListener("click", () => contentsDialog.close());
$("#openOriginal").addEventListener("click", () => window.open("HL-300 инструкция 19.03.pdf", "_blank"));

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

updateHome();

if (window.location.hash === "#guide") {
  requestAnimationFrame(() => openGuide(state.completed ? 0 : state.currentStep));
} else if (window.location.hash === "#contents") {
  requestAnimationFrame(() => contentsDialog.showModal());
}

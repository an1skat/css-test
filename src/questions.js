const questions = [
  {
    id: 1,
    question: "Що означає CSS?",
    options: [
      "Каскадні таблиці стилів",
      "Комп'ютерна таблиця стилів",
      "Творча таблиця стилів",
      "Кольорова таблиця стилів",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Як включити коментарі в CSS?",
    options: [
      "// Це коментар",
      "<!-- Це коментар -->",
      "/* Це коментар */",
      "# Це коментар",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Який селектор має найбільшу вагу?",
    options: ["Селектор тега", "Селектор класу", "Селектор ID", "Inline-стилі"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "Яка властивість не наслідується?",
    options: ["visibility", "border", "letter-spacing", "text-align"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Яка властивість наслідується?",
    options: ["margin", "text-decoration", "font", "outline"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question:
      "До яких елементів будуть додаватися стилі якщо додати псевдоклас :empty?",
    options: [
      "Елементам без контенту",
      "Елементам без дочірніх елементів",
      "Елементам з дочірними елементами",
      "Елементам без сусідів",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "У яких одиницях задається властивість line-height?",
    options: [
      "У міліметрах або сантиметрах",
      "У одиницях em або rem",
      "Задається не числом, а текстом",
      "У пікселях або відсотках",
    ],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: "Навіщо додавати дів з класом container?",
    options: [
      "Для легшої стилізациї",
      "Просто так для краси",
      "Не знаю",
      "Для центрування елементів",
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: "Чому box-sizing: border-box; краще?",
    options: [
      "По пріколу",
      "Щоб ширина блока була по бордер блоку",
      "Щоб не вираховувати справжню ширину елемента",
      "Не знаю, для кожного все індивідуально",
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "Де буде елемент якщо я йому дам align-items: cross-start; ?",
    options: [
      "Він буде наприкінці побічної осі",
      "Він буде напочатку побічної осі",
      "Він буде напочатку основної осі",
      "Він буде наприкінці основної осі",
    ],
    correctAnswer: 1,
  },
  {
    id: 11,
    question: "Які властивості замінює властивість flex?",
    options: [
      "Ніякі, це самостійна властивість",
      "flex-direction, flex-wrap, flex-flow",
      "flex-grow, flex-shrink, flex-basis",
      "Я не знаю((((",
    ],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "Відносно чого виміряється одиниця em?",
    options: [
      "Відносно значення font-size тега body",
      "Не від чого, це самостійна і незалежна одиниця",
      "Відносно бога",
      "Відносно бітьківського значення font-size",
    ],
    correctAnswer: 3,
  },
  {
    id: 13,
    question: "Яка обов'язкова властивість для псевдоелемента?",
    options: [
      "content",
      "display: block",
      "ширина та висота",
      "ніяка, псевдоелемент не залежний від якоїсь властивості",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "Що робить властивість box-shadow?",
    options: [
      "Тінь тексту",
      "Тінь елемента",
      "Прозорість",
      "Туман навколо елемента",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "Для чого потрібно @font-face?",
    options: [
      "Для додавання шрифтів",
      "Для задання гарнітури шрифта",
      "Для більш точної стилізації тексту",
      "Для задання масштабу шрифту",
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "Яка ВЛАСТИВІСТЬ потрібна щоб зробити градієнт?",
    options: [
      "background-color",
      "background-image",
      "gradient",
      "linear-gradient",
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "Як додати картинку з інтернету як фон для елемента?",
    options: [
      "url: url()",
      "Через тег img в html",
      "background-image: url()",
      "Ніяк, треба завантажувати картинку на комп'ютер",
    ],
    correctAnswer: 2,
  },
  {
    id: 18,
    question: "Свг це:",
    options: [
      "Растровий елемент",
      "Набір об'єктів",
      "Векторний елемент",
      "Бог його знає",
    ],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "Для чого потрібен @import?",
    options: [
      "Для підключення шрифтів",
      "Для підключення інших html файлів",
      "Для підключення стилів до html",
      "Для підключення js файлів",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question:
      "Якщо у предка немає ніякого position, а у дитини position: absolute то відносно чого буде позиціонуватися дитина?",
    options: [
      "Відносно бога",
      "Відносно тега body",
      "Відносно тега html",
      "Ніяк",
    ],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "Як називається шаблон за яким будуть валідуватися поля форми?",
    options: ["Респиратор", "Регулярний вираз", "Паттерн", "Бог"],
    correctAnswer: 1,
  },
  {
    id: 22,
    question: "Clip-path це:",
    options: [
      "Щось з кліпанням",
      "Область свг",
      "Область яка обмежує видимість елемента",
      "Такого немає",
    ],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: "Для чого потрібен transition?",
    options: [
      "Для анімації елмента",
      "Такої властивості немає",
      "Для встановелння тривалості між зміненням станів елемента",
      "Для переміщення елемента",
    ],
    correctAnswer: 2,
  },
  {
    id: 24,
    question: "Для чого потрібен transform?",
    options: [
      "Такої властивості немає",
      "Для перетворення елемента у трансформера",
      "Для анімації елемента",
      "Для зміни елемента в 2д або 3д",
    ],
    correctAnswer: 3,
  },
  {
    id: 25,
    question: "Для чого потрібен @keyframes?",
    options: [
      "Для анімації елемента",
      "Для зміни елемента в 2д або 3д",
      "Такого немає",
      "Щось із ключами для фреймів",
    ],
    correctAnswer: 0,
  },
  {
    id: 26,
    question: "SASS це:",
    options: [
      "Препроцесор для js",
      "амогус сасс",
      "Препроцесор для стилів",
      "Набір літер",
    ],
    correctAnswer: 2,
  },
  {
    id: 27,
    question: "Як розшифровується методологія БЕМ?",
    options: [
      "Блок, елемент, модифікатор",
      "Бім, бім, бам, бам",
      "Барашик, ест, морковь",
      "Блок, ест, модифікатори",
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "Для чого потрібен @extend у SASS?",
    options: [
      "Такого нема",
      "Для наслідування властивостей",
      "Для підключення стилів",
      "По пріколу",
    ],
    correctAnswer: 1,
  },
  {
    id: 29,
    question: "Для чого потрібен @mixin у SASS?",
    options: [
      "Для змішування стилів",
      "Для змішування чогось у js",
      "Такого нема",
      "По пріколу",
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: "Різниця між responsive і adaptive версткою?",
    options: [
      "Adaptive більш плавна",
      "Responsive більш плавна",
      "Тільки назва",
      "Нічим",
    ],
    correctAnswer: 1,
  },
  {
    id: 31,
    question: "Для чого потрібен @media?",
    options: [
      "Для медіа-файлів",
      "Для адаптивної верстки",
      "Такого немає",
      "Бог його знає",
    ],
    correctAnswer: 1,
  },
  {
    id: 32,
    question: "Як працює Grid Layout у CSS і які його переваги в порівнянні з Flexbox?",
    options: [
      "Grid Layout використовує одновимірну модель розташування елементів.",
      "Grid Layout працює тільки зі стовпчиками, а Flexbox - з рядками.",
      "Grid Layout - це більш потужний двовимірний системний лейаут.",
      "Flexbox і Grid Layout - це одні й ті ж самі речі.",
    ],
    correctAnswer: 2,
  },
  {
    id: 33,
    question: "Які є основні принципи методології БЕМ у CSS?",
    options: [
      "БЕМ - це система організації коду, яка використовує тільки класи.",
      "БЕМ визначає блоки, елементи та модифікатори для покращеної читабельності та підтримки.",
      "Методологія БЕМ виключає використання класів у CSS.",
      "БЕМ використовує тільки ідентифікатори для стилізації елементів.",
    ],
    correctAnswer: 1,
  },
  {
    id: 34,
    question: "Як використовувати анімацію keyframes у CSS для створення складних анімацій?",
    options: [
      "Визначається анімація на основі руху миші.",
      "Використовуються keyframes для визначення проміжних кроків анімації.",
      "Анімація keyframes застосовується тільки до фону елементів.",
      "Анімація keyframes може бути визначена тільки для текстового контенту.",
    ],
    correctAnswer: 1,
  },
  {
    id: 35,
    question: "Як використовувати псевдоелементи ::before і ::after для створення комплексного дизайну?",
    options: [
      "Псевдоелементи ::before і ::after використовуються тільки для створення тіні.",
      "Вони додають віртуальні елементи перед і після справжнього вмісту елемента.",
      "Псевдоелементи застосовуються лише до текстового контенту.",
      "Вони додають тільки горизонтальні лінії на сторінці.",
    ],
    correctAnswer: 1,
  },
];

export default questions;

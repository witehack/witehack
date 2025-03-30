// Структура курса
const courseContent = {
    html: {
        title: 'HTML',
        description: 'Изучение основ HTML разметки',
        lessons: [
            {
                id: 'html-intro',
                title: 'Введение в HTML',
                level: 'beginner',
                order: 1,
                test: {
                    id: 'html-intro-test',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Что такое HTML?',
                            options: [
                                'Язык программирования',
                                'Язык разметки гипертекста',
                                'Язык стилей',
                                'База данных'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 'q2',
                            question: 'Какой тег определяет тело HTML документа?',
                            options: [
                                '<html>',
                                '<body>',
                                '<head>',
                                '<main>'
                            ],
                            correctAnswer: 1
                        }
                    ]
                },
                content: `
                    <div class="lesson-header">
                        <h2>Введение в HTML</h2>
                        <div class="lesson-progress">
                            <div class="progress-indicator">
                                <span class="current-step">Урок 1</span>
                                <span class="total-steps">из 3</span>
                            </div>
                            <div class="difficulty-badge beginner">Начальный уровень</div>
                        </div>
                    </div>

                    <div class="lesson-content">
                        <p>HTML (HyperText Markup Language) - это язык разметки, который является основой любой веб-страницы. С его помощью создается структура и содержание веб-сайта.</p>
                        
                        <h3>Основные понятия</h3>
                        <ul class="concept-list">
                            <li><span class="concept-title">Теги и элементы</span> - основные строительные блоки HTML</li>
                            <li><span class="concept-title">Атрибуты</span> - дополнительные свойства элементов</li>
                            <li><span class="concept-title">Структура документа</span> - DOCTYPE, head, body</li>
                            <li><span class="concept-title">Семантика</span> - правильное использование тегов</li>
                        </ul>

                        <div class="code-section">
                            <h3>Структура HTML документа</h3>
                            <div class="code-editor" data-language="html">
                                <textarea>
<!DOCTYPE html>
<html>
    <head>
        <title>Моя первая страница</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Привет, мир!</h1>
        <p>Это мой первый HTML документ.</p>
    </body>
</html>
                                </textarea>
                                <div class="editor-controls">
                                    <button class="run-code-btn">
                                        <i class="fas fa-play"></i>
                                        Запустить код
                                    </button>
                                </div>
                                <div class="result-container"></div>
                            </div>
                        </div>

                        <div class="key-points">
                            <h3>Важные моменты</h3>
                            <ul>
                                <li><span class="highlight">DOCTYPE</span> определяет версию HTML</li>
                                <li>Тег <span class="highlight">html</span> содержит весь документ</li>
                                <li>В <span class="highlight">head</span> находятся метаданные</li>
                                <li>В <span class="highlight">body</span> располагается содержимое страницы</li>
                            </ul>
                        </div>

                        <div class="practice-section">
                            <h3>Практическое задание</h3>
                            <div class="task-description">
                                <p>Создайте простую HTML страницу со следующими элементами:</p>
                                <ul>
                                    <li>Заголовок страницы (title)</li>
                                    <li>Заголовок первого уровня (h1)</li>
                                    <li>Два параграфа текста (p)</li>
                                    <li>Метатеги для кодировки и viewport</li>
                                </ul>
                            </div>
                            
                            <div class="code-editor" data-language="html">
                                <textarea></textarea>
                                <div class="editor-controls">
                                    <button class="run-code-btn">
                                        <i class="fas fa-play"></i>
                                        Запустить код
                                    </button>
                                    <button class="test-btn">
                                        <i class="fas fa-check"></i>
                                        Проверить решение
                                    </button>
                                </div>
                                <div class="result-container"></div>
                            </div>
                        </div>

                        <div class="lesson-navigation">
                            <button class="prev-lesson-btn" disabled>
                                <i class="fas fa-arrow-left"></i>
                                Предыдущий урок
                            </button>
                            <button class="complete-lesson-btn">
                                <i class="fas fa-check-circle"></i>
                                Завершить урок
                            </button>
                            <button class="next-lesson-btn">
                                <i class="fas fa-arrow-right"></i>
                                Следующий урок
                            </button>
                        </div>
                    </div>
                `
            },
            {
                id: 'html-basic-tags',
                title: 'Основные теги',
                content: `
                    <h2>Основные HTML теги</h2>
                    <p>В этом уроке мы изучим основные HTML теги, которые используются для создания контента.</p>

                    <h3>Заголовки</h3>
                    <p>HTML предоставляет 6 уровней заголовков, от h1 до h6:</p>
                    <div class="code-editor" data-language="html">
                        <textarea>
<h1>Заголовок 1 уровня</h1>
<h2>Заголовок 2 уровня</h2>
<h3>Заголовок 3 уровня</h3>
<h4>Заголовок 4 уровня</h4>
<h5>Заголовок 5 уровня</h5>
<h6>Заголовок 6 уровня</h6>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <h3>Параграфы и форматирование текста</h3>
                    <div class="code-editor" data-language="html">
                        <textarea>
<p>Это обычный параграф текста.</p>
<p>Текст может быть <strong>жирным</strong>, <em>курсивным</em>, 
   <u>подчеркнутым</u> или <mark>выделенным</mark>.</p>
<p>Также можно использовать <sub>подстрочный</sub> и 
   <sup>надстрочный</sup> текст.</p>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <h3>Списки</h3>
                    <div class="code-editor" data-language="html">
                        <textarea>
<!-- Маркированный список -->
<ul>
    <li>Первый пункт</li>
    <li>Второй пункт</li>
    <li>Третий пункт</li>
</ul>

<!-- Нумерованный список -->
<ol>
    <li>Первый пункт</li>
    <li>Второй пункт</li>
    <li>Третий пункт</li>
</ol>

<!-- Список определений -->
<dl>
    <dt>HTML</dt>
    <dd>Язык разметки гипертекста</dd>
    <dt>CSS</dt>
    <dd>Каскадные таблицы стилей</dd>
</dl>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <div class="practice-section">
                        <h3>Практическое задание</h3>
                        <p>Создайте страницу, которая содержит:</p>
                        <ul>
                            <li>Заголовок первого уровня</li>
                            <li>Два подзаголовка (h2)</li>
                            <li>Несколько параграфов с форматированным текстом</li>
                            <li>Маркированный и нумерованный списки</li>
                        </ul>
                        
                        <div class="code-editor" data-language="html">
                            <textarea></textarea>
                            <div class="editor-controls">
                                <button class="run-code-btn">Запустить код</button>
                                <button class="test-btn">Проверить решение</button>
                            </div>
                            <div class="result-container"></div>
                        </div>
                    </div>

                    <button class="lesson-complete-btn">Завершить урок</button>
                `
            },
            {
                id: 'html-forms',
                title: 'Формы и ввод',
                content: `
                    <h2>Формы в HTML</h2>
                    <p>Формы используются для сбора данных от пользователей. HTML предоставляет множество элементов для создания интерактивных форм.</p>

                    <h3>Основная структура формы</h3>
                    <div class="code-editor" data-language="html">
                        <textarea>
<form action="/submit" method="POST">
    <label for="username">Имя пользователя:</label>
    <input type="text" id="username" name="username" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Пароль:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Отправить</button>
</form>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <h3>Типы полей ввода</h3>
                    <div class="code-editor" data-language="html">
                        <textarea>
<form>
    <!-- Текстовые поля -->
    <input type="text" placeholder="Обычный текст">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Пароль">
    <input type="tel" placeholder="Телефон">
    <input type="number" placeholder="Число">

    <!-- Выбор -->
    <input type="checkbox" id="agree" name="agree">
    <label for="agree">Согласен с условиями</label>

    <input type="radio" name="gender" value="male"> Мужской
    <input type="radio" name="gender" value="female"> Женский

    <!-- Выпадающий список -->
    <select name="country">
        <option value="">Выберите страну</option>
        <option value="ru">Россия</option>
        <option value="us">США</option>
        <option value="uk">Великобритания</option>
    </select>

    <!-- Многострочный текст -->
    <textarea rows="4" cols="50" placeholder="Ваше сообщение"></textarea>
</form>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <div class="practice-section">
                        <h3>Практическое задание</h3>
                        <p>Создайте форму регистрации, которая содержит:</p>
                        <ul>
                            <li>Поля для ввода имени, email и пароля</li>
                            <li>Поле для выбора даты рождения</li>
                            <li>Радио-кнопки для выбора пола</li>
                            <li>Чекбокс для принятия условий</li>
                            <li>Кнопку отправки формы</li>
                        </ul>
                        
                        <div class="code-editor" data-language="html">
                            <textarea></textarea>
                            <div class="editor-controls">
                                <button class="run-code-btn">Запустить код</button>
                                <button class="test-btn">Проверить решение</button>
                            </div>
                            <div class="result-container"></div>
                        </div>
                    </div>

                    <button class="lesson-complete-btn">Завершить урок</button>
                `
            }
        ]
    },
    css: {
        title: 'CSS',
        lessons: [
            {
                id: 'css-intro',
                title: 'Основы CSS',
                content: `
                    <h2>Введение в CSS</h2>
                    <p>CSS (Cascading Style Sheets) - язык стилей, который используется для оформления HTML документов.</p>

                    <h3>Способы подключения CSS</h3>
                    <div class="code-editor" data-language="css">
                        <textarea>
/* Внешний CSS файл (styles.css) */
body {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}

/* Внутренний CSS (в head) */
<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
</style>

/* Инлайн CSS */
<p style="color: blue; font-size: 16px;">Текст с инлайн стилями</p>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <h3>Селекторы CSS</h3>
                    <div class="code-editor" data-language="css">
                        <textarea>
/* Селектор тега */
p {
    color: #333;
}

/* Селектор класса */
.highlight {
    background-color: yellow;
}

/* Селектор ID */
#header {
    background-color: black;
    color: white;
}

/* Комбинированные селекторы */
div p {
    margin: 10px;
}

.container > p {
    padding: 15px;
}

/* Псевдоклассы */
a:hover {
    color: red;
}

button:active {
    background-color: blue;
}
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <div class="practice-section">
                        <h3>Практическое задание</h3>
                        <p>Создайте HTML документ и примените к нему стили:</p>
                        <ul>
                            <li>Задайте стили для body (шрифт, цвет текста, фон)</li>
                            <li>Создайте класс для выделения важного текста</li>
                            <li>Стилизуйте заголовки разных уровней</li>
                            <li>Добавьте hover-эффекты для ссылок</li>
                        </ul>
                        
                        <div class="code-editor" data-language="html">
                            <textarea></textarea>
                            <div class="editor-controls">
                                <button class="run-code-btn">Запустить код</button>
                                <button class="test-btn">Проверить решение</button>
                            </div>
                            <div class="result-container"></div>
                        </div>
                    </div>

                    <button class="lesson-complete-btn">Завершить урок</button>
                `
            },
            {
                id: 'css-flexbox',
                title: 'Flexbox и Grid',
                content: `
                    <h2>Flexbox и Grid Layout</h2>
                    <p>Современные методы создания гибких и отзывчивых макетов в CSS.</p>

                    <h3>Основы Flexbox</h3>
                    <div class="code-editor" data-language="css">
                        <textarea>
/* Контейнер Flexbox */
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

/* Элементы Flexbox */
.flex-item {
    flex: 1;
    min-width: 200px;
    padding: 20px;
}

/* Пример использования */
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <h3>CSS Grid</h3>
                    <div class="code-editor" data-language="css">
                        <textarea>
/* Контейнер Grid */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px;
}

/* Элементы Grid */
.grid-item {
    padding: 20px;
    background-color: #f0f0f0;
}

/* Размещение элементов */
.header {
    grid-column: 1 / -1;
}

.sidebar {
    grid-row: 2 / 4;
}

/* Пример использования */
<div class="grid-container">
    <div class="grid-item header">Header</div>
    <div class="grid-item sidebar">Sidebar</div>
    <div class="grid-item">Content 1</div>
    <div class="grid-item">Content 2</div>
</div>
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <div class="practice-section">
                        <h3>Практическое задание</h3>
                        <p>Создайте адаптивный макет страницы:</p>
                        <ul>
                            <li>Шапка сайта с логотипом и навигацией (Flexbox)</li>
                            <li>Основной контент с сайдбаром (Grid)</li>
                            <li>Карточки товаров в сетке (Grid или Flexbox)</li>
                            <li>Адаптивное поведение при изменении размера экрана</li>
                        </ul>
                        
                        <div class="code-editor" data-language="html">
                            <textarea></textarea>
                            <div class="editor-controls">
                                <button class="run-code-btn">Запустить код</button>
                                <button class="test-btn">Проверить решение</button>
                            </div>
                            <div class="result-container"></div>
                        </div>
                    </div>

                    <button class="lesson-complete-btn">Завершить урок</button>
                `
            }
        ]
    },
    javascript: {
        title: 'JavaScript',
        lessons: [
            {
                id: 'js-intro',
                title: 'Основы JavaScript',
                content: `
                    <h2>Введение в JavaScript</h2>
                    <p>JavaScript - это мощный язык программирования, который позволяет создавать интерактивные веб-страницы.</p>

                    <h3>Основы синтаксиса</h3>
                    <div class="code-editor" data-language="javascript">
                        <textarea>
// Переменные
let name = 'John';
const age = 25;
var oldVar = 'устаревший способ';

// Типы данных
let string = "текст";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = {
    name: "John",
    age: 25
};

// Функции
function sayHello(name) {
    return "Привет, " + name + "!";
}

// Стрелочные функции
const add = (a, b) => a + b;

// Условия
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}

// Циклы
for (let i = 0; i < 5; i++) {
    console.log(i);
}

array.forEach(item => {
    console.log(item);
});
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <h3>Работа с DOM</h3>
                    <div class="code-editor" data-language="javascript">
                        <textarea>
// Получение элементов
const element = document.getElementById('myId');
const elements = document.getElementsByClassName('myClass');
const query = document.querySelector('.mySelector');

// Изменение содержимого
element.textContent = 'Новый текст';
element.innerHTML = '<strong>HTML контент</strong>';

// Работа с классами
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('active');

// События
element.addEventListener('click', () => {
    console.log('Клик!');
});

// Создание элементов
const newDiv = document.createElement('div');
newDiv.textContent = 'Новый элемент';
document.body.appendChild(newDiv);
                        </textarea>
                        <div class="editor-controls">
                            <button class="run-code-btn">Запустить код</button>
                        </div>
                        <div class="result-container"></div>
                    </div>

                    <div class="practice-section">
                        <h3>Практическое задание</h3>
                        <p>Создайте простое веб-приложение:</p>
                        <ul>
                            <li>Форма с полем ввода и кнопкой</li>
                            <li>Список задач (todo list)</li>
                            <li>Возможность добавлять новые задачи</li>
                            <li>Возможность отмечать задачи как выполненные</li>
                            <li>Возможность удалять задачи</li>
                        </ul>
                        
                        <div class="code-editor" data-language="html">
                            <textarea></textarea>
                            <div class="editor-controls">
                                <button class="run-code-btn">Запустить код</button>
                                <button class="test-btn">Проверить решение</button>
                            </div>
                            <div class="result-container"></div>
                        </div>
                    </div>

                    <button class="lesson-complete-btn">Завершить урок</button>
                `
            }
        ]
    }
};

// Добавляем функции для работы с прогрессом
const userProgress = {
    // Загрузка прогресса из localStorage
    load() {
        const savedProgress = localStorage.getItem('courseProgress');
        return savedProgress ? JSON.parse(savedProgress) : {
            completedLessons: [],
            currentLesson: null,
            testResults: {}
        };
    },

    // Сохранение прогресса в localStorage
    save(progress) {
        localStorage.setItem('courseProgress', JSON.stringify(progress));
    },

    // Отметить урок как завершенный
    completeLesson(lessonId) {
        const progress = this.load();
        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
            this.save(progress);
        }
        return progress;
    },

    // Сохранить результаты теста
    saveTestResult(testId, score) {
        const progress = this.load();
        progress.testResults[testId] = score;
        this.save(progress);
        return progress;
    },

    // Получить следующий урок
    getNextLesson(currentLessonId) {
        let found = false;
        for (const section of Object.values(courseContent)) {
            for (let i = 0; i < section.lessons.length; i++) {
                if (found && section.lessons[i]) {
                    return section.lessons[i].id;
                }
                if (section.lessons[i].id === currentLessonId) {
                    found = true;
                }
            }
        }
        return null;
    },

    // Получить предыдущий урок
    getPrevLesson(currentLessonId) {
        let prev = null;
        for (const section of Object.values(courseContent)) {
            for (const lesson of section.lessons) {
                if (lesson.id === currentLessonId) {
                    return prev;
                }
                prev = lesson.id;
            }
        }
        return null;
    }
};

// Экспортируем структуру курса и функции для работы с прогрессом
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { courseContent, userProgress };
} 
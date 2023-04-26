// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: { firstname: 'Ivan', lastname: 'Ivanov' },
  position: 'Junior Fullstack JS Developer',
  salary: '600 $ в місяць',
  address: 'Ukraine, Kyiv',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel: +380670000123',
    },
    linkedin: {
      href: 'https://cutt.ly/87BOThJ',
      text: 'LinkedIn',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: { title: 'Resume | Summary  ' },

    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 year of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team 
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
      skills: [
        'HTML',
        'Handlebars',
        'VS Code',
        'Git',
        'Terminal',
        'NPM',
      ],
    },
    footer,
  })
})

// ================================================

router.get('/', function (req, res) {
  res.render('index', {})
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: { title: 'Resume | Skills' },

    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 year of experience in development. Whenever`,
      },
    },
    footer,
  })
}) // ================================================================
router.get('/education', function (req, res) {
  res.render('education', {
    page: { title: 'Resume | Education' },
    header,
    main: {
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'Handlebars', point: 10, isTop: true },
        { name: 'VS Code & NPM', point: 9, isTop: false },
        { name: 'Git & Terminal', point: 7 },
        { name: 'React.js', point: 0 },
        { name: 'PHP', point: null },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: { title: 'Resume | Work' },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'http://it-brains.com.ua/',
          },
          duration: {
            from: '10.02.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua/',
              about:
                'Airbnb competitor. High-load application for searching apartaments',
              stacks: [
                { name: 'React.js' },
                { name: 'HTML / CSS' },
                { name: 'Nodejs' },
              ],
              awards: [
                {
                  name: 'Background  verification - is a feature that provides users to prove that they are real persons.',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated ',
                },
              ],
              stackAmaunt: 3,
              awardAmaunt: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємороутер до бек-енду
module.exports = router

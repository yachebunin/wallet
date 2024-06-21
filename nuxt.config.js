export default {
  css: [
    '@/assets/css/main.css',
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/i18n.ts'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          about: 'About Us',
          services: 'Services',
          contact: 'Contact Us',
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Submit',
          aboutDescription: 'Information about the company.',
          welcomeDescription: 'Welcome to our cryptocurrency staking service.',
          servicesDescription: 'Details of staking services we provide.'
        },
        ru: {
          welcome: 'Добро пожаловать',
          about: 'О нас',
          services: 'Услуги',
          contact: 'Свяжитесь с нами',
          name: 'Имя',
          email: 'Электронная почта',
          message: 'Сообщение',
          submit: 'Отправить',
          aboutDescription: 'Информация о компании.',
          welcomeDescription: 'Добро пожаловать в наш сервис стекинга криптовалют.',
          servicesDescription: 'Детали предоставляемых нами услуг стекинга.'
        }
      }
    }
  }
}

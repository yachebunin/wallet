import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Context } from '@nuxt/types';

Vue.use(VueI18n);

const messages = {
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
};

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

export default ({ app }: Context) => {
  app.i18n = i18n;
};

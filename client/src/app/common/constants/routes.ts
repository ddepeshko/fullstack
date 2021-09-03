export enum RoutesLinks {
  Overview = 'overview',
  Auth = 'auth',
  Login = 'login',
  Register = 'register',
  Categories = 'categories',
  NewCategory = 'add-category',
  Analytics = 'analytics',
  History = 'history',
  Orders = 'orders',
}

export const LINKS = [
  {
    url: RoutesLinks.Overview,
    title: 'Обзор',
  },
  {
    url: RoutesLinks.Analytics,
    title: 'Аналитика',
  },
  {
    url: RoutesLinks.History,
    title: 'История',
  },
  {
    url: RoutesLinks.Categories,
    title: 'Ассортимент',
  },
  {
    url: RoutesLinks.Orders,
    title: 'Добавить заказы',
  },
];

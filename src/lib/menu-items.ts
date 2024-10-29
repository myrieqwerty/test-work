type MenuItem = {
  id: number;
  title: string;
  path: string;
};

export const MENU_ITEMS: ReadonlyArray<MenuItem> = [
  { id: 0, title: "Преимущества Теle2", path: "/1" },
  { id: 1, title: "Тарифы", path: "/2" },
  { id: 2, title: "Акции и спецпредложения", path: "/3" },
  { id: 3, title: "Промотариф Tele2", path: "/4" },
  { id: 4, title: "Технология eSIM", path: "/5" },
  { id: 5, title: "Подключение нового абонента", path: "/6" },
];

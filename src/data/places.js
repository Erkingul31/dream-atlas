const places = [
    {
        id: 1,
        name: "Париж",
        country: "Франция",
        description: "Город любви, романтики и красивой архитектуры.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
    },
    {
        id: 2,
        name: "Санторини",
        country: "Греция",
        description: "Белоснежные домики и невероятно синее море.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800"
    },
    {
        id: 3,
        name: "Киото",
        country: "Япония",
        description: "Старинные храмы, сады и традиционная архитектура.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800"
    },
    {
        id: 4,
        name: "Мальдивы",
        country: "Мальдивы",
        description: "Тропические острова и прозрачная бирюзовая вода.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800"
    },
    {
        id: 5,
        name: "Рим",
        country: "Италия",
        description: "Город с богатой историей и античными памятниками.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
    },
    {
        id: 6,
        name: "Бали",
        country: "Индонезия",
        description: "Зелёные рисовые террасы, океан и водопады.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800"
    },
    {
        id: 7,
        name: "Нью-Йорк",
        country: "США",
        description: "Город небоскрёбов, парков и ярких огней.",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800"
    },
    {
        id: 8,
        name: "Лондон",
        country: "Великобритания",
        description: "Исторические улицы и знаменитые достопримечательности.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800"
    },
    {
        id: 9,
        name: "Прага",
        country: "Чехия",
        description: "Сказочная архитектура и старинные мостовые.",
        image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800"
    },
    {
        id: 10,
        name: "Дубай",
        country: "ОАЭ",
        description: "Современные небоскрёбы, пустыня и необычные виды.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800"
    },
    {
        id: 11,
        name: "Амстердам",
        country: "Нидерланды",
        description: "Живописные каналы, мостики и цветочные рынки.",
        image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800"
    },
    {
        id: 12,
        name: "Флоренция",
        country: "Италия",
        description: "Город искусства, музеев и красивых соборов.",
        image: "https://images.unsplash.com/photo-1666078332096-e275c0c412a2?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 13,
        name: "Каппадокия",
        country: "Турция",
        description: "Необычные скалы и воздушные шары на рассвете.",
        image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 14,
        name: "Бишкек",
        country: "Кыргызстан",
        description: "Красивый город у подножия величественных гор Ала-Тоо.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
    },
    {
        id: 15,
        name: "Мачу-Пикчу",
        country: "Перу",
        description: "Древний город высоко в зелёных Андах.",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800"
    },
    {
        id: 16,
        name: "Сеул",
        country: "Южная Корея",
        description: "Сочетание современных районов и старинных дворцов.",
        image: "https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 17,
        name: "Барселона",
        country: "Испания",
        description: "Яркая архитектура, море и солнечные улицы.",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800"
    },
    {
        id: 18,
        name: "Венеция",
        country: "Италия",
        description: "Романтичные каналы и прогулки на гондолах.",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800"
    },
    {
        id: 19,
        name: "Лофотенские острова",
        country: "Норвегия",
        description: "Горные вершины, фьорды и северное сияние.",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800"
    },
    {
        id: 20,
        name: "Банф",
        country: "Канада",
        description: "Живописные горы и невероятно голубые озёра.",
        image: "https://images.unsplash.com/photo-1754843349692-e2a322e85642?auto=format&fit=crop&w=1000&q=80"
    }
];

export default places;
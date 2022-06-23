const langArr = {
    "unit": {
        "ru": "Резюме",
        "ua": "Резюме",
        "en": "Resume",
    },
    "name": {
        "ru": "Бочарникова Алёна Викторовна",
        "ua": "Бочарнікова Олена Вікторівна",
        "en": "Olena Bocharnikova",
    },
    "post": {
        "ru": "Менеджер по продажам / Менеджер ВЭД (экспорт)",
        "ua": "Менеджер з продажу / Менеджер ЗЕД (експорт)",
        "en": "Sales manager / FEA manager (export)",
    },
    "phone" : {
        "ru" : "тел.: ",
        "ua" : "тел.: ",
        "en" : "tel.: " ,
    },
    "birthday": {
        "ru": "дата рождения: 03.06.1995",
        "ua": "дата народження: 03.06.1995",
        "en": "date of birth: 03.06.1995",
    },
    "experience": {
        "ru": "ОПЫТ РАБОТЫ",
        "ua": "ДОСВІД РОБОТИ",
        "en": "EMPLOYMENT",
    },
    "experience-1": {
        "ru": "Менеджер по продажам",
        "ua": "Менеджер з продажу",
        "en": "Sales manager",
    },
    "company-1": {
        "ru": "Компания FOLO, г. Харьков",
        "ua": "Компанія FOLO, м. Харків",
        "en": "FOLO Company, Kharkiv",
    },
    "company-1-task": {
        "ru": "(В2В экспорт товаров для спортивного фехтования)",
        "ua": "(В2В експорт товарів для спортивного фехтування)",
        "en": "(B2B export of goods for fencing sport)",
    },
    "date_company-1": {
        "ru": "АПРЕЛЬ 2021 – ФЕВРАЛЬ 2022",
        "ua": "КВІТЕНЬ 2021 – ЛЮТИЙ 2022",
        "en": "APRIL 2021 – FEBRUARY 2022",
    },
    "company-1-list-1": {
        "ru": "Сопровождение клиентов на всех этапах продажи (получение и обработка заказа, выставление счета, контроль оплаты и отгрузки, послепродажный сервис)",
        "ua": "Супровід клієнтів на всіх етапах продажу (отримання та обробка замовлення, виставлення рахунку, контроль оплати та відвантаження, післяпродажний сервіс)",
        "en": "Providing of all sale stages (receipt and processing of orders, invoicing, control of payment and shipment, after-sales service)",
    },
    "company-1-list-2": {
        "ru": "Расширение базы корпоративных клиентов на рынке Европы и США (холодная проработка)",
        "ua": "Розширення бази корпоративних клієнтів на ринку Європи та США (опрацювання холодної бази)",
        "en": "Expanding the base of corporate clients in the European and US markets (cold sales)",
    },
    "company-1-list-3": {
        "ru": "Мониторинг рынка и анализ конкурентов",
        "ua": "Моніторинг ринку та аналіз конкурентів",
        "en": "Market monitoring and competitor analysis",
    },
    "company-1-list-4": {
        "ru": "Участие в выставках, презентация продукции",
        "ua": "Участь у виставках, презентація продукції",
        "en": "Participation in exhibitions, presentation of products",
    },
    "experience-2": {
        "ru": "Менеджер по работе с клиентами ВЭД",
        "ua": "Менеджер по роботі з клієнтами ЗЕД",
        "en": "Account FEA Manager",
    },
    "company-2-task": {
        "ru": "(В2В, экспорт межкомнатных дверей и отделочных материалов)",
        "ua": "(В2В, експорт міжкімнатних дверей та оздоблювальних матеріалів)",
        "en": "(B2B, export of interior doors and finishing materials)",
    },
    "company-2": {
        "ru": "Компания ОМИС, г. Харьков",
        "ua": "Компанія ОМІС, м. Харків",
        "en": "OMIS Company, Kharkiv",
    },
    "date_company-2": {
        "ru": "ИЮНЬ 2017 – СЕНТЯБРЬ 2020",
        "ua": "ЧЕРВЕНЬ 2017 – ВЕРЕСЕНЬ 2020",
        "en": "JUNE 2017 – SEPTEMBER 2020",
    },
    "company-2-list-1": {
        "ru": "Обработка и согласование заказа, расчет плана загрузки",
        "ua": "Обробка та погодження замовлення, розрахунок плану завантаження",
        "en": "Order processing and approval, loading plan calculation",
    },
    "company-2-list-2": {
        "ru": "Подготовка контрактов и документов для таможенного оформления",
        "ua": "Підготовка контрактів та документів для митного оформлення",
        "en": "Preparation of contracts and documents for custom clearance",
    },
    "company-2-list-3": {
        "ru": "Контроль отгрузок, взаимодействие с перевозчиками",
        "ua": "Контроль відвантажень, взаємодія з перевізниками",
        "en": "Control of shipments, work with carriers",
    },
    "company-2-list-4": {
        "ru": "Контроль взаиморасчетов с контрагентами",
        "ua": "Контроль взаєморозрахунків із контрагентами",
        "en": "Control of payments and balance with contractors",
    },
    "company-2-list-5": {
        "ru": "Работа с рекламациями",
        "ua": "Робота з рекламаціями",
        "en": "Work with complaints",
    },
    "company-2-list-6": {
        "ru": "Расчёт бонусных выплат DIY-сетям",
        "ua": "Розрахунок бонусних виплат DIY-мережам",
        "en": "Calculation of bonus payments to DIY networks",
    },
    "company-2-list-7": {
        "ru": "Составление планограмм, анализ продаж, прайсов, конкурентов",
        "ua": "Складання планограм, аналіз продажу, прайсів, конкурентів",
        "en": "Preparation of planograms, analysis of sales, prices, competitors",
    },
    "company-2-list-8": {
        "ru": "Обработка входящих запросов от потенциальных клиентов",
        "ua": "Обробка вхідних запитів від потенційних клієнтів",
        "en": "Work with incoming requests from potential customers",
    },
    "company-2-list-9": {
        "ru": "Подготовка коммерческих предложений",
        "ua": "Підготовка комерційних пропозицій",
        "en": "Preparation of commercial offers",
    },
    "company-2-list-10": {
        "ru": "Перевод документов",
        "ua": "Переклад документів",
        "en": "Translation of documents",
    },
    "education": {
        "ru": "ОБРАЗОВАНИЕ",
        "ua": "ОСВІТА",
        "en": "EDUCATION",
    },
    "education-rank-1": {
        "ru": "Магистр по специальности международная экономика",
        "ua": "Магістр зі спеціальності Міжнародна економіка",
        "en": "Master’s degree in International Economics",
    },
    "education-university-1": {
        "ru": "Харьковский национальный экономический университет имени Семена Кузнеца",
        "ua": "Харківський національний економічний університет імені Семена Кузнеця",
        "en": "Simon Kuznets Kharkiv National University of Economics",
    },
    "education-date-1": {
        "ru": "СЕНТЯБРЬ 2016 - ФЕВРАЛЬ 2018",
        "ua": "ВЕРЕСЕНЬ 2016 - ЛЮТИЙ 2018",
        "en": "SEPTEMBER 2016 - FEBRUARY 2018",
    },
    "education-rank-2": {
        "ru": "Бакалавр по специальности международная экономика",
        "ua": "Бакалавр за спеціальністю міжнародна економіка",
        "en": "Bachelor’s degree in International Economics",
    },
    "education-university-2": {
        "ru": "Харьковский национальный экономический университет имени Семена Кузнеца",
        "ua": "Харківський національний економічний університет імені Семена Кузнеця",
        "en": "Simon Kuznets Kharkiv National University of Economics",
    },
    "education-date-2": {
        "ru": "СЕНТЯБРЬ 2012 - ИЮНЬ 2016",
        "ua": "ВЕРЕСЕНЬ 2012 - ЧЕРВЕНЬ 2016",
        "en": "SEPTEMBER 2012 - JUNE 2016",
    },
    "skills": {
        "ru": "НАВЫКИ",
        "ua": "НАВИЧКИ",
        "en": "SKILLS",
    },
    "skills-lang": {
        "ru": "Английский язык:  уровень В1/В2",
        "ua": "Англійська мова: рівень В1/В2",
        "en": "English: В1/В2 level",
    },
    "pc" : {
        "ru": "Владение ПК:",
        "ua": "Володіння комп’ютером:",
        "en": "Computer skills:",
    },
}
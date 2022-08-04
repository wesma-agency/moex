const header = Vue.createApp({
	data() {
		return {
			showMainMenu: null,

			menuMain: {
				nameMenu: "mainMenu",
				showMainMenuLevelTwoIndex: 0,
				showMainMenuLevelThreeIndex: 0,

				arrItemMenu: [
					{
						nameItem: "Продукты и услуги",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Участникам торгов",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Депозитарное обслуживание",
										linkItem: "/link",
										textItem: "Сервисы по обслуживанию ценных бумаг: хранение, учет прав, проведение расчетов с участием финансовых институтов",
									},

									{
										nameItem: "Оценка платежеспособности",
										linkItem: "/link",
										textItem: "Хеджирование рыночного риска и увеличение возможностей создания торговых стратегий на ожиданиях по длинной ставке",
									},

									{
										nameItem: "Единый счет",
										linkItem: "/link",
										textItem: "Автоматизация переводов ценных бумаг и денежных средств между клиринговыми организациями НРД и НКЦ",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
									},

									{
										nameItem: "Защита информации",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Единый пул обеспечения",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Фьючерсы на корзину ОФЗ",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Клиринговое обслуживание",
										linkItem: "/link",
										textItem: "Безналичные расчёты между странами, компаниями, предприятиями и банками",
									},
								],
							},

							{
								nameItem: "Эмитентам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Депозитарное обслуживание",
										linkItem: "/link",
										textItem: "Сервисы по обслуживанию ценных бумаг: хранение, учет прав, проведение расчетов с участием финансовых институтов",
									},

									{
										nameItem: "Оценка платежеспособности",
										linkItem: "/link",
										textItem: "Хеджирование рыночного риска и увеличение возможностей создания торговых стратегий на ожиданиях по длинной ставке",
									},

									{
										nameItem: "Единый счет",
										linkItem: "/link",
										textItem: "Автоматизация переводов ценных бумаг и денежных средств между клиринговыми организациями НРД и НКЦ",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
									},
								],
							},

							{
								nameItem: "Частным лицам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Депозитарное обслуживание",
										linkItem: "/link",
										textItem: "Сервисы по обслуживанию ценных бумаг: хранение, учет прав, проведение расчетов с участием финансовых институтов",
									},

									{
										nameItem: "Оценка платежеспособности",
										linkItem: "/link",
										textItem: "Хеджирование рыночного риска и увеличение возможностей создания торговых стратегий на ожиданиях по длинной ставке",
									},

									{
										nameItem: "Единый счет",
										linkItem: "/link",
										textItem: "Автоматизация переводов ценных бумаг и денежных средств между клиринговыми организациями НРД и НКЦ",
									},
								],
							},

							{
								nameItem: "Международным инвесторам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
									},

									{
										nameItem: "Защита информации",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Единый пул обеспечения",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Фьючерсы на корзину ОФЗ",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Клиринговое обслуживание",
										linkItem: "/link",
										textItem: "Безналичные расчёты между странами, компаниями, предприятиями и банками",
									},
								],
							},
						],
					},

					{
						nameItem: "Биржевая информация",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Участникам торгов",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Депозитарное обслуживание",
										linkItem: "/link",
										textItem: "Сервисы по обслуживанию ценных бумаг: хранение, учет прав, проведение расчетов с участием финансовых институтов",
									},

									{
										nameItem: "Оценка платежеспособности",
										linkItem: "/link",
										textItem: "Хеджирование рыночного риска и увеличение возможностей создания торговых стратегий на ожиданиях по длинной ставке",
									},

									{
										nameItem: "Единый счет",
										linkItem: "/link",
										textItem: "Автоматизация переводов ценных бумаг и денежных средств между клиринговыми организациями НРД и НКЦ",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
									},

									{
										nameItem: "Защита информации",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Единый пул обеспечения",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Фьючерсы на корзину ОФЗ",
										linkItem: "/link",
										textItem: "Снижение издержек участников на проведение операций на рынках Группы Московская Биржа",
									},

									{
										nameItem: "Клиринговое обслуживание",
										linkItem: "/link",
										textItem: "Безналичные расчёты между странами, компаниями, предприятиями и банками",
									},
								],
							},
						],
					},

					{
						nameItem: "Документы",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Участникам торгов",
								linkItem: "/link",
							},
						],
					},

					{
						nameItem: "Обучение",
						linkItem: "/link",
					},

					{
						nameItem: "Медиа",
						linkItem: "/link",
					},

					{
						nameItem: "О компании",
						linkItem: "/link",
					},
				],
			},
		};
	},

	methods: {
		openMenu(name) {
			this.showMainMenu = name;
		},

		closeMenu() {
			this.showMainMenu = "";
		},

		openMainMenuLevelTwo(index) {
			this.menuMain.showMainMenuLevelTwoIndex = index;
			this.menuMain.showMainMenuLevelThreeIndex = 0;
		},

		openMainMenuLevelThree(index) {
			this.menuMain.showMainMenuLevelThreeIndex = index;
		},

		openMenuDirection(e) {
			// if (this.showMenu === e.target.getAttribute("id")) {
			// 	this.showMenu = null;
			// } else {
			// 	this.showMenu = e.target.getAttribute("id");
			// }
		},

		openMainMenu(e) {
			this.showMenu = e.target.getAttribute("id");
		},
	},
});

header.mount(".header");

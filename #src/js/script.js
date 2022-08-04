const header = Vue.createApp({
	data() {
		return {
			menuMain: {
				nameMenu: "menuMain",
				showMenu: false,
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

			menuDirection: {
				nameMenu: "menuDirection",
				showMenu: false,
				arrItemMenu: [
					{
						nameItem: "Биржа для бизнеса",
						textItem: "Управление денежными активами компаний",
						linkItem: "/link",
					},

					{
						nameItem: "Национальная товарная биржа",
						textItem: "Организация биржевого товарного рынка в России",
						linkItem: "/link",
					},

					{
						nameItem: "Национальный клиринговый центр",
						textItem: "Услуги центрального контрагента и клиринговой организации",
						linkItem: "/link",
					},

					{
						nameItem: "Национальный расчетный депозитарий",
						textItem: "Услуги центрального депозитария, расчетного банка и торгового репозитария",
						linkItem: "/link",
					},

					{
						nameItem: "Финуслуги",
						textItem: "Маркетплейс, созданный чтобы сделать банковские и страховые продукты доступными для населения",
						linkItem: "/link",
					},
				],
			},
		};
	},

	methods: {
		openMainMenuLevelTwo(index) {
			if (this.menuMain.arrItemMenu[index].menuLevelTwo !== undefined) {
				if (this.menuDirection.showMenu === true) {
					this.menuDirection.showMenu = false;
				}
				this.menuMain.showMenu = true;
				this.menuMain.showMainMenuLevelTwoIndex = index;
				this.menuMain.showMainMenuLevelThreeIndex = 0;
			}
		},

		openMainMenuLevelThree(index) {
			this.menuMain.showMainMenuLevelThreeIndex = index;
		},

		closeMainMenu() {
			this.menuMain.showMenu = false;
		},

		openMenuDirection() {
			if (this.menuMain.showMenu === true) {
				this.menuMain.showMenu = false;
			}
			this.menuDirection.showMenu = !this.menuDirection.showMenu;
		},
	},
});

header.mount(".header");

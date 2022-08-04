const header = Vue.createApp({
	data() {
		return {
			menuMain: {
				nameMenu: "menuMain",
				showMenu: false,
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
										nameItem: "Провести IPO",
										linkItem: "/link",
										textItem: "для выпуска акций и их допуска к торгам",
									},

									{
										nameItem: "Заказать мероприятие",
										linkItem: "/link",
										textItem: "для повышения интереса к эмитенту",
									},

									{
										nameItem: "Провести листинг",
										linkItem: "/link",
										textItem: "для включения в список ценных бумаг, допущенных к торгам",
									},

									{
										nameItem: "Выпустить биржевые облигации",
										linkItem: "/link",
										textItem: "для листинга по упрощенным правилам",
									},

									{
										nameItem: "Расчитать стоимость листинга",
										linkItem: "/link",
										textItem: "для уточнения ориентировочной стоимости",
									},

									{
										nameItem: "Поддержка и обслуживание",
										linkItem: "/link",
										textItem: "для мониторинга и контроля за соответсвием бумаг и организаций",
									},

									{
										nameItem: "Иностранным эмитентам",
										linkItem: "/link",
										textItem: "для допуска иностранных ценных бумаг к торгам",
									},
								],
							},

							{
								nameItem: "Частным лицам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Финуслуги",
										linkItem: "/link",
										textItem: "для начинающих инвесторов, открытия вкладов, кредитов и страхования",
									},

									{
										nameItem: " Биржевая информация",
										linkItem: "/link",
										textItem: "для отслеживания хода и итогов торгов ",
									},

									{
										nameItem: "Брокеры",
										linkItem: "/link",
										textItem: "для инвестирования через наших партнеров",
									},

									{
										nameItem: "Инвестиции ",
										linkItem: "/link",
										textItem: "для знакомтсва с инструментами",
									},

									{
										nameItem: " Котировки",
										linkItem: "/link",
										textItem: "для понимания тенденций рынка",
									},
								],
							},

							{
								nameItem: "Международным инвесторам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Спонсируемый доступ",
										linkItem: "/link",
										textItem: "Доступ к подсистемам торгово-клиринговой системы Московской Биржи",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Сегрегированные счета",
										linkItem: "/link",
										textItem: "Позволит снизить  риски при работе на российском рынке",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
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

							{
								nameItem: "Частным лицам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Финуслуги",
										linkItem: "/link",
										textItem: "для начинающих инвесторов, открытия вкладов, кредитов и страхования",
									},

									{
										nameItem: " Биржевая информация",
										linkItem: "/link",
										textItem: "для отслеживания хода и итогов торгов ",
									},

									{
										nameItem: "Брокеры",
										linkItem: "/link",
										textItem: "для инвестирования через наших партнеров",
									},

									{
										nameItem: "Инвестиции ",
										linkItem: "/link",
										textItem: "для знакомтсва с инструментами",
									},

									{
										nameItem: " Котировки",
										linkItem: "/link",
										textItem: "для понимания тенденций рынка",
									},
								],
							},

							{
								nameItem: "Международным инвесторам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Спонсируемый доступ",
										linkItem: "/link",
										textItem: "Доступ к подсистемам торгово-клиринговой системы Московской Биржи",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Сегрегированные счета",
										linkItem: "/link",
										textItem: "Позволит снизить  риски при работе на российском рынке",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
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
										nameItem: "Провести IPO",
										linkItem: "/link",
										textItem: "для выпуска акций и их допуска к торгам",
									},

									{
										nameItem: "Заказать мероприятие",
										linkItem: "/link",
										textItem: "для повышения интереса к эмитенту",
									},

									{
										nameItem: "Провести листинг",
										linkItem: "/link",
										textItem: "для включения в список ценных бумаг, допущенных к торгам",
									},

									{
										nameItem: "Выпустить биржевые облигации",
										linkItem: "/link",
										textItem: "для листинга по упрощенным правилам",
									},

									{
										nameItem: "Расчитать стоимость листинга",
										linkItem: "/link",
										textItem: "для уточнения ориентировочной стоимости",
									},

									{
										nameItem: "Поддержка и обслуживание",
										linkItem: "/link",
										textItem: "для мониторинга и контроля за соответсвием бумаг и организаций",
									},

									{
										nameItem: "Иностранным эмитентам",
										linkItem: "/link",
										textItem: "для допуска иностранных ценных бумаг к торгам",
									},
								],
							},
						],
					},

					{
						nameItem: "Обучение",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Международным инвесторам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Спонсируемый доступ",
										linkItem: "/link",
										textItem: "Доступ к подсистемам торгово-клиринговой системы Московской Биржи",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Сегрегированные счета",
										linkItem: "/link",
										textItem: "Позволит снизить  риски при работе на российском рынке",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
									},
								],
							},
						],
					},

					{
						nameItem: "Медиа",
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
										nameItem: "Провести IPO",
										linkItem: "/link",
										textItem: "для выпуска акций и их допуска к торгам",
									},

									{
										nameItem: "Заказать мероприятие",
										linkItem: "/link",
										textItem: "для повышения интереса к эмитенту",
									},

									{
										nameItem: "Провести листинг",
										linkItem: "/link",
										textItem: "для включения в список ценных бумаг, допущенных к торгам",
									},

									{
										nameItem: "Выпустить биржевые облигации",
										linkItem: "/link",
										textItem: "для листинга по упрощенным правилам",
									},

									{
										nameItem: "Расчитать стоимость листинга",
										linkItem: "/link",
										textItem: "для уточнения ориентировочной стоимости",
									},

									{
										nameItem: "Поддержка и обслуживание",
										linkItem: "/link",
										textItem: "для мониторинга и контроля за соответсвием бумаг и организаций",
									},

									{
										nameItem: "Иностранным эмитентам",
										linkItem: "/link",
										textItem: "для допуска иностранных ценных бумаг к торгам",
									},
								],
							},

							{
								nameItem: "Частным лицам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Финуслуги",
										linkItem: "/link",
										textItem: "для начинающих инвесторов, открытия вкладов, кредитов и страхования",
									},

									{
										nameItem: " Биржевая информация",
										linkItem: "/link",
										textItem: "для отслеживания хода и итогов торгов ",
									},

									{
										nameItem: "Брокеры",
										linkItem: "/link",
										textItem: "для инвестирования через наших партнеров",
									},

									{
										nameItem: "Инвестиции ",
										linkItem: "/link",
										textItem: "для знакомтсва с инструментами",
									},

									{
										nameItem: " Котировки",
										linkItem: "/link",
										textItem: "для понимания тенденций рынка",
									},
								],
							},

							{
								nameItem: "Международным инвесторам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Спонсируемый доступ",
										linkItem: "/link",
										textItem: "Доступ к подсистемам торгово-клиринговой системы Московской Биржи",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Сегрегированные счета",
										linkItem: "/link",
										textItem: "Позволит снизить  риски при работе на российском рынке",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
									},
								],
							},
						],
					},

					{
						nameItem: "О компании",
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
								nameItem: "Частным лицам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Финуслуги",
										linkItem: "/link",
										textItem: "для начинающих инвесторов, открытия вкладов, кредитов и страхования",
									},

									{
										nameItem: " Биржевая информация",
										linkItem: "/link",
										textItem: "для отслеживания хода и итогов торгов ",
									},

									{
										nameItem: "Брокеры",
										linkItem: "/link",
										textItem: "для инвестирования через наших партнеров",
									},

									{
										nameItem: "Инвестиции ",
										linkItem: "/link",
										textItem: "для знакомтсва с инструментами",
									},

									{
										nameItem: " Котировки",
										linkItem: "/link",
										textItem: "для понимания тенденций рынка",
									},
								],
							},

							{
								nameItem: "Международным инвесторам",
								linkItem: "/link",
								menuLeveThree: [
									{
										nameItem: "Спонсируемый доступ",
										linkItem: "/link",
										textItem: "Доступ к подсистемам торгово-клиринговой системы Московской Биржи",
									},

									{
										nameItem: "Технологические решения",
										linkItem: "/link",
										textItem: "Профессиональных решений для доступа к рынкам биржи и электронной торговли",
									},

									{
										nameItem: "Сегрегированные счета",
										linkItem: "/link",
										textItem: "Позволит снизить  риски при работе на российском рынке",
									},

									{
										nameItem: "Клиринговое членство",
										linkItem: "/link",
										textItem: "Участники торгов и участники клиринга теперь могут быть отдельные юридические лица",
									},
								],
							},
						],
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

			menuInfo: {
				nameMenu: "menuInfo",
				showMenu: false,
				arrItemMenu: [
					{
						nameItem: "Рынки",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Фондовый",
								linkItem: "/link",
							},

							{
								nameItem: "Срочный",
								linkItem: "/link",
							},

							{
								nameItem: "Валютный",
								linkItem: "/link",
							},

							{
								nameItem: "Денежный",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок стандартизированных ПФИ ",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок инноваций и инвестиций",
								linkItem: "/link",
							},
						],
					},

					{
						nameItem: "Индексы",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Валютный",
								linkItem: "/link",
							},

							{
								nameItem: "Денежный",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок стандартизированных ПФИ ",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок инноваций и инвестиций",
								linkItem: "/link",
							},
						],
					},

					{
						nameItem: "Биржевая информация",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Валютный",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок инноваций и инвестиций",
								linkItem: "/link",
							},
						],
					},

					{
						nameItem: "Листинг",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Денежный",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок стандартизированных ПФИ ",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок инноваций и инвестиций",
								linkItem: "/link",
							},
						],
					},

					{
						nameItem: "Управление рисками",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Денежный",
								linkItem: "/link",
							},

							{
								nameItem: "Рынок инноваций и инвестиций",
								linkItem: "/link",
							},
						],
					},

					{
						nameItem: "Технологические решения",
						linkItem: "/link",
						menuLevelTwo: [
							{
								nameItem: "Рынок инноваций и инвестиций",
								linkItem: "/link",
							},
						],
					},
				],
			},
		};
	},

	created() {
		this.menuMain.showMainMenuLevelTwoIndex = 0;
		this.menuMain.showMainMenuLevelThreeIndex = 0;

		this.menuInfo.showMainMenuLevelTwoIndex = 0;
	},

	methods: {
		// Методы работы оснвоного меню
		openMainMenuLevelTwo(index) {
			if (this.menuMain.arrItemMenu[index].menuLevelTwo !== undefined) {
				this.menuDirection.showMenu === true ? (this.menuDirection.showMenu = false) : null;
				this.menuInfo.showMenu === true ? (this.menuInfo.showMenu = false) : null;

				this.menuMain.showMenu = true;
				this.menuMain.showMainMenuLevelTwoIndex = index;
				this.menuMain.showMainMenuLevelThreeIndex = 0;
			}
		},

		openMainMenuLevelThree(index) {
			if (this.menuMain.arrItemMenu[this.menuMain.showMainMenuLevelTwoIndex].menuLevelTwo[index].menuLeveThree !== undefined) {
				this.menuMain.showMainMenuLevelThreeIndex = index;
			} else {
				this.menuMain.showMainMenuLevelThreeIndex = null;
			}
		},

		closeMainMenu() {
			this.menuMain.showMenu = false;
		},
		//

		// Метод работы  меню напрвлений
		openMenuDirection() {
			this.menuMain.showMenu === true ? (this.menuMain.showMenu = false) : null;
			this.menuInfo.showMenu === true ? (this.menuInfo.showMenu = false) : null;

			this.menuDirection.showMenu = !this.menuDirection.showMenu;
		},
		//

		// Методы работы меню бургера
		openInfoMenu() {
			this.menuMain.showMenu === true ? (this.menuMain.showMenu = false) : null;
			this.menuDirection.showMenu === true ? (this.menuDirection.showMenu = false) : null;

			this.menuInfo.showMenu = !this.menuInfo.showMenu;
		},

		openInfoMenuLevelTwo(index) {
			if (this.menuInfo.arrItemMenu[index].menuLevelTwo !== undefined) {
				this.menuInfo.showMenu = true;
				this.menuInfo.showMainMenuLevelTwoIndex = index;
			}
		},
		//
	},
});

header.mount(".header");

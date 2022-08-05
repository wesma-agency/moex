const compCurrentDate = {
	data() {
		return {
			currentTime: "",
		};
	},

	created() {
		this.currentDate();
		setInterval(this.currentDate, 1000);
	},

	computed: {
		getCurrentDate() {
			return this.currentTime;
		},
	},

	methods: {
		// Текущая дата в шапке
		currentDate() {
			let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
			let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

			let currentDate = new Date();

			this.currentTime = `${days[currentDate.getDay()]}, ${currentDate.getDay()} ${month[currentDate.getMonth()]} ${currentDate.getHours()} : ${currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes()}`;
		},
	},

	template: `
		<div>
			{{ getCurrentDate }}
		</div>
	`,
};

const compMainMenu = {
	props: {
		objmenu: Object,
	},

	emits: ["eventHoverItemMenu"],

	data() {
		return {};
	},

	template: `
		<nav class="header__main-nav main-nav">
			<ul class="main-nav__list">

				<li class="main-nav__item" v-for="(item, index) in objmenu" :key="index">
					<a :href="item.linkItem" v-on:mouseenter="$emit('eventHoverItemMenu', index)"
						:class="{ '--hover': item.hover && headerMenu.menuMain.showMenu }">
						{{ item.nameItem }}
					</a>
				</li>

			</ul>
		</nav>
	`,
};

const compMainMenuDrop = {
	props: {
		objmenu: Object,
	},

	data() {
		return {
			indexHover: 0,
		};
	},

	created() {},

	methods: {
		hoverItemMenu(index) {
			this.indexHover = index;
		},
	},

	template: `
		<div class="header__main-menu-drop main-menu-drop">
			<div class="container">
			<div class="main-menu-drop__row">
				<div class="main-menu-drop__column">
				<ul class="main-menu-drop__left-list">
					<li class="main-menu-drop__item" v-for="(item, index) in objmenu.menuLevelTwo">
						<a :href="item.linkItem" class="main-menu-drop__link" v-on:mouseenter="hoverItemMenu(index)">
							{{item.nameItem }}
						</a>
					</li>
				</ul>
				</div>

				<div class="main-menu-drop__column">
				<ul class="main-menu-drop__right-list">
					<li class="main-menu-drop__item" v-for="(item, index) in objmenu.menuLevelTwo[indexHover].menuLeveThree">
						<a :href="item.linkItem" class="main-menu-drop__link">{{ item.nameItem }}</a>
						<div class="main-menu-drop__text">
							{{ item.textItem }}
						</div>
					</li>
				</ul>
				</div>
			</div>
			</div>
		</div>
	`,
};

const compMenuDirection = {
	props: {
		objmenu: Object,
	},

	data() {
		return {};
	},

	template: `
		<div class="header__menu-direction menu-direction">
			<div class="container">
			<div class="menu-direction__list">

				<template v-for="(item, index) in objmenu.arrItemMenu" :key="index">
				<div class="menu-direction__item">
					<a :href="item.linkItem" class="menu-direction__name">{{ item.nameItem }}</a>

					<div class="menu-direction__text">{{ item.textItem }}</div>
				</div>
				</template>

			</div>
			</div>
		</div>
	`,
};

const compMenuInfo = {
	props: {
		objmenu: Object,
	},

	data() {
		return {
			indexHover: 0,
		};
	},

	methods: {
		hoverItemMenu(index) {
			this.indexHover = index;
		},
	},

	template: `
		<div class="header__menu-info menu-info">
			<div class="container">
			<div class="menu-info__row">
				<div class="menu-info__column">
					<ul class="menu-info__left-list">

						<li v-for="(item, index) in objmenu.arrItemMenu" :key="index" class="menu-info__item">
							<a :href="item.linkItem" class="menu-info__link" v-on:mouseenter="hoverItemMenu(index)">
								{{item.nameItem }}
							</a>
						</li>

					</ul>
				</div>

				<div class="menu-info__column">
					<ul class="menu-info__right-list">
						<li v-for="(item, index) in objmenu.arrItemMenu[indexHover].menuLevelTwo" :key="index" class="menu-info__item">
							<a :href="item.linkItem" class="menu-info__link">{{ item.nameItem }}</a>
						</li>
					</ul>
				</div>
			</div>
			</div>
		</div>
	`,
};

const compMobileMenu = {
	props: {
		objmenu: Object,
	},

	emits: ["eventOpenSubMenuMobile", "eventCloseMenuMobile"],

	components: {
		"comp-current-date": compCurrentDate,
	},

	template: `
		<div class="mobile-menu">

			<div class="mobile-menu__wrap">

			<div class="mobile-menu__top">
				<div class="mobile-menu__top-group">
				<div class="mobile-menu__logo">
					<img src="./img/logo.png" alt="">
				</div>

				<div class="mobile-menu__close" v-on:click="$emit('eventCloseMenuMobile')"></div>
				</div>

				<div class="mobile-menu__time">
					<comp-current-date></comp-current-date>
				</div>

				<div class="mobile-menu__search main-search">
				<button class="main-search__button" type="submit">

				</button>

				<input class="main-search__input" type="text" placeholder="Поиск">
				</div>

			</div>

			<div class="mobile-menu__middle">

				<div class="mobile-menu__main mobile-main-menu">
				<ul class="mobile-main-menu__list">
					<li class="mobile-main-menu__item" v-for="(item, index) in objmenu.menuMain.arrItemMenu" :key="index">

					<div class="mobile-main-menu__sub-item-group">
						<a :href="item.linkItem">
						{{ item.nameItem }}
						</a>

						<span class="mobile-main-menu__icon-open-sub"
						v-on:click="$emit('eventOpenSubMenuMobile', ({nameMenu: objmenu.menuMain.nameMenu, a: index}))"></span>
					</div>

					<ul class="mobile-main-menu__sub-list" v-if="item.isShowMobile">
						<li class="mobile-main-menu__sub-item" v-for="(itemTwo, indexTwo) in item.menuLevelTwo"
						:key="indexTwo">
						<div class="mobile-main-menu__sub-item-group">
							<a :href="itemTwo.linkItem">
							{{ itemTwo.nameItem }}
							</a>

							<span class="mobile-main-menu__icon-open-sub"
							v-on:click="$emit('eventOpenSubMenuMobile', ({nameMenu: objmenu.menuMain.nameMenu, a: index, b: indexTwo}))"></span>
						</div>

						<ul class="mobile-main-menu__sub-list" v-if="itemTwo.isShowMobile">
							<li class="mobile-main-menu__sub-item"
							v-for="(itemThree, indexThree) in itemTwo.menuLeveThree" :key="indexThree">
							<a :href="itemThree.linkItem">
								{{ itemThree.nameItem }}
							</a>
							</li>
						</ul>

						</li>
					</ul>
					</li>
				</ul>
				</div>

				<div class="mobile-menu__direction mobile-direction-menu">

				<div class="mobile-direction-menu__group"
					v-on:click="$emit('eventOpenSubMenuMobile', ({nameMenu: objmenu.menuDirection.nameMenu}))">
					<div class="mobile-direction-menu__icon">Направления</div>

					<span class="mobile-direction-menu__icon-open-sub"></span>
				</div>

				<ul class="mobile-direction-menu__list" v-if="objmenu.menuDirection.isShowMobile">
					<li v-for="(item, index) in objmenu.menuDirection.arrItemMenu" :key="index"
					class="mobile-direction-menu__item">
					<a :href="item.linkItem" class="mobile-direction-menu__link">{{ item.nameItem }}</a>

					<div class="mobile-direction-menu__text">{{ item.textItem }}</div>
					</li>
				</ul>

				</div>

				<div class="mobile-menu__info mobile-info-menu">
				<div class="mobile-info-menu__group" v-on:click="$emit('eventOpenSubMenuMobile', ({nameMenu: objmenu.menuInfo.nameMenu}))">
					<div class="mobile-info-menu__icon">
					Информация</div>

					<span class="mobile-info-menu__icon-open-sub"></span>
				</div>

				<ul class="mobile-info-menu__list" v-if="objmenu.menuInfo.isShowMobile">
					<li class="mobile-info-menu__item" v-for="(item, index) in objmenu.menuInfo.arrItemMenu" :key="index">

					<div class="mobile-info-menu__sub-item-group">
						<a :href="item.linkItem">
						{{ item.nameItem }}
						</a>

						<span class="mobile-info-menu__icon-open-sub"
						v-on:click="$emit('eventOpenSubMenuMobile', ({nameMenu: objmenu.menuInfo.nameMenu, a: index}))"></span>
					</div>

					<ul class="mobile-info-menu__sub-list" v-if="item.isShowMobile">
						<li class="mobile-info-menu__sub-item" v-for="(itemTwo, indexTwo) in item.menuLevelTwo"
						:key="indexTwo">
						<a :href="itemTwo.linkItem">
							{{ itemTwo.nameItem }}
						</a>
						</li>
					</ul>
					</li>
				</ul>
				</div>

			</div>

			</div>

			<div class="mobile-menu__overlay" v-on:click="$emit('eventCloseMenuMobile')"></div>

		</div>
  `,
};

const header = Vue.createApp({
	data() {
		return {
			isMobile: false,

			headerMenu: {
				isShowMobileMenu: false,

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
			},
		};
	},

	created() {
		this.updateWidth();
		window.addEventListener("resize", this.updateWidth);
	},

	methods: {
		// отслеивание ширины экрана
		updateWidth() {
			if (window.innerWidth <= 1170) {
				this.isMobile = true;
			} else {
				this.isMobile = false;
			}
		},

		// Методы работы оснвоного меню
		closeMainMenu() {
			this.headerMenu.menuMain.arrItemMenu.forEach((element) => (element.isShowDesctop = false));
		},

		hoverItemMenu(advice) {
			this.headerMenu.menuDirection.showMenu === true ? (this.headerMenu.menuDirection.showMenu = false) : null;
			this.headerMenu.menuInfo.showMenu === true ? (this.headerMenu.menuInfo.showMenu = false) : null;

			this.headerMenu.menuMain.arrItemMenu.forEach((element) => (element.isShowDesctop = false));
			this.headerMenu.menuMain.arrItemMenu[advice].isShowDesctop = true;
		},
		//

		// Метод работы  меню напрвлений
		openMenuDirection() {
			this.closeMainMenu();
			this.headerMenu.menuInfo.showMenu === true ? (this.headerMenu.menuInfo.showMenu = false) : null;

			this.headerMenu.menuDirection.showMenu = !this.headerMenu.menuDirection.showMenu;
		},
		//

		// Методы работы меню бургера
		openInfoMenu() {
			this.closeMainMenu();
			this.headerMenu.menuDirection.showMenu === true ? (this.headerMenu.menuDirection.showMenu = false) : null;

			this.headerMenu.menuInfo.showMenu = !this.headerMenu.menuInfo.showMenu;
		},
		//

		// Методы мобильного меню
		openSubMenuMobile(obj) {
			switch (obj.nameMenu) {
				case "menuMain":
					if (obj.b !== undefined) {
						this.headerMenu.menuMain.arrItemMenu[obj.a].menuLevelTwo[obj.b].isShowMobile = !this.headerMenu.menuMain.arrItemMenu[obj.a].menuLevelTwo[obj.b].isShowMobile;
					} else {
						this.headerMenu.menuMain.arrItemMenu[obj.a].isShowMobile = !this.headerMenu.menuMain.arrItemMenu[obj.a].isShowMobile;
					}
					break;
				case "menuDirection":
					this.headerMenu.menuDirection.isShowMobile = !this.headerMenu.menuDirection.isShowMobile;
					break;
				case "menuInfo":
					if (obj.a !== undefined) {
						this.headerMenu.menuInfo.arrItemMenu[obj.a].isShowMobile = !this.headerMenu.menuInfo.arrItemMenu[obj.a].isShowMobile;
					} else {
						this.headerMenu.menuInfo.isShowMobile = !this.headerMenu.menuInfo.isShowMobile;
					}
					break;
			}
		},

		closeMenuMobile() {
			this.headerMenu.isShowMobileMenu = false;
		},
	},

	components: {
		"comp-main-menu": compMainMenu,
		"comp-main-menu-drop": compMainMenuDrop,
		"comp-menu-direction": compMenuDirection,
		"comp-menu-info": compMenuInfo,
		"comp-mobile-menu": compMobileMenu,
		"comp-current-date": compCurrentDate,
	},
});

header.mount(".header");

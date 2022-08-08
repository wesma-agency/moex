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
						:class="{ '--hover': item.isShowDesctop }">
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
						<a :href="item.linkItem" class="main-menu-drop__link" :class="{ '--hover': indexHover === index }" v-on:mouseenter="hoverItemMenu(index)">
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
							<a :href="item.linkItem" class="menu-info__link" :class="{ '--hover': indexHover === index }" v-on:mouseenter="hoverItemMenu(index)">
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
			isLoading: false,
			headerMenu: null,
		};
	},

	async created() {
		await fetch("http://test-dev.altovovu.beget.tech/tender-task/dataJson/headerMenu.json", {
			method: "GET",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				this.headerMenu = data;

				this.isLoading = true;
			});

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

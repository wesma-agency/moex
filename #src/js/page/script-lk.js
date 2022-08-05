const compGraph = {
	props: {
		arrgraphparam: Object,
	},

	data() {
		return {
			lineColor: this.arrgraphparam.movement === "up" ? "#58BD7D" : this.arrgraphparam.movement === "down" ? "#FF0508" : "#58BD7D",
			topColor: this.arrgraphparam.movement === "up" ? "#45B36B" : this.arrgraphparam.movement === "down" ? "#FF0508" : "#45B36B",
			bottomColor: this.arrgraphparam.movement === "up" ? "rgba(69, 179, 107, 0)" : this.arrgraphparam.movement === "down" ? "rgba(255, 5, 8, 0)" : "rgba(69, 179, 107, 0)",
		};
	},

	mounted() {
		this.initGraph();
	},

	methods: {
		initGraph() {
			const chart = LightweightCharts.createChart(this.$refs.chart, {
				priceScale: {
					visible: false,
					borderVisible: false,
					scaleMargins: {
						top: 0.2,
						bottom: 0.25,
					},
				},
				timeScale: {
					visible: false,
					borderVisible: false,
					barSpacing: 18,
				},
				layout: {
					backgroundColor: "#fff",
					textColor: "#fff",
				},
				grid: {
					horzLines: {
						color: "#ffffff",
					},
					vertLines: {
						color: "#ffffff",
					},
				},
				crosshair: {
					horzLines: {
						labelVisible: false,
					},
					vertLine: {
						labelVisible: false,
					},
				},
			});
			const lineSeries = chart.addAreaSeries({
				color: this.lineColor,
				lineColor: this.lineColor,
				topColor: this.topColor,
				bottomColor: this.bottomColor,
				lineWidth: 1,
			});
			lineSeries.setData(this.arrgraphparam.arrValue);
		},
	},

	template: `
        <div ref="chart" class="field-rates__graph">

        </div>
    `,
};

const compFilter = {
	props: {
		objfilter: Object,
	},

	data() {
		return {
			showFilter: false,
		};
	},

	methods: {
		toggleList() {
			this.showFilter = !this.showFilter;
		},

		dropdown(e) {
			let el = this.$el;
			let target = e.target;
			if (el !== target && !el.contains(target)) {
				this.showFilter = false;
			}
		},
	},

	created() {
		document.addEventListener("click", this.dropdown);
	},

	destroyed() {
		document.removeEventListener("click", this.dropdown);
	},

	template: `
        <div class="block-rates__filter-item filter">
            <div class="filter__current" v-on:click="toggleList">{{ objfilter.currentFilter }}</div>
            <div class="filter__list" v-if="showFilter">
                <div v-for="(el, i) in objfilter.listFilter" :key="i" :class="{ active: el.isActive }" class="filter__item">{{ el.nameFilter }}</div>
            </div>
        </div>
    `,
};

const compBlockRates = {
	props: {
		objrate: Object,
	},

	data() {
		return {};
	},

	methods: {},

	components: {
		"comp-graph": compGraph,
		"comp-filter": compFilter,
	},

	template: `
        <div class="block-rates">
            <div class="container">
            <div class="block-rates__wrap">

                <div class="block-rates__group">
                <div class="block-rates__left">
                    <h2 class="block-rates__title title-h2">{{ objrate.blockRatesTitle }}</h2>
                </div>

                <div class="block-rates__right">
                    <div class="block-rates__sort">
                        <div v-for="(item, index) in objrate.blockRatesSort" :key="index" class="block-rates__sort-item sort" :class="{ active: item.isActive }">{{ item.nameSort }}</div>
                    </div>

                    <div class="block-rates__filter">
                        <comp-filter v-for="(item, index) in objrate.blockRatesFilter" :objfilter="item" :key="index"></comp-filter>
                    </div>  
                </div>
                </div>

                <div class="block-rates__table table-rates">
                <div class="table-rates__row">
                    <div class="table-rates__column">
                    <div class="table-rates__caption">
                        <div class="table-rates__title">Разделы</div>

                        <div class="table-rates__sect">
                        </div>
                    </div>

                    <div class="table-rates__category-list">
                    
                        <div v-for="(item, index) in objrate.blockRatesCategory" :key="index" class="table-rates__category-item" :class="{ active : item.isActive }">
                            <span class="table-rates__category-item-name">{{ item.nameCategory }}</span>
                            <span class="table-rates__category-item-value">{{ item.value }}</span>
                        </div>

                    </div>

                    </div>

                    <div class="table-rates__column">
                    <div class="table-rates__caption">
                        <div class="table-rates__title">Наименование</div>
                        <div class="table-rates__title">Новости</div>
                        <div class="table-rates__title">Стоимость</div>
                        <div class="table-rates__title">Изменения</div>
                        <div class="table-rates__title">График 1д.</div>
                    </div>

                    <div class="table-rates__list">
                        <div v-for="(item, index) in objrate.blockRatesItem" :key="index" class="table-rates__item field-rates">

                            <div class="field-rates__row">
                                <div class="field-rates__column" data-content="Наименование">
                                <div class="field-rates__logo">
                                    <img :src="item.itemlogoSrc">
                                </div>
                                <div class="field-rates__group">
                                    <div class="field-rates__name">{{ item.itemName }}</div>
                                    <div class="field-rates__sign">{{ item.itemSign }}</div>
                                </div>
                                </div>

                                <div class="field-rates__column" data-content="Новости">
                                <div class="field-rates__name" :class="{ '--null': item.itemValueNews === 0 }">{{ item.itemValueNews }} новостей</div>
                                </div>

                                <div class="field-rates__column" data-content="Стоимость">
                                <div class="field-rates__name">{{ item.itemValuePrice }} ₽</div>
                                </div>

                                <div class="field-rates__column" data-content="Изменения">
                                <div class="field-rates__group">
                                    <div class="field-rates__price" :class="{ '--green' : item.itemValuePriceDynamic.movement == 'up', '--red' : item.itemValuePriceDynamic.movement == 'down'}">
                                        {{ item.itemValuePriceDynamic.movement == 'up'? '+' : item.itemValuePriceDynamic.movement == 'down'? '-' : '' }}{{ item.itemValuePriceDynamic.percent }} %
                                    </div>

                                    <div class="field-rates__price" :class="{ '--green' : item.itemValuePriceDynamic.movement == 'up', '--red' : item.itemValuePriceDynamic.movement == 'down'}">
                                        {{ item.itemValuePriceDynamic.movement == 'up'? '+' : item.itemValuePriceDynamic.movement == 'down'? '-' : '' }}{{ item.itemValuePriceDynamic.currency }} ₽
                                    </div>
                                </div>
                                </div>

                                <div class="field-rates__column" data-content="График 1д.">
                                    <comp-graph :arrgraphparam="item.itemGraphValue"></comp-graph>

                                    <div class="field-rates__add"></div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    `,
};

const rates = Vue.createApp({
	data() {
		return {
			isLoading: false,
			rates: null,
			// rates: [
			// 	{
			// 		blockRatesTitle: "БИРЖЕВАЯ ИНФОРМАЦИЯ",

			// 		blockRatesSort: [
			// 			{
			// 				isActive: true,
			// 				nameSort: "Популярные",
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameSort: "Взлеты",
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameSort: "Падения",
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameSort: "Новые",
			// 			},
			// 		],

			// 		blockRatesFilter: [
			// 			{
			// 				currentFilter: "Весь мир",
			// 				listFilter: [
			// 					{
			// 						isActive: true,
			// 						nameFilter: "Весь мир 2",
			// 					},
			// 					{
			// 						isActive: false,
			// 						nameFilter: "Весь мир 3",
			// 					},
			// 					{
			// 						isActive: false,
			// 						nameFilter: "Весь мир 4",
			// 					},
			// 					{
			// 						isActive: false,
			// 						nameFilter: "Весь мир 5",
			// 					},
			// 				],
			// 			},
			// 		],

			// 		blockRatesCategory: [
			// 			{
			// 				isActive: true,
			// 				nameCategory: "Акции",
			// 				value: 243,
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameCategory: "Global",
			// 				value: 257,
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameCategory: "ОФЗ",
			// 				value: 513,
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameCategory: "Еврооблигации",
			// 				value: 258,
			// 			},
			// 		],

			// 		blockRatesItem: [
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-1.png",
			// 				itemName: "Мосбиржа",
			// 				itemSign: "MOEX",
			// 				itemValueNews: 16,
			// 				itemValuePrice: 3745.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.49,
			// 					currency: 46.4,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-2.png",
			// 				itemName: "Сбербанк",
			// 				itemSign: "SBER",
			// 				itemValueNews: 4,
			// 				itemValuePrice: 37245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "down",
			// 					percent: 0.49,
			// 					currency: 46.4,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "down",
			// 					arrValue: [
			// 						{ time: "1", value: 90.01 },
			// 						{ time: "2", value: 89.63 },
			// 						{ time: "3", value: 87.64 },
			// 						{ time: "4", value: 85.89 },
			// 						{ time: "5", value: 86.43 },
			// 						{ time: "6", value: 83.01 },
			// 						{ time: "7", value: 82.63 },
			// 						{ time: "8", value: 81.64 },
			// 						{ time: "9", value: 79.89 },
			// 						{ time: "10", value: 78.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-3.png",
			// 				itemName: "Норникель",
			// 				itemSign: "GMKN",
			// 				itemValueNews: 1,
			// 				itemValuePrice: 22245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0,
			// 					currency: 0,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-4.png",
			// 				itemName: "Газпром",
			// 				itemSign: "GAZPR",
			// 				itemValueNews: 0,
			// 				itemValuePrice: 222245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 2,
			// 					currency: 93,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-5.png",
			// 				itemName: "ЛУКОЙЛ",
			// 				itemSign: "LKOH",
			// 				itemValueNews: 3,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-6.png",
			// 				itemName: "Аэрофлот",
			// 				itemSign: "AFLT",
			// 				itemValueNews: 31,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-7.png",
			// 				itemName: "Яндекс",
			// 				itemSign: "YNDX",
			// 				itemValueNews: 23,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-8.png",
			// 				itemName: "TCS Group",
			// 				itemSign: "TCSG",
			// 				itemValueNews: 3,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 		],
			// 	},

			// 	{
			// 		blockRatesTitle: "Индексы",

			// 		blockRatesSort: [
			// 			{
			// 				isActive: true,
			// 				nameSort: "Популярные",
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameSort: "Взлеты",
			// 			},
			// 		],

			// 		blockRatesFilter: [
			// 			{
			// 				currentFilter: "Весь мир",
			// 				listFilter: [
			// 					{
			// 						isActive: true,
			// 						nameFilter: "Весь мир",
			// 					},
			// 					{
			// 						isActive: false,
			// 						nameFilter: "Весь мир 3",
			// 					},
			// 					{
			// 						isActive: false,
			// 						nameFilter: "Весь мир 4",
			// 					},
			// 					{
			// 						isActive: false,
			// 						nameFilter: "Весь мир 5",
			// 					},
			// 				],
			// 			},

			// 			{
			// 				currentFilter: "Текущая",
			// 				listFilter: [
			// 					{
			// 						isActive: true,
			// 						nameFilter: "Текущая",
			// 					},
			// 					{
			// 						isActive: false,
			// 						nameFilter: "Весь мир 3",
			// 					},
			// 				],
			// 			},
			// 		],

			// 		blockRatesCategory: [
			// 			{
			// 				isActive: true,
			// 				nameCategory: "Акции",
			// 				value: 243,
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameCategory: "Облигации",
			// 				value: 257,
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameCategory: "Пенсионные",
			// 				value: 513,
			// 			},

			// 			{
			// 				isActive: false,
			// 				nameCategory: "RUSFAR",
			// 				value: 258,
			// 			},
			// 		],

			// 		blockRatesItem: [
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-1.png",
			// 				itemName: "Мосбиржа",
			// 				itemSign: "MOEX",
			// 				itemValueNews: 16,
			// 				itemValuePrice: 3745.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.49,
			// 					currency: 46.4,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-2.png",
			// 				itemName: "Сбербанк",
			// 				itemSign: "SBER",
			// 				itemValueNews: 4,
			// 				itemValuePrice: 37245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "down",
			// 					percent: 0.49,
			// 					currency: 46.4,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "down",
			// 					arrValue: [
			// 						{ time: "1", value: 90.01 },
			// 						{ time: "2", value: 89.63 },
			// 						{ time: "3", value: 87.64 },
			// 						{ time: "4", value: 85.89 },
			// 						{ time: "5", value: 86.43 },
			// 						{ time: "6", value: 83.01 },
			// 						{ time: "7", value: 82.63 },
			// 						{ time: "8", value: 81.64 },
			// 						{ time: "9", value: 79.89 },
			// 						{ time: "10", value: 78.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-3.png",
			// 				itemName: "Норникель",
			// 				itemSign: "GMKN",
			// 				itemValueNews: 1,
			// 				itemValuePrice: 22245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0,
			// 					currency: 0,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-4.png",
			// 				itemName: "Газпром",
			// 				itemSign: "GAZPR",
			// 				itemValueNews: 0,
			// 				itemValuePrice: 222245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 2,
			// 					currency: 93,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-5.png",
			// 				itemName: "ЛУКОЙЛ",
			// 				itemSign: "LKOH",
			// 				itemValueNews: 3,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-6.png",
			// 				itemName: "Аэрофлот",
			// 				itemSign: "AFLT",
			// 				itemValueNews: 31,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-7.png",
			// 				itemName: "Яндекс",
			// 				itemSign: "YNDX",
			// 				itemValueNews: 23,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 			{
			// 				itemlogoSrc: "./img/icon-logo-8.png",
			// 				itemName: "TCS Group",
			// 				itemSign: "TCSG",
			// 				itemValueNews: 3,
			// 				itemValuePrice: 122245.02,
			// 				itemValuePriceDynamic: {
			// 					movement: "up",
			// 					percent: 0.87,
			// 					currency: 321,
			// 				},

			// 				itemGraphValue: {
			// 					movement: "up",
			// 					arrValue: [
			// 						{ time: "1", value: 80.01 },
			// 						{ time: "2", value: 96.63 },
			// 						{ time: "3", value: 76.64 },
			// 						{ time: "4", value: 81.89 },
			// 						{ time: "5", value: 74.43 },
			// 						{ time: "6", value: 80.01 },
			// 						{ time: "7", value: 96.63 },
			// 						{ time: "8", value: 76.64 },
			// 						{ time: "9", value: 81.89 },
			// 						{ time: "10", value: 74.43 },
			// 					],
			// 				},
			// 			},
			// 		],
			// 	},
			// ],
		};
	},

	async created() {
		await fetch("https://wesma-agency.github.io/moex/js/dataJson/rates.json", {
			method: "GET",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				this.rates = data;

				this.isLoading = true;
			});
	},

	components: {
		"comp-block-rates": compBlockRates,
	},
});

rates.mount(".rates");

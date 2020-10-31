var data = [
	'0:Item 0:100$',
	'1:Item 1:200$',
	'2:Item 2:2300$',
	'3:Item 3:377',
	'4:Item 4:778$',
	'5:Item 5:5$',
];

WidetTable_1.setData(data);

var header = 'id:name:price';
WidetTable_1.setHeader(header);

header = 'id:name:price:date';

let data = [
	{
		id: 0,
		name: 'Item 0',
		price: '100$',
		date: '10/01/2020',
	},
	{
		id: 1,
		name: 'Item 1',
		price: '200$',
		date: '11/12/2020',
	},
	{
		id: 2,
		name: 'Item 2',
		price: '2300$',
		date: '17/11/2010',
	},
	{
		id: 3,
		name: 'Item 3',
		price: '377',
		date: '15/07/1999',
	},
	{
		id: 4,
		name: 'Item 4',
		price: '778$',
		date: '18/10/2027',
	},
	{
		id: 5,
		name: 'Item 5',
		price: '5$',
		date: '17/05/2018',
	},
];
var data = [
	'0:Item 0:100$:10/01/2020',
	'1:Item 1:200$:11/12/2020',
	'2:Item 2:2300$:17/11/2010',
	'3:Item 3:377:15/07/1999',
	'4:Item 4:778$:18/10/2027',
	'5:Item 5:5$:17/05/2018',
];

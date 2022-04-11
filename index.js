let { gacha, rateListing } = require("./gacha-system");

// TODO: You can put the drop rate list to a separated JSON file.
let itemList = [
	{
		rate: 0.001,
		data: {
			id: 1,
			name: "S+ [Evo] Mari",
			isMaterial: false,
		},
	},
	{
		rate: 0.009,
		data: {
			id: 2,
			name: "S [Evo] Mari Doll",
			isMaterial: true,
		},
	},
	{
		rate: 5.095,
		data: {
			id: 3,
			name: "A+ Sand Castle I",
			isMaterial: true,
		},
	},
	{
		rate: 3.432,
		data: {
			id: 4,
			name: "A+ Sand Castle II",
			isMaterial: true,
		},
	},
	{
		rate: 1.563,
		data: {
			id: 5,
			name: "A+ Sand Castle III",
			isMaterial: true,
		},
	},
	{
		rate: 2.697,
		data: {
			id: 6,
			name: "A [Evo] Mari Bag I",
			isMaterial: true,
		},
	},
	{
		rate: 12.586,
		data: {
			id: 7,
			name: "A [Evo] Mari Bag II",
			isMaterial: true,
		},
	},
	{
		rate: 29.667,
		data: {
			id: 8,
			name: "A [Evo] Mari Necklace I",
			isMaterial: true,
		},
	},
	{
		rate: 44.95,
		data: {
			id: 9,
			name: "A [Evo] Mari Necklace II",
			isMaterial: true,
		},
	},
];

// Usage Sample
console.log(gacha(itemList));

// Usage Sample
console.log(rateListing(itemList));

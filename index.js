// Javascript Gacha System

// Make sure the items' drop rate in the list are summed up to 100.

let list = [
	{
		id: 1,
		name: "S+ [Evo] Mari",
		rate: 0.001,
	},
	{
		id: 2,
		name: "S [Evo] Mari Doll",
		rate: 0.009,
	},
	{
		id: 3,
		name: "A+ Sand Castle I",
		rate: 5.095,
	},
	{
		id: 4,
		name: "A+ Sand Castle II",
		rate: 3.432,
	},
	{
		id: 5,
		name: "A+ Sand Castle III",
		rate: 1.563,
	},
	{
		id: 6,
		name: "A [Evo] Mari Bag I",
		rate: 2.697,
	},
	{
		id: 7,
		name: "A [Evo] Mari Bag II",
		rate: 12.586,
	},
	{
		id: 8,
		name: "A [Evo] Mari Necklace I",
		rate: 29.667,
	},
	{
		id: 9,
		name: "A [Evo] Mari Necklace II",
		rate: 44.95,
	},
];

// If the total drop rate is less than or more than 100,
// change totalDropRate variable based on the total drop rate.

let totalDropRate = 100;

// This function will return one item on the list based on the assigned drop rate.
function gacha(items) {
	const random = Math.random() * totalDropRate;

	let itemIdx = 0;
	let rateAccumulation = 0;

	while (rateAccumulation <= random) {
		rateAccumulation += items[itemIdx].rate;
		if (rateAccumulation <= random) itemIdx++;
	}

	return items[itemIdx];
}

// Usage sample
console.log("You got: \n");
for (i = 0; i < 5; i++) {
	console.log(gacha(list).name);
}

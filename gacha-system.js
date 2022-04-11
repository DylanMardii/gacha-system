function gacha(items) {
	let totalDropRate = items.reduce((a, b) => a + b.rate, 0);
	const random = Math.random() * totalDropRate;

	let itemIdx = 0;
	let rateAccumulation = 0;

	while (rateAccumulation <= random) {
		rateAccumulation += items[itemIdx].rate;
		if (rateAccumulation <= random) itemIdx++;
	}

	return items[itemIdx].data;
}

function rateListing(items, digitAfterComma = 3, prefix = "", suffix = "%") {
	return items.reduce((a, b) => {
		return `${a}${prefix}${b.data.name} ${b.rate.toFixed(digitAfterComma)}${suffix}\n`;
	}, "");
}

module.exports = { gacha, rateListing };

# Javascript Gacha System

Source code for gacha system with entirely customizable drop rate for each item.

## How To Use

1. Create a variable that list your items' data and drop rate.  
   You could see the template on the `index.js` file (`itemList` variable).  
   Make sure you assign the drop rate on the `rate` property and the item data on the `data` property.
2. Call the function `gacha` with the item list on the first parameter.  
   It should look something like: `gacha(itemList)`.  
   It will return one random item `data` based on the assigned drop rate.
3. If you need to list the item drop rate, you could use `rateListing`.  
   It should look something like: `rateListing(itemList, 3)`.  
   Where `3` is the number of digit after the comma (`example: 44.950%`).

## Notes

If the drop rate is less or more than 100, the system will calculate it automatically. So you don't have to worry if the gacha result will return nothing.

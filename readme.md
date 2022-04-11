# Javascript Gacha System

Source code for gacha system with entirely customizable drop rate for each item.

## How To Use

1. Create a `list` variable that contain your items' data and drop rate.  
   Make sure you assign the drop rate on the `rate` property.
2. If the total drop rate (from all items) is other than 100, change the `totalDropRate` variable based on the total drop rate. Otherwise, some items won't appear.
3. Call the function `gacha` with the item list on the first parameter.  
   It should look like this: `gacha(list)`.

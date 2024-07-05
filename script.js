var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (const key of Object.entries(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}
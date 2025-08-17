let price = [250, 645, 300, 900, 50];
for (i = 0; i < price.length; i++) {
    original = price[i]
    price[i] *= 0.9;
    console.log("The offer for " + original + " is " + price[i])
}

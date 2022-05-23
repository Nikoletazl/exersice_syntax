function greatestDevisior(a, b) {
    if(b) {
        return greatestDevisior(b, a % b);
    }else {
        console.log(a)
    }
}
greatestDevisior(15, 5)
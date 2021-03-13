
const add = (a, b) => {
    //console.log(arguments);
    return a+b;
    };
    console.log(add(55,1,10010));

    //this keyword - no longer bound

    conset user {
        name: 'Andre',
        cities: ['Philadelphia', 'New York', 'Dublin'],
        printPlacesLived(){
            return this.cities.map(city) => this.name + 'has live in' + city);
        }
    };
    conseole.log(user.printPlacesLived());

    //





const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }

};

console.log(multiplier.multiply());





const cartItems = [
    {id:2 , item: 'A4용지', price: 4000, discount:0},
    {id:3 , item: '모자', price: 12000, discount:0},
    {id:4 , item: '시멘틱72색', price: 150000, discount:0}
];

const cartItemsArray = [];

for(const item of cartItems) {
    const row = [];

    for(const [, value] of Object.entries(item)){
        row.push(value);
    }

    cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join('==='));

const extractValueObject = obj => Object.entries(obj).map(([,value]) => String(value));

const cartItemsString = cartItems.map(extractValueObject).join('===');

console.log(cartItemsArray);
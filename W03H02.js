// P01
const print = ({ name = '', leader = '', members = '' }) => {
  let mStr = '';
  members.forEach((member, index, array) => mStr += index === array.length - 2 ? `${member} and ` : `${member}, `);
  mStr = mStr.slice(0, -2);

  console.log(`Team: ${name}\n` +
              `Leader: ${leader}\n` +
              `Members: ${mStr}`);
}

console.log('---------------Problem 1:---------------');
const group1 = {
  name: 'Justice League',
  leader: 'Wonder Woman',
  members: ['Batman', 'Superman']
};

const group2 = {
  name: 'Avengers',
  members: ['Hulk', 'Thor', 'Captain America']
};

print(group1);
print(group2);

// P02
class Cart {
  constructor(grocerys = []) {
    this.grocerys = grocerys;
    this.grocerysStr = '';
    this.total = 0;
  }

  addItem({ item = '', quantity = 1, price = 'n/a' }) {
    this.grocerys.push({ item, quantity, price });
    
    return this;
  }

  removeItem(itemName) {
    const index = this.grocerys.map(i => i.item.toUpperCase()).indexOf(itemName.toUpperCase());

    if (index !== -1) this.grocerys[index].quantity--;    
    if (this.grocerys[index].quantity <= 0) this.grocerys.splice(index, 1);

    return this;
  }

  addPrice(itemName, itemPrice) {
    const index = this.grocerys.map(i => i.item.toUpperCase()).indexOf(itemName.toUpperCase());
    
    if (index !== -1) this.grocerys[index].price = itemPrice;

    return this;
  }

  addTotal() {
    this.total = this.grocerys.reduce((acc, cur) => acc += cur.price !== 'n/a' ? cur.price * cur.quantity : 0, 0).toFixed(2);

    return this;
  }

  get print() {
    this.grocerys.forEach(({ item, quantity, price }) => {
      this.grocerysStr += `Item: ${item} | Quantity: ${quantity} | Price: ${price} \n`;
    });

    this.grocerysStr += `Total: ${this.total}`;

    return this.grocerysStr;
  }
}

console.log('---------------Problem 2:---------------');
const cart = new Cart();
const total = cart
                  .addItem({ item: 'bread', quantity: '1'})
                  .addItem({ item: 'soup', quantity: '3'})
                  .addItem({ item: 'chips', quantity: '4'})
                  .addItem({ item: 'soda', quantity: '1'})
                  .addPrice('chiPs', 5.99)
                  .removeItem('Chips')
                  .addPrice('soda', 1.04)
                  .addTotal()
                  .print

console.log(total);
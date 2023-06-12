/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let cat = []
  transactions.map((transaction, i) => {
    cat.push({
      category: `${transaction.category}`,
      price: `${transaction.price}`
    })
  })
  cat.reduce((c,i)=>{
    console.log(c);
    return c;
  })
  // console.log(cat)

}

let transactions = [
  {
    itemName: "Dairy Milk",
    category: "Choclate",
    price: 100,
    timestamp: Date.now()
  },
  {
    itemName: "Fresh Milk",
    category: "Milk",
    price: 60,
    timestamp: Date.now()
  },
  {
    itemName: "Laptpop",
    category: "Electronics",
    price: 50000,
    timestamp: Date.now()
  },
  {
    itemName: "Samsung s23",
    category: "Electronics",
    price: 90000,
    timestamp: Date.now()
  },
]

calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;

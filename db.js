const {
  MongoClient
} = require("mongodb");

const dbData = {
  // Order
  "Order": [{
      "_id": 1,
      "item": "almonds",
      "price": 12,
      "quantity": 2
    },
    {
      "_id": 2,
      "item": "pecans",
      "price": 20,
      "quantity": 1
    },
    {
      "_id": 3,
      "item": "pecans",
      "price": 20,
      "quantity": 3
    },
  ],
  // Inventory
  "Inventory": [{
      "_id": 1,
      "sku": "almonds",
      "description": "product 1",
      "instock": 120
    },
    {
      "_id": 2,
      "sku": "bread",
      "description": "product 2",
      "instock": 80
    },
    {
      "_id": 3,
      "sku": "cashews",
      "description": "product 3",
      "instock": 60
    },
    {
      "_id": 4,
      "sku": "pecans",
      "description": "product 4",
      "instock": 70
    },
  ],

  // Users
  "Users": [{
      "username": "admin",
      "password": "MindX@2022"
    },
    {
      "username": "alice",
      "password": "MindX@2022"
    }
  ]
};

exports.connectToDb = async function () {
  const client = new MongoClient("mongodb://localhost:27017");

  await client.connect(() => {
    const database = client.db("Trong");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");
  });

  const db = client.db("Trong");
  const orderCollection = db.collection('orders');
  const inventoryCollection = db.collection('inventories');
  const userCollection = db.collection('users');

  return {
    orderCollection,
    inventoryCollection,
    userCollection
  }
  // await orderCollection.insertMany(dbData.Order);
  // await inventoryCollection.insertMany(dbData.Inventory);
  // await userCollection.insertMany(dbData.Users);
};
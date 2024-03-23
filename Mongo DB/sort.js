db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])

 employee> db.inventory.find()
 //gives all the data
 /*

[
  {
    _id: ObjectId('65fe4e016acc500bced14a13'),
    item: 'journal',
    qty: 25,
    tags: [ 'blank', 'red' ],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    _id: ObjectId('65fe4e016acc500bced14a14'),
    item: 'mat',
    qty: 85,
    tags: [ 'gray' ],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  },
  {
    _id: ObjectId('65fe4e016acc500bced14a15'),
    item: 'mousepad',
    qty: 25,
    tags: [ 'gel', 'blue' ],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
] */
employee> db.inventory.find().limit(1) //gives only first document
employee> db.inventory.find().limit(2) //gives first two document
/*
[
  {
    _id: ObjectId('65fe4e016acc500bced14a13'),
    item: 'journal',
    qty: 25,
    tags: [ 'blank', 'red' ],
    size: { h: 14, w: 21, uom: 'cm' }
  }
] */
employee> db.inventory.find().skip(1) //will skip the first one
employee> db.inventory.find().skip(2) //will skip the first two
/*
[
  {
    _id: ObjectId('65fe4e016acc500bced14a14'),
    item: 'mat',
    qty: 85,
    tags: [ 'gray' ],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  },
  {
    _id: ObjectId('65fe4e016acc500bced14a15'),
    item: 'mousepad',
    qty: 25,
    tags: [ 'gel', 'blue' ],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
] */

//SORTING 1 FOR ASCENDING ORDER and -1 FOR DECENDING ORDER
db.inventory.find({}).sort({qty : 1})
/*
[
  {
    _id: ObjectId('65fe4e016acc500bced14a13'),
    item: 'journal',
    qty: 25,
    tags: [ 'blank', 'red' ],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    _id: ObjectId('65fe4e016acc500bced14a15'),
    item: 'mousepad',
    qty: 25,
    tags: [ 'gel', 'blue' ],
    size: { h: 19, w: 22.85, uom: 'cm' }
  },
  {
    _id: ObjectId('65fe4e016acc500bced14a14'),
    item: 'mat',
    qty: 85,
    tags: [ 'gray' ],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  }
] */

db.inventory.find({}).sort({qty : -1})
/*
[
  {
    _id: ObjectId('65fe4e016acc500bced14a14'),
    item: 'mat',
    qty: 85,
    tags: [ 'gray' ],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  },
  {
    _id: ObjectId('65fe4e016acc500bced14a13'),
    item: 'journal',
    qty: 25,
    tags: [ 'blank', 'red' ],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    _id: ObjectId('65fe4e016acc500bced14a15'),
    item: 'mousepad',
    qty: 25,
    tags: [ 'gel', 'blue' ],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
] */
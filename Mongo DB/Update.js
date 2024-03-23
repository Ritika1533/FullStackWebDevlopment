db.inventory.insertMany( [
    { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
    { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
 ] );
//find
 employee> db.inventory.find({item : "paper"})
 /*[
  {
    _id: ObjectId('65fdb62acee5d69649d14a13'),
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D'
  }
]*/
//update
employee> db.inventory.updateOne(
           { item: "paper" },
            {
             $set: { "size.uom": "cm", status: "P" },
             $currentDate: { lastModified: true }
           }
    )
 /*
 {
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
employee> db.inventory.find({item : "paper"})
[
  {
    _id: ObjectId('65fdb62acee5d69649d14a13'),
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'cm' },
    status: 'P',
    lastModified: ISODate('2024-03-22T16:50:49.315Z')
  }
]
  */

employee> db.inventory.find({qty : {$lt:50}})
/*
[
  {
    _id: ObjectId('65fdb62acee5d69649d14a0f'),
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  },
  {
    _id: ObjectId('65fdb62acee5d69649d14a11'),
    item: 'mousepad',
    qty: 25,
    size: { h: 19, w: 22.85, uom: 'cm' },
    status: 'P'
  },
  {
    _id: ObjectId('65fdb62acee5d69649d14a15'),
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
]
*/
db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    {
      $set: { "size.uom": "in", status: "P" },
      $currentDate: { lastModified: true }
    }
 )
 /*
 {
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
employee> db.inventory.find({qty : {$lt : 50}})
[
  {
    _id: ObjectId('65fdb62acee5d69649d14a0f'),
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'in' },
    status: 'P',
    lastModified: ISODate('2024-03-22T17:00:58.660Z')
  },
  {
    _id: ObjectId('65fdb62acee5d69649d14a11'),
    item: 'mousepad',
    qty: 25,
    size: { h: 19, w: 22.85, uom: 'in' },
    status: 'P',
    lastModified: ISODate('2024-03-22T17:00:58.660Z')
  },
  {
    _id: ObjectId('65fdb62acee5d69649d14a15'),
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'in' },
    status: 'P',
    lastModified: ISODate('2024-03-22T17:00:58.661Z')
  }
]y6u
 */
db.inventory.find() //fetch all query

/* employee> db.inventory.find()
[
  { _id: ObjectId('65fd96f5a19d0c0961d14a0e'), muskurahat: '1344' },
  {
    _id: ObjectId('65fd9707a19d0c0961d14a0f'),
    item: 'canvas',
    qty: 100,
    tags: [ 'cotton' ],
    size: { h: 28, w: 35.5, uom: 'cm' }
  },
  {
    _id: ObjectId('65fd9724a19d0c0961d14a10'),
    item: 'canvas1',
    qty: 100,
    tags: [ 'cotton1' ],
    size: { h: 18, w: 38.5, uom: 'cm' }
  },
  {
    _id: ObjectId('65fd9724a19d0c0961d14a11'),
    item: 'canvas2',
    qty: 700,
    tags: [ 'cotton2' ],
    size: { h: 27, w: 37.5, uom: 'cm' }
  },
  {
    _id: ObjectId('65fd9724a19d0c0961d14a12'),
    item: 'canvas3',
    qty: 60,
    tags: [ 'cotton3' ],
    size: { h: 67, w: 31.5, uom: 'cm' }
  },
  {
    _id: ObjectId('65fd9724a19d0c0961d14a13'),
    item: 'canvas4',
    qty: 20,
    tags: [ 'cotton4' ],
    size: { h: 8, w: 33.5, uom: 'cm' }
  }
] */
db.inventory.find({qty : 700})
/*mployee> db.inventory.find({qty : 700})
[
  {
    _id: ObjectId('65fd9724a19d0c0961d14a11'),
    item: 'canvas2',
    qty: 700,
    tags: [ 'cotton2' ],
    size: { h: 27, w: 37.5, uom: 'cm' }
  }
] */


//IN
db.inventory.find( { status: { $in: [ "A", "D" ] } } )
/* employee> db.inventory.find( { status: { $in: [ "A", "y" ] } } )
[
  {
    _id: ObjectId('65fda34ba19d0c0961d14a14'),
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  },
  {
    _id: ObjectId('65fda34ba19d0c0961d14a15'),
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A'
  },
  {
    _id: ObjectId('65fda34ba19d0c0961d14a18'),
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
] */

//AND
db.inventory.find( { status: "A", qty: 50  } )
/*
employee> db.inventory.find( { status: "A", qty: 50  } )
[
  {
    _id: ObjectId('65fda34ba19d0c0961d14a15'),
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A'
  }
]
*/ 
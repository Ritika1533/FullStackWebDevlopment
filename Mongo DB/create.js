db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )
 db.inventory.insertOne(
   {"muskurahat" : "1344"}
 )
 db.inventory.insertMany(
    [{ item: "canvas1", qty: 100, tags: ["cotton1"], size: { h: 18, w: 38.5, uom: "cm" } },
    { item: "canvas2", qty: 700, tags: ["cotton2"], size: { h: 27, w: 37.5, uom: "cm" } },
    { item: "canvas3", qty: 60, tags: ["cotton3"], size: { h: 67, w: 31.5, uom: "cm" } },
    { item: "canvas4", qty: 20, tags: ["cotton4"], size: { h: 8, w: 33.5, uom: "cm" } }])
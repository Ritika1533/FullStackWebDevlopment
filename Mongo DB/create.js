db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )
 db.inventory.insertOne(
   {"muskurahat" : "1344"}
 )
 //create
 db.inventory.insertMany(
    [{ item: "canvas1", qty: 100, tags: ["cotton1"], size: { h: 18, w: 38.5, uom: "cm" } },
    { item: "canvas2", qty: 700, tags: ["cotton2"], size: { h: 27, w: 37.5, uom: "cm" } },
    { item: "canvas3", qty: 60, tags: ["cotton3"], size: { h: 67, w: 31.5, uom: "cm" } },
    { item: "canvas4", qty: 20, tags: ["cotton4"], size: { h: 8, w: 33.5, uom: "cm" } }])
//read
    db.inventory.insertMany([
      { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
      { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
      { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
      { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
      { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
   ]);
//update
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

 //delete
 db.inventory.insertMany( [
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
] );
let Student = [["ram", "shyam", "rita"],
["ritika", "harsh", "ritik"],
["mummy", "papa", "brother"]]

//====================NESTED FOR..OF LOOP============================

for (let i = 0; i < Student.length; i++) {
    const row = Student[i];
    console.log(`     ROw ${i}     `);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//========================ARRAY FOR..OF LOOP==========================

for (let roww of Student) {
    for (let name of roww) {
        console.log(`the name is ${name}`);
    }
}

//==========================STRING FOR..OF LOOP=========================

for (let ch of "ritika harsh") {
    console.log(ch);
}













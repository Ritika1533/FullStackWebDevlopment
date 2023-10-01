// if you are running a loop and you got the thing that you wanted and want loop to stop running your work is finish then 
//you can use break statement to come out of loop 
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    if (i === 50)
        break;
}
let input = prompt("what would you like to do? 1.add 2.list 3.delete 4.quit");
const todos = ['collect chicken eggs', 'clean litter box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    }
    else if (input === 'add') {
        const newtodo = prompt("what you want to add");
        todos.push(newtodo);
        console.log(`${newtodo} has been added to list`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt("ok,Enter the index you want to delete"));
        let deleteditem = todos.splice(index, 1);
        console.log(`${deleteditem} deleted from list`);
    }

    input = prompt("what would you like to do? 1.add 2.list 3.delete 4.quit");
}
console.log("OK QUIT THE APP!!");
function registerUser(event){
    event.preventDefault();

    const expense = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        expense,
        description,
        category
    }

    localStorage.setItem(expense, JSON.stringify(obj));
    showUserOnScreen(obj);

    function showUserOnScreen(obj){
        const parentItem = document.getElementById("list of expense");
        const childItem = document.createElement('li');

        childItem.textContent = obj.expense + "-" + obj.description + "-" + obj.category;
        parentItem.appendChild(childItem);

        const deleteItem = document.createElement('input');
        deleteItem.type = 'button';
        deleteItem.value = 'DELETE';
        deleteItem.onclick = () => {
            localStorage.removeItem(obj.expense);
            parentItem.removeChild(childItem);
        }

        const editItem = document.createElement('input');
        editItem.type = 'button';
        editItem.value = 'EDIT';
        editItem.onclick = () => {
            localStorage.removeItem(obj.expense);
            parentItem.removeChild(childItem);

            document.getElementById('expense').value = obj.expense;
            document.getElementById('description').value = obj.description;
            document.getElementById('category').value = obj.category;
        }


        parentItem.appendChild(childItem);
        childItem.appendChild(deleteItem);
        childItem.appendChild(editItem);
    }
}
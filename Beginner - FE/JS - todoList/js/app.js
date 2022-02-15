const newElement = () =>{
    if(document.getElementById('task').value.trim() !== '') { 
        const listItemDOM = document.createElement('li');

        listItemDOM.innerHTML = document.getElementById('task').value;
        const button = document.createElement('span');

        //create an array and add to LocalStorage
        const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

        todoList.push(document.getElementById('task').value);
        localStorage.setItem('todoList', JSON.stringify(todoList));

        button.innerHTML = '&times;'; 
        button.classList.add('delete');
        button.onclick = function() {
            button.parentElement.remove();
            // remove span item from array
            const todoListLocal = JSON.parse(localStorage.getItem('todoList')) || [];

            todoListLocal.splice(todoListLocal.indexOf(listItemDOM.innerHTML), 1);
            localStorage.setItem('todoList', JSON.stringify(todoListLocal));
            $('.toast.deleted').toast('show');
        };
        listItemDOM.append(button);
        listItemDOM.onclick = function() {
            listItemDOM.classList.contains('checked') ? 
                listItemDOM.classList.remove('checked') : listItemDOM.classList.add('checked');
        };

        document.getElementById('list').append(listItemDOM); 
        document.getElementById('task').value = '';
        $('.toast.success').toast('show');

    } else {
        $('.toast.error').toast('show');
        document.getElementById('task').value = '';
    }
};

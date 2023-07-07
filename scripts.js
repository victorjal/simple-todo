let todoList = document.getElementById('todoList');
const tasks = [
    { name: 'Comprar comestibles', status: true },
    { name: 'Hacer ejercicios', status: true },
    { name: 'Estudiar para el examen', status: false }
];

const tasksHTML = tasks.map(createTask).join('');
todoList.innerHTML = tasksHTML;

function addValue() {
    const inputTask = document.getElementById('inputTask').value;
    if (!inputTask) {
        return
    }
    tasks.push({
        name: inputTask,
        status: false
    })
    const newTasksHTML = tasks.map(createTask).join('');
    todoList.innerHTML = newTasksHTML;
}

function searchBy( taskStatus ) {
    const newTasks = tasks.filter((task) => task.status === taskStatus);
    const newTasksHTML = newTasks.map(createTask).join('');
    todoList.innerHTML = newTasksHTML;
}

function createTask(task) {
    return'<li>' + task.name + ' > ' + (task.status ? 'done' : 'in course') + '</li>'
}
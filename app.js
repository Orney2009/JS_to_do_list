
let tasks = [] // all the tasks will be stored in this object
let content = document.getElementById("task-list")
let done = document.getElementById("task-done-list")

function addTask(){
    let task = {
        id : Object.entries(tasks).length,
        label : document.getElementById("task-input").value,
        done : false
    }
    document.getElementById("task-input").value = ""
    tasks = [...tasks, task]
    content.innerHTML = displayToDo(tasks)
    
}

function displayToDo(tasks){
    let toDisplay = ""
    tasks.forEach(element => {
        if(!element.done){
            toDisplay += "<li> " + element.label + "</li>" + "<div class = \'button-container\'><button type=\'submit\' class= \'confirm-button-icon\'onclick=\'taskDone(" + element.id + ")\'>Tâche accomplie</button>" + "<button type=\'submit\' class= \'edit-button-icon\'onclick=\'editTask(" + element.id + ")\'>Modifier</button></div>"
        }
    });

    if(toDisplay.length){
        return toDisplay
    }
    else{
        return "<p>Aucune tâche à effectuer pour le moment</p>"
    }
}

function taskDone(id){
    tasks[id].done = true
    content.innerHTML = displayToDo(tasks)
    done.innerHTML = displayDone(tasks)
}

function displayDone(tasks){
    let toDisplay = ""
    tasks.forEach(element => {
        if(element.done){
            toDisplay += "<li> " + element.label + "</li>" + "<button type=\'submit\' class= \'delete-button-icon\'onclick=\'deleteTask(" + element.id + ")\'>Supprimer</button>" 
        }
    });

    if(toDisplay.length){
        return toDisplay
    }
    else{
        return "<p>Aucune tâche effectuée pour le moment</p>"
    }
    
}

function deleteTask(id){
    delete tasks[id]
    done.innerHTML = displayDone(tasks)
}

function editTask(id){
    tasks[id].label = prompt("Modifiez la tâche "+ id+1, tasks[id].label)
    content.innerHTML = displayToDo(tasks)
}
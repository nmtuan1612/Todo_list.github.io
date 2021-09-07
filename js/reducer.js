import storage from "../util/storage.js"

const innit = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null
}

const actions = {
    add({todos}, title) {
        console.log(title)
        if(title) { 
            todos.push({title, completed: false})
            storage.set(todos)
        }
    },
    toggle({todos}, index) {
        todos[index].completed = !todos[index].completed
        storage.set(todos)
    },
    toggleAll({todos}, completed) {
        console.log(completed)
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    destroy({todos}, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    changeFilter(state, type) {
        state.filter = type
        storage.set(state.todos)
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
        console.log(state.editIndex)
    },
    endEdit(state, title) {
        if (state.editIndex !== null) {
            if(title){
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            } else {
                this.destroy(state, state.editIndex)
            }
            state.editIndex = null
        }
    }
}

export default function reducer(state = innit, action, ...args) {
    if(action) { actions[action](state, ...args) }
    return state
}
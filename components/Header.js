import html from "../js/core.js";

function Header() {
    return html`
        <header class="header">
            <h1>todos</h1>
            <input 
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus
                onKeyUp="event.keyCode === 13 && dispatch('add', this.value)" 
            >
        </header>
    `
}

export default Header
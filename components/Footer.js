import html from "../js/core.js";
import { connect } from "../js/store.js"

function Footer({todos, filter, filters}) {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li>
                        <a class="${type === filter && 'selected'}" 
                            href="#/"
                            onClick="dispatch('changeFilter', '${type}')"
                        >
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                `)}
            </ul>
            ${todos.some(filters.completed) && html`
                <button class="clear-completed" onclick="dispatch('clearCompleted')">
                    Clear completed
                </button>`}
        </footer>
    `
}

export default connect()(Footer)
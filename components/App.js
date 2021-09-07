import html from "../js/core.js";
import { connect } from "../js/store.js"
import Header from './Header.js'
import TodoList from './TodoList.js'
import Footer from'./Footer.js'
import Info from './Info.js'

function App({todos}) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
            ${Info()}
    `
}

export default connect()(App)
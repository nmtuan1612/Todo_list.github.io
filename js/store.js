import { createStore } from "./core.js"
import reducer from "./reducer.js"

const { connect, attach, dispatch } = createStore(reducer)

window.dispatch = dispatch

export {
    connect,
    attach
}
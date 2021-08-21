import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {sebscribe, state, StateType, updateNewPostText} from "./redux/state";
// import {subscribe, StateType, state, updateNewPostText} from "./redux/state";
// import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/state'


const rerenderTreeChange = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />,
        </BrowserRouter>, document.getElementById('root'));
}


// rerenderEntireTree()
// rerenderTreeChange()

store.subscribe.bind(store)(rerenderTreeChange);
rerenderTreeChange()

reportWebVitals();

























// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {state, StateType} from "./redux/state";
// import {addPost} from "./redux/state";
//
//
// const rerenderEntireTree = (state: StateType) => {
//     ReactDOM.render (
//         <React.StrictMode>
//             <App
//             state={state}
//             addPost={addPost}
//             />
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// rerenderEntireTree(state)
//


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


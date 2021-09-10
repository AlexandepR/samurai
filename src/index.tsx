import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/state'


const rerenderTreeChange = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                // addPost={store.addPost}
                // updateNewPostText={store.updateNewPostText}
            />,
        </BrowserRouter>, document.getElementById('root'));
}


store.subscribe(rerenderTreeChange);
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


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {RootStateType, store, StoreType} from './redux/store'
import {Provider} from "react-redux";
// import StoreContext, {Provider} from "./StoreContext";


const rerenderTreeChange = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
            {/*<App*/}
            {/*    store={store}*/}
            {/*/>,*/}
        </BrowserRouter>,
        document.getElementById('root'));
}

// rerenderTreeChange(store.getState())
//
// store.subscribe(rerenderTreeChange);
// rerenderTreeChange(store.getState());   ///42 lesson

// store.subscribe(() => {
//     rerenderTreeChange(store.getState());
// })
// rerenderTreeChange()


store.subscribe(rerenderTreeChange);
rerenderTreeChange()


reportWebVitals();


// store.subscribe(rerenderTreeChange);
// rerenderTreeChange()
//
// reportWebVitals();


// const rerenderTreeChange = (state: RootStateType) => {
//
//     ReactDOM.render(
//         <BrowserRouter>
//             <App
//                 store={store}
//                 // addPost={store.addPost}
//                 // updateNewPostText={store.updateNewPostText}
//             />,
//         </BrowserRouter>, document.getElementById('root'));
// }
//
// rerenderTreeChange(store.getState())
//
// store.subscribe(rerenderTreeChange);
// rerenderTreeChange(store.getState());   ///42 lesson
// store.subscribe(() => {
//     rerenderTreeChange(state);
// })
// reportWebVitals();
//
//
// //
// // store.subscribe(rerenderTreeChange);
// // rerenderTreeChange()
// //
// // reportWebVitals();


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


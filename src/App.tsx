import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from './components/Music/Music'
import {store, StoreType} from "./redux/store";
// import {addPost} from "./redux/state";




type AppPropsType = {
    store: StoreType

}

const App: React.FC <AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render ={ () => <Dialogs
                               dialogs={state.dialogsPage.dialogs}
                               messages={state.dialogsPage.messages}
                               newMessageBody={state.dialogsPage.newMessageBody}
                               dispatch={props.store.dispatch.bind(props.store)}
                           /> } />
                    <Route path='/profile'
                           render={ () => <Profile
                               store={props.store}
                               profilePostPage={state.profilePostPage}
                               dispatch={props.store.dispatch.bind(props.store)}
                               // addPost={props.store.addPost.bind(props.store)}
                               // updateNewPostText={props.updateNewPostText}
                           /> } />

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

// type MessageType = {
//     message: string
// }

// function HelloMessage(props: MessageType) {
//
//     let postMessageRef = React.createRef();
//
//     const addPost = () => {
//
//     }
//     return <div>
//         {props.message}
//         <textarea ref={post}></textarea>
//         <button onClick={addPost}>add post</button>
//     </div>
// }

export default App;

















// type AppPropsType = {
//     state: StateType
// }
//
// const App: React.FC <AppPropsType> = (props) => {
//
//     return (
//         <BrowserRouter>
//             <div className='app-wrapper'>
//                 <Header/>
//                 <Navbar/>
//                 <div className='app-wrapper-content'>
//                     <Route path='/dialogs'
//                            render ={ () => <Dialogs
//                                dialogs={props.state.dialogsPage.dialogs}
//                                messages={props.state.messagePage.messages}/> } />
//                     <Route path='/profile'
//                            render={ () => <Profile
//                                state={props.state} /> } />
//
//                     <Route path='/news' component={News}/>
//                     <Route path='/music' component={Music}/>
//                     <Route path='/settings' component={Settings}/>
//                 </div>
//             </div>
//         </BrowserRouter>
//     )
// }
//
//
// export default App;

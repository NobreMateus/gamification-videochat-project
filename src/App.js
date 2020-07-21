import React from 'react';
import './App.css';
import DailyIframe from '@daily-co/daily-js';
//let callFrame = DailyIframe.wrap(MY_IFRAME);
import Chat from './components/Chat/Chat'
import Ranking from './components/Ranking/Ranking'
import VideoCall from './components/VideoCall/VideoCall'
import FillName from './components/FillName/FillName'
import firebase from 'firebase'
import Data from './data/data'

const firebaseConfig = Data

class App extends React.Component {


  // const frame = DailyIframe.createFrame({
  //   iframeStyle:{
  //     position: 'fixed',
  //     border: '1px solid red',
  //     width: '375px',
  //     height: '450px',
  //     right: '1em',
  //     bottom: '1em'
  //   },
  //   showLeaveButton: true,
  //   showFullscreenButton: true
  // })

  // frame.join({url: 'https://mateusnobre.daily.co/Testando'})
  constructor(props) {
    super(props)
    this.state = {
      gamification: <FillName enterFunction={this.enter.bind(this)}></FillName>,
      name: "vazio",
      userId: 0
    }
  }
  componentDidMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <div className="App">
        {/* <frame></frame> */}
        <div className="videocall-container">
          <div className="videocall">
            <VideoCall></VideoCall>
          </div>
        </div>
        <div className="gamification-container">
          {this.state['gamification']}
        </div>
      </div>
    );
  }

  enter(name, userId) {

    
    
    this.setState({
      gamification:
        <div className="gamification-child">
          <div className="gamification-ranking">
            <Ranking></Ranking>
          </div>
          <div className="gamification-chat">
            <Chat senderName={name} userId={userId} ></Chat>
          </div>
        </div>,
      name: name,
      userId: userId
    })

    
    firebase.database().ref('/users/'+userId).set({
      name: name,
      points:0,
      id: userId
    })

  }

}

export default App;

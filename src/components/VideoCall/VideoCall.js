import React from 'react';
import './VideoCall.css';
import DailyIframe from '@daily-co/daily-js';
// let callFrame = DailyIframe.wrap(MY_IFRAME);

class VideoCall extends React.Component {

  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  componentDidMount() {
    
    this.daily = DailyIframe.wrap(this.iframeRef.current);
    this.daily.join({ url: 'https://mateusnobre.daily.co/Testando' });
  }

  // frame = DailyIframe.createFrame({
  //   iframeStyle:{
  //     // position: 'static',
  //     // border: '1px solid red',
  //     // width: '375px',
  //     // height: '450px',
  //     // right: '1em',
  //     // bottom: '1em'
  //   },
  //   showLeaveButton: true,
  //   showFullscreenButton: true
  // })


  
  render(){
    // this.frame.join({url: 'https://mateusnobre.daily.co/Testando'})
    return (
      <div className="VideoCall">
          
          <iframe className="Video-Frame"
             title="video call iframe"
             ref={this.iframeRef}
             allow="camera; microphone; fullscreen"
           ></iframe>

      </div>
    );
  }
}

export default VideoCall;
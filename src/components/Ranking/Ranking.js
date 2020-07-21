import React from 'react';
import './Ranking.css';
import RankingItem from './RankingItem'
import firebase from 'firebase'


class Ranking extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    firebase.database().ref('/users').on("child_added", this.updateUsers.bind(this))
    firebase.database().ref('/users').on("child_changed", this.updateUsersPoints.bind(this))
  }

  render() {

    let orderedUsers = this.state['users'].sort((a, b) => b['points'] - a['points'])
    
    return (
      <div className="Ranking">

        {orderedUsers.map((u,i) =>
          <RankingItem  
            position = {i+1}
            name = {u['name']}          
            points={u['points']}          
          />
        )}

      </div>
    );
  }

  updateUsers(params) {
    var users = this.state['users']

    users.push(params.val())

    this.setState({
      users: users
    })
  }

  updateUsersPoints(params){
    var users = this.state['users']

    users = users.map(u=>{
      
      if(u['id']==params.key){
        u['points'] = params.val()['points']
        return u
      }else{
        return u
      }
    
    })
      

    this.setState({
      users: users
    })
  }

}

export default Ranking;
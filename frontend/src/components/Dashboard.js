import React, { Component } from 'react';
import AvailableEvents from './AvailableEvents';
import YourEvents from './YourEvents';
import PastEvents from './PastEvents';
import Event from './Event';
import iconaImg from '../icon.jpg'

class Dashboard extends Component{
render (){
  return (
    <div>
      <div className="user-info">
        <span>Gabriele</span>
        <img src={iconaImg} alt="Icona" className="icona"
        style={{ width: '30px', height: '30px'}} />
      </div>
      <h2 style={{marginLeft : '30px'}}>Eventi Futuri</h2>
      <AvailableEvents />
      <Event descrizione={'ciao'} data={'11/07'}/>
      <Event descrizione={'ciao'} data={'11/07'}/>

      <h2 style={{marginLeft : '30px'}}>Eventi Registrati</h2>
      <YourEvents />
      <Event descrizione={'ciao'} data={'11/07'}/>

      <h2 style={{marginLeft : '30px'}}>Eventi Passati</h2>
      <PastEvents />
      <Event descrizione={'ciao'} data={'11/07'}/>
    </div>
  );
}
}

export default Dashboard;
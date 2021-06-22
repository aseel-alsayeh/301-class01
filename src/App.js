import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
    return(
      <div>
      <Nav/>
      <Main />s
      <SelectedBeast/>
      <Footer/>
      </div>
    )
  }
}

export default App;

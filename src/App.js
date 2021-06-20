import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <div>
      <Nav/>
      <Main/>
      <Footer/>
      </div>
    )
  }
}

export default App;

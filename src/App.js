import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import hbdata from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      horndata:hbdata,
      show:false,
      data:{},
    }
  }

  handleFunctionToOpen =(d)=>{
    this.setState({
      
      show:true,
      data:d,
    })
  }
  handleFunctionToClose =()=>{
    this.setState({
      show:false,
    })
  }


  render(){
    return(
      <div>
      <Nav/>
      <Main selectModal={this.handleFunctionToOpen} dates={this.state.horndata}/>
      <SelectedBeast showdata={this.state.show} handleFunctionToClose={this.handleFunctionToClose} data={this.state.data}/>
      <Footer/>
      </div>
    )
  }
}

export default App;

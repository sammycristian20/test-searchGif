import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true,
      selectedGif: null,
      modalIsOpen: false
    };
  } 
  openModal(gif) {
    this.setState({
        modalIsOpen: true,
        selectedGif: gif
    });
}

closeModal() {
    this.setState({
        modalIsOpen: false,
        selectedGif: null
    });
}
  componentDidMount() {
    this.performSearch();
  }
  //in this metod get Giphy and set apiKEY
  performSearch = (query = 'Develoer') => {
    // Api key is my owner in chase you can change apiKEY//
    let apiKey = `XWpMbxmGKqnKYA88O6rV17z34CcWmpMO`;
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=`+apiKey)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error in charge data', error);
      });    
  }
  
  render() { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gif Seacrh</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loanding Data...</p>
             : <GifList data={this.state.gifs}  onGifSelect={selectedGif => this.openModal(selectedGif) }/>
          }
          
                 
        </div>
      </div>
    );
  }
}

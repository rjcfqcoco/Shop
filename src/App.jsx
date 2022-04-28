import React from "react";
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import Items from "./companents/Items";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items:[
        {
          id:1,
          title:'Dualsens',
          img:'Dualsens.jpg',
          desc: 'Лучший Dualsens по самым нзким ценам, не за что не прогадаешь',
          category:'controllers',
          price:'69.99',
        },
        {
          id:2,
          title:'Logitech g102',
          img:'Mouse.png',
          desc: 'Лучшая мышь на рынке по низкой цене, не за что не прогадаешь',
          category:'mouses',
          price:'31.99',
        },
        {
          id:3,
          title:'A4Tech Bloody B120',
          img:'KeyBoard.jpg',
          desc: 'Лучший клавиатура  по самым нзким ценам, не за что не прогадаешь',
          category:'KeyBoards',
          price:'36.99',
        },
        {
          id:4,
          title:'Alienware 34 QD-OLED ',
          img:'Monitor.jpg',
          desc: 'Лучший манитор в мире по самым нзким ценам, не за что не прогадаешь',
          category:'Monitors',
          price:'1999.99'
        },
        {
          id:5,
          title:'Nvidia GeForce RTX 3080',
          img:'Videocard.png',
          desc: 'Лучшая видео карте по версии сайта pcgamer.com по самым нзким ценам, не за что не прогадаешь',
          category:'Videocards',
          price:'2869.99',
        },
        {
          id:6,
          title:'LOGITECH G923',
          img:'Rul.wepb',
          desc: 'Лучший игравой руль по самым нзким ценам, не за что не прогадаешь',
          category:'controllers',
          price:'478.88',
        },
      ]
    }
  }
  render(){
  return (
    <div className = 'wrapper'>
    <Header />
    <Items items={this.state.items} />
    <Footer /> 
    </div>
  );
  }
}

export default App;

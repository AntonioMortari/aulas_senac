import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/'
import Section from './components/Section/'
import ItemList from './components/ItemList'

import './index.css'

// dados
const dataGames = [
  {
      name:'Clash Royale',
      url:'https://www.twitch.tv/directory/game/Clash%20Royale',
      src:'https://static-cdn.jtvnw.net/ttv-boxart/491168_IGDB-144x192.jpg',
  },

  {
      name:'Call Of Duty Black Ops II',
      url:'https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Black%20Ops%20II',
      src:'https://static-cdn.jtvnw.net/ttv-boxart/34134_IGDB-144x192.jpg',
  },

  {
      name:'Minecraft',
      url:'https://www.twitch.tv/directory/game/Minecraft',
      src:'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg',
  },

  {
      name:'TFT',
      url:'https://www.twitch.tv/directory/game/Teamfight%20Tactics',
      src:'https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg',
  },
  
]

const dataChannels = [
  {
    url:'https://www.twitch.tv/maykbrito',
    src:'https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png',
    name:'Mayk Brito'
  },

  {
    url:'https://www.youtube.com/@nostalgia',
    src:'https://yt3.googleusercontent.com/ytc/AOPolaRZEInWGxcdeS3IaWFsMYDEBoJ79HQP-FuHDYKXdQ=s176-c-k-c0x00ffffff-no-rj',
    name:'Nostalgia'
  },

  {
    url:'https://www.youtube.com/@CursoemVideo',
    src:'https://yt3.googleusercontent.com/ytc/AOPolaQrg759hoiNeF-VP5cQ4cjYwTGyCb1Zg3_CYrHpwg=s176-c-k-c0x00ffffff-no-rj',
    name:'Curso em vídeo'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <main>
      <Section title="Meus jogos" subtitle="Os games que eu mais curto jogar!">
          {
            dataGames.map(item =>{
              return(
                  <ItemList
                      name={item.name}
                      url={item.url}
                      src={item.src}
                  />
              )
          })
          }
      </Section>

      <Section title="Canais e Streamers" subtitle="Lista de canais e transmissões que não perco!">
          {
            dataChannels.map(item =>{
              return(
                  <ItemList
                      name={item.name}
                      url={item.url}
                      src={item.src}
                  />
              )
            })
          }
      </Section>
    </main>
  </React.StrictMode>,
)

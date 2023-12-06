import React, {useState} from 'react'
import "./App.css"
import data from "./data"

const App = () => {
  const [search, setSearch] = useState("")
  return (
    <div className='container'>
      <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
      <div className='input'>
        <input type="text" placeholder='Konsey Üyesi Giriniz' onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className="cards">
        {data.filter((item) => {
          if(search === "") {
            return item
          } else if (item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return item
          } else {
            return null
          }
        }).map((item) =>{
          return(
            <div className="card" key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.Description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

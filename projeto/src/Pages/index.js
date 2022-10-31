
import { useState } from 'react';
import Header from '../componentes/Header';
import api from '../Services/api';
import './styles.css';

function App() {
    const [search,setSearch] = useState('')
    const [nome,setNome] = useState("");
    const [avatar,setAvar] = useState('');
    const [bio,setBio] = useState('');
  async function seachGithub(){
    
        
      try {
        const response = await api.get(`/${search}`)
        setNome(response.data.nome);
        setAvar(response.data.avatar_url);
        setBio(response.data.bio)
      } catch (error) {
          console.log(error)
      }
    }
  return (
    <>
    <Header/>
    <div className="content-app">
      <div className='content-second-app'>
        <h1>Procurando Perfis do github</h1>
          <form onSubmit={seachGithub}>
              <input
                type='text'
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
              >
              </input>
              < div className='btn-button'>
              <button onClick={seachGithub}>
                Buscar
              </button>
              </div>
              <div className='content'>
                <img src={avatar} alt='logo'>
                </img>
                <strong>{nome}</strong>
                <p>{bio}</p>
              </div>
          </form>
      </div>
    </div>
    </>
  );
}

export default App;

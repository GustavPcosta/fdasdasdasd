import {Route,Routes} from 'react-router-dom';
import App from './Pages/index'
function MainRouts(){
    return(
        <Routes>
            <Route path='/'element={<App/>}></Route>
        </Routes>
    )
}

export default MainRouts
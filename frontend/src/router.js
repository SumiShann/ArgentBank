import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';

export default function Router (){
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path="/*" />
        </Routes>
    )
}
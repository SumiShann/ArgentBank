import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';

export default function Router (){
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/profile' element={<User />} />
            <Route path="/*" />
        </Routes>
    )
}
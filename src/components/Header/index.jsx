import React from 'react'
import { Logo, Nav, NavMenu, UserImg,Login,LoginContainer } from './style'

import logo from '../../assets/img/logo.svg';
import home from '../../assets/img/home-icon.svg';
import search from '../../assets/img/search-icon.svg';
import watchlist from '../../assets/img/watchlist-icon.svg';
import origin from '../../assets/img/original-icon.svg';
import movies from '../../assets/img/movie-icon.svg';
import series from '../../assets/img/series-icon.svg';

import Block from './Block';

//firebase 
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    const [user] = useAuthState(auth);
    const SignOut = () => {
        auth.signOut();
      }


    return (
        <Nav>
            <Logo src={logo} alt="" />
            {!user ? <LoginContainer><Login onClick={googleSignIn}>Login</Login></LoginContainer> :
                <>

                    <NavMenu>
                        <Block title="Home" to="/" src={home} />
                        <Block title="Search" to="/" src={search} />
                        <Block title="Watchlist" to="/" src={watchlist} />
                        <Block title="Originals" to="/" src={origin} />
                        <Block title="Movies" to="/" src={movies} />
                        <Block title="Series" to="/" src={series} />
                    </NavMenu>
                    <UserImg src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0" alt="" onClick={SignOut} />
                </>}
        </Nav>
    )
}

export default Header
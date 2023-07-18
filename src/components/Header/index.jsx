import React, { useEffect, useState } from 'react'
import { Logo, Nav, NavMenu, UserImg } from './style'

import logo from '../../assets/img/logo.svg';
import home from '../../assets/img/home-icon.svg';
import search from '../../assets/img/search-icon.svg';
import watchlist from '../../assets/img/watchlist-icon.svg';
import origin from '../../assets/img/original-icon.svg';
import movies from '../../assets/img/movie-icon.svg';
import series from '../../assets/img/series-icon.svg';

import Block from './Block';


const Header = () => {
    return (
        <Nav>
            <Logo src={logo} alt="" />
                    <NavMenu>
                        <Block title="Home" href="#" src={home} />
                        <Block title="Search" href="#" src={search} />
                        <Block title="Watchlist" href="#" src={watchlist} />
                        <Block title="Originals" href="#" src={origin} />
                        <Block title="Movies" href="#" src={movies} />
                        <Block title="Series" href="#" src={series} />
                    </NavMenu>
                    <UserImg src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </Nav>
    )
}

export default Header
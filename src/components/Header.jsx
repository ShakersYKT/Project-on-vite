import React, { PureComponent } from 'react'
import logo from '../assets/logo.png';

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div className="bg-black text-lg">
        <ul className="flex space p-4">
            <li className="font-bold text-white" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="App Logo" width="30" height="30" style={{ marginRight: '0.5rem' }}/>ДРОМ</li>
            <div className="flex-grow flex justify-center space-x-5">
                <li><a href="/" style={{ color: 'white' }}>Автомобили</a></li>
                <li><a href="/about" style={{ color: 'white' }}>Запчасти</a></li>
                <li><a href="/blog" style={{ color: 'white' }}>Каталог</a></li>
                <li><a href="/reviews" style={{ color: 'white' }}>Отзывы</a></li>
            </div>
        </ul>
        </div>
        )
    }
}

export default Header
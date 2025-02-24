import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="bg-green-500 text-lg">
            <ul className="flex space p-4">
            <div className="flex-grow flex space-x-5">
                <a href="/" style={{ color: 'blue' }}>Автомобили</a>
                <a href="/about" style={{ color: 'blue' }}>Запчасти</a>
                <a href="/blog" style={{ color: 'blue' }}>Каталог</a>
                <a href="/reviews" style={{ color: 'blue' }}>Отзывы</a>
                <a href="/tires" style={{ color: 'blue' }}>Шины и Диски</a>
                <a href="/moto" style={{ color: 'blue' }}>Мототехника</a>
                <a href="/pdd" style={{ color: 'blue' }}>Правила дорожного движения</a>
                <a href="/dogovor" style={{ color: 'blue' }}>Договор купли-продажи</a>
                <a href="/news" style={{ color: 'blue' }}>Новости</a>
                <a href="/roadtrips" style={{ color: 'blue' }}>Автопутешествия</a>
                <a href="/security" style={{ color: 'blue' }}>Безопасность</a>
                <a href="/tex" style={{ color: 'blue' }}>Техподдержка</a>
            </div>
            </ul>
            </div>
        )
    }
}

export default Footer
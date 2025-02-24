import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
        <div className="bg-gray-500 text-lg">
        <ul className="flex space p-4">
            <a>Добро пожаловать на дром!</a>
        </ul>
        </div>
        )
    }
}

export default Home

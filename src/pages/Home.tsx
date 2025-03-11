import React, { PureComponent, ReactNode } from 'react'
import fon from '../assets/fon.png';

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
            <div
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${fon})` }}>
            </div>
        );
    }
}

export default Home
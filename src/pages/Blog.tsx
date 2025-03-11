import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div className="bg-black h-screen w-screen">
                <p className="text-white text-center text-2xl">Качество</p>
            </div>
        )
    }
}

export default Blog

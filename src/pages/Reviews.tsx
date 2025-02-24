import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Reviews extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>Reviews</div>
        )
    }
}

export default Reviews
import React, { PureComponent } from 'react'
import { Button } from '../Button';

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="bg-black text-white text-lg py-4 px-8 flex items-center justify-center">
                <div className="flex items-center">
                    <p className="uppercase mr-100 text-4xl">Адрес: Семена Данилова, 3/3а 1 этаж</p>
                    <div>
                      <Button
                          size="medium"
                          color="custom"
                          title="+7-914-298-77-27"
                      />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
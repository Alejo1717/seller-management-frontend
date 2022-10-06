import { Button } from 'antd'
import React from 'react'
import ExampleForm from './ExampleForm'

interface Props { }

const Home = (props: Props) => {
    return (
        <div>
            <span>Home</span>
            <Button/>
            <ExampleForm />
        </div>
    )
}

export default Home
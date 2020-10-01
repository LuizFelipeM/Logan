import React, { createContext, ReactNode, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import './style.scss';

interface WrapperContextProps {
    children: ReactNode
}

interface Context {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const WrapperContext = createContext<Context>({ setLoading: () => {} })
const Provider = WrapperContext.Provider

const WrapperProvider: React.FC<WrapperContextProps> = (props) => {
    const [loading, setLoading] = useState(false)

    return (
        <Provider value={{ setLoading }}>
            {loading &&
                <div className="loading-container d-flex justify-content-center">
                    <Spinner animation="border" variant="light"/>
                </div>}
            {props.children}
        </Provider>
    )
}

export { WrapperContext, WrapperProvider };
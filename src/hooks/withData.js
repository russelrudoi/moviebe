import { useEffect } from "react";

const withData = (BaseComponent, getData) => {
    return (props) => {
        useEffect(() => {
            getData()
        }, [])

        return <BaseComponent />
    }
}
import { useState, useEffect } from 'react';

const Dummy4 = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    

    useEffect(() => {
        let timerId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            debugger
            clearInterval(timerId)
        }





    }, [])


    return (
        <div>
            {currentTime}
        </div>
    )
}

export default Dummy4
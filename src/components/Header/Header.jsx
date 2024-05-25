import { useState } from "react";


export default function Header() {

    const [currentTime, setTime] = useState(new Date);


    setInterval(() => setTime(new Date), 1000)

    return (
        <header>
            <span>Текущее время: { currentTime.toLocaleTimeString() }</span>
        </header>
    )
}
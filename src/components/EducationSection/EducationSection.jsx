import WayToTeach from "../WayToTeach/WayToTeach"
import { ways } from '../../data'

export default function EducationSection() {
    return (
        <section>
            <h3>Наш Подход к обученияю</h3>
            <ul>
                { ways.map(way => <WayToTeach key={way.title} {...way} />) }
            </ul>
        </section>
    )
}
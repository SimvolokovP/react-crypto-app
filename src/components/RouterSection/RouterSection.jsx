import Button from "../Button/Button"

export default function RouterSection({ active, onChange }) {


    return (
        <section>
            <Button isActive={ active === 'main' } onClick={() => onChange('main')}>Main page</Button>
            <Button isActive={ active === "btn" } onClick={() => onChange('feedback')}>Feedback</Button>
        </section>
    )
}
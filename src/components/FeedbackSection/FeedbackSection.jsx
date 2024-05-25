import { useState } from "react"
import Button from "../Button/Button"

export default function FeedbackSection() {
    const [form, setForm] = useState( {name: '', hasError: true, reason: 'help'} );

    function handleNameChange(event) {
        setForm((prev) => ({
            ... prev,
            name: event.target.value,
            hasError: event.target.value.length === 0
        }));
    }

    function toggleError() {
        setForm.hasError((prev) => !prev);
        // setHasError((prev) => !prev);
    }

    function handleReasonChange(value) {
        console.log(value);
        setForm.reason(value);
    }

    return (
        <section>
            <h2>Feedback!</h2>

            <form >
                <label htmlFor="name">Ваше имя</label>
                <input id="name" className="control" type="text" value={form.name} onChange={ handleNameChange } style={{backgroundColor: !form.hasError ? null : 'red'}}/>

                <label htmlFor="reason">Прична</label>
                <select id="reason" className="control" value={form.reason} onChange={ (event) => handleReasonChange(event.target.value) }>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="other">Другое</option>
                </select>

                <Button disabled={ form.hasError }>Отправить</Button>
                
            </form>
            <Button onClick={ toggleError }>Toggle</Button>
        </section>
    )
}
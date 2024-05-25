import './Button.css';

export default function Button({children, onClick, active, disabled}) {
    console.log(disabled)

    return (
        <button disabled={ disabled } onClick={ onClick } className={ active === true ? "btn active" : "btn" }>{children}</button>
    )
}
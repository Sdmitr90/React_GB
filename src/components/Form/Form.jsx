import style from './Form.module.css'

export const Form = () => {
    const count = 1;
    const name = 'GB';
    return <form className={style.Form}>
        <p>Count : {count}</p>
        <p>Name : {name}</p>
    </form>
}
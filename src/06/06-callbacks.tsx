import {MouseEvent, ChangeEvent} from 'react'

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name);
        alert('User have been deleted')
    }
    const onNameChanged = () => {
        console.log('Name changed')
    }

    const focusLostHandler = () => {
        console.log('Focus Lost')
    }

    const onAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + e.currentTarget.value);
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input type="number" onChange={onAgeChange}/>
        <button name={'delete'} onClick={deleteUser}>search</button>
    </div>
}

import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Por favor escreva a mensagem')
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Mensagem</label>
                <input 
                    type='text'
                    placeholder='Escreva a mensagem'
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Data</label>
                <input 
                    type='text'
                    placeholder='Digite a data'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-checkbox'>
                <label>Importante</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value='Salve a mensagem'
                className='btn btn-block'
            />
        </form>
    )
}

export default AddTask

import React, {FC} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>('')
    const [isDrag, setIsDrag] = React.useState<boolean>(false)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const changeHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');
    }

 
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('dragWithPreventHandler');
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop');
    }

    return(
        <div>
            <input
                type="text" 
                value={value}
                onChange={changeHandler}
                placeholder="Управляемый"
            />
            <input
                type="text" 
                ref={inputRef}
                placeholder="Не управляемый"
            />
            <button onClick={clickHandler}>button</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}>
                
            </div>
        </div>
    )
}

export default EventsExample;
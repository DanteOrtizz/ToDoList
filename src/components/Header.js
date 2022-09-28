import { Button } from './Button'


export const Header = ({ title, onAdd, showAdd }) => {
    

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={onAdd} color={showAdd ? 'black' : 'green'} text={showAdd ? 'Close' : 'Add'}/>
    </header>
  )
}

//Props
Header.defaultProps = {
    title: 'Task Tracker',
}
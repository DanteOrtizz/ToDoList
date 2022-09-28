import PropTypes from 'prop-types'

export const Button = ({ color, text, onClick }) => {
  return (
    <button className='btn' onClick={onClick} style={{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
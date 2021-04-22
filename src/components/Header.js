import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
     
    return (
        <header className={headingStyle}>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Fechar' : 'Escrever'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Mural de Mensagens',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'green',
    backgroundColor: 'red'
}
export default Header
import Button from 'react-bootstrap/Button';

const Modal = ({children}) => {

    return(
        <article className='modal is-open'>
            <div className='modal-container'>
                <Button variant="primary" className='modal-close'>X</Button>
                {children}
            </div>
        </article>
    )
}

export default Modal
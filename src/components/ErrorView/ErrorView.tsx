import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './ErrorView.css'

export function ErrorView () {
    return (
        <div className='error-view'>
            <FontAwesomeIcon className='error-view__icon' icon={faFileCircleXmark} />

            <span className='error-view__title'>Something went wrong</span>

            <div className='error-view__text-container'>
                <span className='error-view__text'>We couldn't load your tasks</span>

                <span className='error-view__text'>Pleas try again</span>
            </div>

            <button 
                className='error-view__button'
                onClick={() => window.location.reload()}
            >
                <span className='error-view__button-text'>Try again</span>
            </button>
        </div>
    )
}
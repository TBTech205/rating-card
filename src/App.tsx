import './App.css'
import { useState } from 'react'

export default function App() {
    const [selectedRating, setSelectedRating] = useState<number>()
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleRateingClick(rateing: number) {
        setSelectedRating(rateing)
    }

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault()
        setIsSubmitted(true)
    }
    
    return isSubmitted ? (
        <div className='rateing-card-wraper thanks'>
            <img src='/thank-you.svg' className='illustration' alt="thank you image" />
            <div className='chip'>You selected {selectedRating} out of 5</div>
            <h1 className='title'>Thank you!</h1>
            <p className='desc'>
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
    ) : (
        <form onSubmit={handleFormSubmit} className='rateing-card-wraper'>
            <div className='rateing-card'>
                <img src='/icon-star.svg' className='star' alt="star image" />

                <h1 className='title'>How did we do?</h1>

                <p className='desc'>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>

                <div className='buttons'>
                    {[1,2,3,4,5].map((rate) => (
                        <button
                            type="button"
                            className='rateing'
                            onClick={() => handleRateingClick(rate)}
                        >
                            {rate}
                        </button>
                    ))}
                </div>

                <button
                    type="submit"
                    className='submit'
                    disabled={selectedRating === undefined}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}



function NewEventForm() {



    return(
        <div>
            <div>
                <p>New Event Form</p>
                <input
                placeholder="event"
                ></input>
                <input
                placeholder="date"
                ></input>
                <input
                placeholder="location"
                ></input>
                <input
                placeholder="start time"
                ></input>
            </div>
            <div>
                <button>Submit Event</button>
            </div>
            <div>
                    <input
                placeholder="guest name"
                ></input>
                <input
                placeholder="phone number"
                ></input>
                <button>+</button>
            </div>
            <div>
                <button>Submit Guests</button>
            </div>
        </div>
    )
}

export default NewEventForm;
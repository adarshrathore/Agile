import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css';
const Contact = () => {
    document.title='contact us'
    return (
        <div className="container container-main">
            <div className="items items-1">
                <h1 className='text-capitalize'>send us a message</h1>
                <p style={{width: "80%"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, blanditiis cum! Quia in, tempore expedita vero.</p>
                <form>
                    <div className="form-item">
                        <input type="text" placeholder='First Name*' />
                        <input type="text" placeholder='Last Name*' />
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder='E-mail Address*' />
                        <input type="text" placeholder='Contact Number*' />
                    </div>
                    <div className="form-item">
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <div className="form-item">
                        <button id='form-submit'>Send</button>
                    </div>
                </form>
            </div>
            <div className="items items-2">
                <div className="form-item-2">
                    <h3>Drop in our office</h3>
                    <p><i class="fa-solid fa-location-pin"></i>office address</p>
                </div>
                <div className="form-item-2" id='callus'>
                    <h3>Call Us</h3>
                    <p><i class="fa-solid fa-phone"></i>9200499116</p>
                </div>
                <div className="form-item-2">
                    <h3>Mail Us</h3>
                    <p><i class="fa-regular fa-envelope"></i>codeatAlpha2@gmail.com</p>
                </div>
                <div className="form-item-2">
                    <h3>Follow Us</h3>
                    <div className="follow">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

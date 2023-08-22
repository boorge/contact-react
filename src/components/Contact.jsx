import { MdMessage } from 'react-icons/md'
import { PiPhoneCallFill } from 'react-icons/pi'
import { BsFillChatRightHeartFill } from 'react-icons/bs'

function Contact() {
    return (
        <section className='container'>
            <div className="formbtn">
                <button className='Mbtn1'><MdMessage />VIA SUPPORT CHAT</button>
                <button className='Cbtn2'><PiPhoneCallFill />VIA CALL</button>
            </div>
            <form>
                <button className='Obtn'><BsFillChatRightHeartFill />VIA SUPPORT CHAT</button>
                <div className="main-container">
                    <div className="contact-form">
                        <label htmlFor="Name">Name</label>
                        <input type="text" name='Name' />
                        <label htmlFor="email">Email</label>
                        <input type="email" name='Email' />
                        <label htmlFor="text">Text</label>
                        <textarea name="text" id="text" cols="30" rows="10"></textarea>
                        <button className='submit'>Submit</button>
                    </div>
                    <div className='contact-image'>
                        <img src="./images/Service.png" alt="services" />
                    </div>
                </div>
            </form>

        </section>
    )
}

export default Contact
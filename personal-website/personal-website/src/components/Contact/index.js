import './index.scss'

const Contact = () => {
    return (
        <>
            <div className="main-contact">
                <div className="text-zone">
                    <h1>
                        Filip Kritzner
                    </h1>
                    <p>
                        Wenn Sie Fragen haben, füllen Sie bitte das Kontaktformular unten aus.
                    </p>
                    <div className="contact-form">
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact
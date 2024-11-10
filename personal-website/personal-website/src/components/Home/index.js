import './index.scss'
import MeinBild from '../../assets/images/MeinBild.jpg'

const Home = () => {
    return (
        <div className='main'>
            <div className='title'>
                <h1>
                    Filip Kritzner
                </h1>
            </div>
            <div className='text-home'>
                <p>Grüezi! Mein Name ist Filip Kritzner. Ich bin in der dritten Klasse der Informatikmittelschule Baden.</p>
                <p>Nutzen Sie das Menü, um zwischen den verschiedenen Seiten zu navigieren.</p>
                <p>Herzlichen Dank, dass Sie sich die Zeit genommen haben, meine Webseite zu besuchen!</p>
                <img src={MeinBild} alt="Logo" />
            </div>
        </div>
    )
}

export default Home
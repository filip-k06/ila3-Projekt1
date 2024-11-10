import './index.scss'
import ZontesBild from '../../assets/images/Zontes.jpg'

const About = () => {
    return (
        <div className='main'>
            <div className='title'>
                <h1>
                    Filip Kritzner
                </h1>
            </div>
            <div className='text'>
                <p>Ich bin zurzeit in der dritten Klasse der Informatikmittelschule Baden.</p>
                <p>Nächstes Jahr absolviere ich mein Praktikum bei der ZKB.</p>
                <p>In meiner Freizeit halte ich mich gerne körperlich fit, sei es im Fitnesszentrum oder auf meinem Motorrad (Zontes ZT 125). Früher war ich auch aktiv im Boxclub. Diese Aktivitäten helfen mir nicht nur, einen Ausgleich zum Schulalltag zu finden, sondern fördern auch meine Disziplin und Belastbarkeit – Qualitäten, die ich auch in mein Arbeitsumfeld einbringe.</p>
                <img src={ZontesBild} alt="Logo" className='small-image' />
            </div>
        </div>
    )
}

export default About
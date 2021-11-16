import './home.css'
import writing from './images/writing.png'

const Home = () => {
    return(
        <div className="home">
            <header>
                <h1>Pen Professional</h1>
            </header>
            <div className="home-hero">
                <section>
                    <div className="img-hero">
                    </div>
                </section>
                <section className='section-flex'>
                    <div className='column'>
                       <img src={writing} alt="" />
                    </div>
                    <div className='home-txt'>
                        <h3>Expression in Writing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt harum non reiciendis, cumque beatae maiores quo facilis delectus qui. Libero animi at facilis, ducimus exercitationem molestias ipsam officia doloremque.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
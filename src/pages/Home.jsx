import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { homeSection } from '../data/HomeSection'

import '../Styles/Home.css'
import parse from 'html-react-parser'

import makanan1 from '../src/Assets/Images/nasigoreng.jpg';
import makanan2 from '../src/Assets/Images/mieayam.jpg';
import makanan3 from '../src/Assets/Images/sateayam.jpg';
import makanan4 from '../src/Assets/Images/tehmanis.jpg';
import makanan5 from '../src/Assets/Images/kopisusu.jpg';
import makanan6 from '../src/Assets/Images/smoothiebuah.jpg';
import makanan7 from '../src/Assets/Images/puding.jpg';
import makanan8 from '../src/Assets/Images/eskrimvanilla.jpg';
import makanan9 from '../src/Assets/Images/kuebrownies.jpg';

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <section id="home">
          <img src='../src/Assets/Images/nasigoreng.jpg' alt="Cafe Ulala Logo" className="logo-img1" />
          <div className="kolom">
            {parse(homeSection.content)}
          </div>
        </section>
      </div>

      <div className="clear">

        {/* Section Makanan */}
        <section id="courses" className="menu-section">
          <h2>Makanan</h2>
          <div className="menu-items">
            <div className="item">
              <img src={makanan1} alt="Nasi Goreng" />
              <h3>Nasi Goreng</h3>
              <p>Lezat dan gurih, cocok untuk makan siang!</p>
            </div>
            <div className="item">
              <img src={makanan2} alt="Mie Ayam" />
              <h3>Mie Ayam</h3>
              <p>Kenyal dan penuh rasa, favorit semua kalangan.</p>
            </div>
            <div className="item">
              <img src={makanan3} alt="Sate Ayam" />
              <h3>Sate Ayam</h3>
              <p>Daging empuk dengan bumbu kacang gurih.</p>
            </div>
          </div>
        </section>

        {/* Section Minuman */}
        <section id="tutors" className="menu-section">
          <h2>Minuman</h2>
          <div className="menu-items">
            <div className="item">
              <img src={makanan4} alt="Es Teh Manis" />
              <h3>Es Teh Manis</h3>
              <p>Menyegarkan dan manis alami!</p>
            </div>
            <div className="item">
              <img src={makanan5} alt="Kopi Susu" />
              <h3>Kopi Susu</h3>
              <p>Pahit dan creamy, cocok untuk pagi hari.</p>
            </div>
            <div className="item">
              <img src={makanan6} alt="Smoothie Buah" />
              <h3>Smoothie Buah</h3>
              <p>Sehat dan menyegarkan dengan rasa alami buah.</p>
            </div>
          </div>
        </section>

        {/* Section Desserts */}
        <section id="partners" className="menu-section">
          <h2>Desserts</h2>
          <div className="menu-items">
            <div className="item">
              <img src={makanan7} alt="Puding Coklat" />
              <h3>Puding Coklat</h3>
              <p>Lembut, manis, dan menggoda!</p>
            </div>
            <div className="item">
              <img src={makanan8} alt="Es Krim Vanilla" />
              <h3>Es Krim Vanilla</h3>
              <p>Dingin dan lembut, favorit semua umur.</p>
            </div>
            <div className="item">
              <img src={makanan9} alt="Kue Brownies" />
              <h3>Kue Brownies</h3>
              <p>Manis dan legit, cocok sebagai penutup.</p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Home

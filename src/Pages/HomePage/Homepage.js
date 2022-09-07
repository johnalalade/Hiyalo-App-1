
import Heroe from './Heroe.js'
import Features from './Features'
import HomePageMarket from './HomePageMarket'
import About from './About'
import UserReviews from './UserReviews'
import Faq from './Faq'
import Footer from './Footer.js'

function HomePage() {
  return (
    <div>
        <Heroe />
        <Features />
        <HomePageMarket />
        <About />
        <UserReviews />
        <Faq />
        <Footer />
    </div>
  )
}

export default  HomePage;
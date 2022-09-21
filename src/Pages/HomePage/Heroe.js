import './heroe.css'
import NavBar from '../../components/Navbar/Navbar';
const Heroe = () => {
  return (
    <header className="heroe-section">
      <NavBar />
      <main>
        <h1>Pay Your Rent Monthly With Hiyalo</h1>
        <form class="heroe-form">
          <input type="text" placeholder="Search based on your loaction" />
          <button type="submit">
            <iconify-icon
              class="location-icon"
              icon="lucide:locate-fixed"
            ></iconify-icon>
            <p>Search</p>
          </button>
        </form>
      </main>
    </header>
  );
};
export default Heroe;

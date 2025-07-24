import './App.css';
const currentYear = new Date().getFullYear();

function App() {
  return (
    <div className="home">
      <div className="home__border"></div>

      {/* Mobile top content */}
      <div className="home-bottom__left home-bottom__left-mobile">
        <div className="home-bottom__logo">
          <img src="/small-bulb.png" alt="logo" width={36.54} height={41.25} />
        </div>

        <h1 className="home-big-title">LITBULB LABS</h1>
      </div>

      {/* Main content */}
      <div className="home-top">
        <div className="home-top__left">
          <h2 className="home-title">Ideas that spark, tools that stick.</h2>
          <p>
            We’re a small studio building delightfully useful software for
            everyday life.
          </p>
          <p>
            Our focus? Tools that solve real problems, with intention, clarity,
            and a little magic.
          </p>
        </div>

        <div className="home-top__right">
          <h2 className="home-sub-title">Want to collaborate or say hi?</h2>
          <a href="mailto:litbulbenterprise@gmail.com" target="_blank">
            litbulbenterprise@gmail.com
          </a>
        </div>
      </div>

      {/* Desktop-only footer */}
      <div className="home-bottom__container">
        <div className="home-bottom">
          <div className="home-bottom__left">
            <div className="home-bottom__logo">
              <img src="/big-bulb.png" alt="logo" width={106} height={120} />
            </div>
            <h1 className="home-big-title">LITBULB LABS</h1>
          </div>
          <p className="home-copyright">© {currentYear} Litbulb Labs</p>
        </div>
      </div>

      {/* Mobile-only copyright */}
      <div className="home-copyright__mobile-container">
        <p className="home-copyright__mobile">© {currentYear} Litbulb Labs</p>
      </div>

      <div className="home__border home__border-bottom"></div>
    </div>
  );
}

export default App;

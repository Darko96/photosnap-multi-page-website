import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
// icons
import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
// images
import featuresKV from "../assets/features/desktop/hero.jpg";

function Features() {
  return (
    <div>
      <PageNav />

      <div className="features-banner">
        <div className="features-banner-text">
          <h1> Create and share your photo Stories.</h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <button>Get an ivnite</button>
        </div>
        <div className="features-banner-img">
          <img src={featuresKV} alt="proba"></img>
        </div>
      </div>

      <div className="section-features">
        <div>
          <div className="feature">
            <img src={responsive} alt="proba" />
            <h1>100% Responsive</h1>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
          <div className="feature">
            <img src={noLimit} alt="proba" />
            <h1>No Photo Upload Limit</h1>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
          <div className="feature">
            <img src={embed} alt="proba" />
            <h1>Available to Embed</h1>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
        <div>
          <div className="feature">
            <img src={responsive} alt="proba" />
            <h1>100% Responsive</h1>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
          <div className="feature">
            <img src={noLimit} alt="proba" />
            <h1>No Photo Upload Limit</h1>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
          <div className="feature">
            <img src={embed} alt="proba" />
            <h1>Available to Embed</h1>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="section-invite">
        <h1 className="section-invite-heading">
          We're in Beta. Get your invite today!
        </h1>

        <button className="section-invite-btn">Get an invite</button>
      </div>
      <Footer />
    </div>
  );
}

export default Features;

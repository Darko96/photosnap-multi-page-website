import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
// icons
import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import domain from "../assets/features/desktop/custom-domain.svg";
import boost from "../assets/features/desktop/boost-exposure.svg";
import drag from "../assets/features/desktop/drag-drop.svg";
import arrow from "../assets/shared/desktop/arrow.svg";
// images
import featuresKV from "../assets/features/desktop/hero.jpg";

function Features() {
  return (
    <div>
      <PageNav />

      <div className="features-banner">
        <div className="features-banner-text">
          <h1>Features</h1>
          <p>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
        <div className="features-banner-img">
          <div className="banner-img"></div>
        </div>
      </div>

      <div className="section-features wrap">
        <div className="row-one">
          <div className="feature">
            <img src={responsive} alt="proba" />
            <h1>100% Responsive</h1>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
          <div className="feature middle">
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
        <div className="row-two">
          <div className="feature">
            <img src={domain} alt="proba" />
            <h1>Custom Domain</h1>
            <p>
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </div>
          <div className="feature">
            <img src={boost} alt="proba" />
            <h1>Boost Your Exposure</h1>
            <p>
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </div>
          <div className="feature">
            <img src={drag} alt="proba" />
            <h1>Drag & Drop Image</h1>
            <p>
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </div>
        </div>
      </div>

      <div className="section-invite">
        <h1 className="section-invite-heading">
          We're in Beta. Get your invite today!
        </h1>

        <button className="section-invite-btn">
          Get an invite
          <img src={arrow} alt="proba" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Features;

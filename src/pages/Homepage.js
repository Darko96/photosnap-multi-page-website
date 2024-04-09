import PageNav from "../components/PageNav";
import desktopCreate from "../assets/home/desktop/create-and-share.jpg";
import desktopStories from "../assets/home/desktop/beautiful-stories.jpg";
import desktopDesign from "../assets/home/desktop/designed-for-everyone.jpg";
// Icons
import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import Footer from "../components/Footer";
import logo from "../assets/shared/desktop/logo.svg";
import arrow from "../assets/shared/desktop/arrow.svg";
import arrowBlack from "../assets/shared/desktop/arrowBlack.svg";

function Homepage() {
  return (
    <div className="container">
      <PageNav />

      <div className="section-create">
        <div className="section-create-text">
          <h1> Create and share your photo Stories.</h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <button>
            Get an ivnite <img src={arrow} alt="proba" />
          </button>
        </div>
        <div className="section-create-img">
          <div className="create-img"></div>
        </div>
      </div>

      <div className="section-stories">
        <div className="section-stories-img">
          <div className="stories-img"></div>
        </div>
        <div className="section-stories-text">
          <h1>Beautiful stories every time</h1>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <button>
            View the stories <img src={arrowBlack} alt="proba" />
          </button>
        </div>
      </div>

      <div className="section-design">
        <div className="section-design-text">
          <h1>Designed for everyone</h1>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <button>
            View the stories <img src={arrowBlack} alt="proba" />{" "}
          </button>
        </div>
        <div className="section-design-img">
          <div className="design-img"></div>
        </div>
      </div>

      <div className="section-stories-list">
        <div className="mountains storie-item">
          <div className="stories-text">
            <p className="topic">The Mountains</p>
            <p className="name">by John Appleseed</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="cityscapes storie-item">
          <div className="stories-text">
            <p className="topic">Sunset Cityscapes</p>
            <p className="name">by Benjamin Cruz</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="voyage storie-item">
          <div className="stories-text">
            <p className="topic">18 Days Voyage</p>
            <p className="name">by Alexei Borodin</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="architecturals storie-item">
          <div className="stories-text">
            <p className="topic">Architecturals</p>
            <p className="name">by Samantha Brooke</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>
      </div>

      <div className="section-features storie-item">
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

      <Footer />
    </div>
  );
}

export default Homepage;

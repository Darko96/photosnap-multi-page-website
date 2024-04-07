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
          <button>Get an ivnite</button>
        </div>
        <div className="section-create-img">
          <img src={desktopCreate} alt="proba"></img>
        </div>
      </div>

      <div className="section-stories">
        <div className="section-stories-img">
          <img src={desktopStories} alt="proba"></img>
        </div>
        <div className="section-stories-text">
          <h1>Beautiful stories every time</h1>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <button>View the stories</button>
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
          <button>View the stories</button>
        </div>
        <div className="section-design-img">
          <img src={desktopDesign} alt="proba"></img>
        </div>
      </div>

      <div className="section-stories-list">
        <div className="mountains">
          <div>
            <p>The Mountains</p>
            <p>by John Appleseed</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="cityscapes">
          <div>
            <p>Sunset Cityscapes</p>
            <p>by Benjamin Cruz</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="voyage">
          <div>
            <p>18 Days Voyage</p>
            <p>by Alexei Borodin</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="architecturals">
          <div>
            <p>Architecturals</p>
            <p>by Samantha Brooke</p>
          </div>
          <button>Read Story</button>
        </div>
      </div>

      <div className="section-features">
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

      <Footer />
    </div>
  );
}

export default Homepage;

import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

import arrow from "../assets/shared/desktop/arrow.svg";

function Stories() {
  return (
    <div className="stories-container">
      <PageNav />

      <div className="section-stories-banner">
        <div className="section-container">
          <p className="stories-above-heading">Last month's featured story</p>
          <h1 className="stories-heading">Hazy full moon of Appalachia</h1>
          <p className="below-stories-heading">
            March 2nd 2020 <span className="proba">by John Appleseed</span>
          </p>
          <p className="stories-banner-text">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <button className="stories-banner-btn">
            Read the story <img src={arrow} alt="proba" />
          </button>
        </div>
      </div>

      <div className="section-stories-gallery">
        <div className="gallery-item mountains">
          <div className="gallery-text">
            <p className="date">April 16th 2020</p>
            <p className="topic">The Mountains</p>
            <p className="name">by John Appleseed</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item cityscapes">
          <div className="gallery-text">
            <p className="date">April 14th 2020</p>
            <p className="topic">Sunset Cityscapes</p>
            <p className="name">by Benjamin Cruz</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item voyage">
          <div className="gallery-text">
            <p className="date">April 11th 2020</p>
            <p className="topic">18 Days Voyage</p>
            <p className="name">by Alexei Borodin</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item architecturals">
          <div className="gallery-text">
            <p className="date">April 9th 2020</p>
            <p className="topic">Architecturals</p>
            <p className="name">by Samantha Brooke</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item tour">
          <div className="gallery-text">
            <p className="date">April 7th 2020</p>
            <p className="topic">World Tour 2019</p>
            <p className="name">by Timothy Wagner</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item corners">
          <div className="gallery-text">
            <p className="date">April 3rd 2020</p>
            <p className="topic">Unforeseen Corners</p>
            <p className="name">by William Malcolm</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item africa">
          <div className="gallery-text">
            <p className="date">March 29th 2020</p>
            <p className="topic">King on Africa: Part II</p>
            <p className="name">by Tim Hillenburg</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item nowhere">
          <div className="gallery-text">
            <p className="date">March 21st 2020</p>
            <p className="topic">The Trip to Nowhere</p>
            <p className="name">by Felicia Rourke</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item sea">
          <div className="gallery-text">
            <p className="date">March 19th 2020</p>
            <p className="topic">Rage of The Sea</p>
            <p className="name">by Mohammed Abdul</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item running">
          <div className="gallery-text">
            <p className="date">March 16th 2020</p>
            <p className="topic">Running Free</p>
            <p className="name">by Michelle</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item waves">
          <div className="gallery-text">
            <p className="date">March 11th 2020</p>
            <p className="topic">Behind the Waves</p>
            <p className="name">by Lamarr Wilson</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item waters">
          <div className="gallery-text">
            <p className="date">March 9th 2020</p>
            <p className="topic">Calm Waters</p>
            <p className="name">by Samantha Brooke</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item milky">
          <div className="gallery-text">
            <p className="date">March 5th 2020</p>
            <p className="topic">The Milky Way</p>
            <p className="name">by Benjamin Cruz</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item forest">
          <div className="gallery-text">
            <p className="date">March 4th 2020</p>
            <p className="topic">Night at The Dark Forest</p>
            <p className="name">by Mohammed Abdul</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item beauty">
          <div className="gallery-text">
            <p className="date">March 1st 2020</p>
            <p className="topic">Somwarpet’s Beauty</p>
            <p className="name">by Michelle</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>

        <div className="gallery-item dreams">
          <div className="gallery-text">
            <p className="date">February 25th 2020</p>
            <p className="topic">Land of Dreams</p>
            <p className="name">by William Malcolm</p>
          </div>
          <button className="stories-btn">
            Read Story <img src={arrow} alt="proba" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Stories;

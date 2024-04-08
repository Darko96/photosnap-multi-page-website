import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function Stories() {
  return (
    <div className="stories-container">
      <PageNav />

      <div className="section-stories-banner">
        <p>Last month's featured story</p>
        <h1>Hazy full moon of Appalachia</h1>
        <p>
          March 2nd 2020 <span>by John Appleseed</span>
        </p>
        <p>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button>Read the story</button>
      </div>

      <div className="section-stories-gallery">
        <div className="mountains">
          <div>
            <p>April 16th 2020</p>
            <p>The Mountains</p>
            <p>by John Appleseed</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="cityscapes">
          <div>
            <p>April 14th 2020</p>
            <p>Sunset Cityscapes</p>
            <p>by Benjamin Cruz</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="voyage">
          <div>
            <p>April 11th 2020</p>
            <p>18 Days Voyage</p>
            <p>by Alexei Borodin</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="architecturals">
          <div>
            <p>April 9th 2020</p>
            <p>Architecturals</p>
            <p>by Samantha Brooke</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="tour">
          <div>
            <p>April 7th 2020</p>
            <p>World Tour 2019</p>
            <p>by Timothy Wagner</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="corners">
          <div>
            <p>April 3rd 2020</p>
            <p>Unforeseen Corners</p>
            <p>by William Malcolm</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="africa">
          <div>
            <p>March 29th 2020</p>
            <p>King on Africa: Part II</p>
            <p>by Tim Hillenburg</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="nowhere">
          <div>
            <p>March 21st 2020</p>
            <p>The Trip to Nowhere</p>
            <p>by Felicia Rourke</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="sea">
          <div>
            <p>March 19th 2020</p>
            <p>Rage of The Sea</p>
            <p>by Mohammed Abdul</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="running">
          <div>
            <p>March 16th 2020</p>
            <p>Running Free</p>
            <p>by Michelle</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="waves">
          <div>
            <p>March 11th 2020</p>
            <p>Behind the Waves</p>
            <p>by Lamarr Wilson</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="waters">
          <div>
            <p>March 9th 2020</p>
            <p>Calm Waters</p>
            <p>by Samantha Brooke</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="milky">
          <div>
            <p>March 5th 2020</p>
            <p>The Milky Way</p>
            <p>by Benjamin Cruz</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="forest">
          <div>
            <p>March 4th 2020</p>
            <p>Night at The Dark Forest</p>
            <p>by Mohammed Abdul</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="beauty">
          <div>
            <p>March 1st 2020</p>
            <p>Somwarpet’s Beauty</p>
            <p>by Michelle</p>
          </div>
          <button>Read Story</button>
        </div>

        <div className="dreams">
          <div>
            <p>February 25th 2020</p>
            <p>Land of Dreams</p>
            <p>by William Malcolm</p>
          </div>
          <button>Read Story</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Stories;

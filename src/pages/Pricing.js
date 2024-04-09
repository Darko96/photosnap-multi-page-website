import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
// images
import pricingKv from "../assets/pricing/desktop/hero.jpg";
import check from "../assets/pricing/desktop/check.svg";

function Pricing() {
  return (
    <div>
      <PageNav />

      <div className="pricing-banner">
        <div className="pricing-banner-text">
          <h1>Pricing</h1>
          <p>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
        <div className="pricing-banner-img">
          <div className="pr-banner-img"></div>
        </div>
      </div>

      <div className="section-pricing">
        <div className="monthly-yearly-box">
          <p>Monthly</p>
          <button></button>
          <p>Yearly</p>
        </div>

        <div className="pricing-box">
          <div className="pricing-basic">
            <h1>Basic</h1>
            <p>
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <h2>$19.00 </h2>
            {/* <h2>$190.00 </h2> */}
            <p>per month</p>
            {/* <p>per year</p> */}
            <button>Pick Plan</button>
          </div>

          <div className="pricing-pro">
            <h1>Pro</h1>
            <p>
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <h2>$39.00</h2>
            {/* <h2>$390.00</h2> */}
            <p>per month</p>
            {/* <p>per year</p> */}
            <button>Pick Plan</button>
          </div>

          <div className="pricing-business">
            <h1>Business</h1>
            <p>
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <h2>$99.00</h2>
            {/* <h2>$990.00</h2> */}
            <p>per month</p>
            {/* <p>per year</p> */}
            <button>Pick Plan</button>
          </div>
        </div>
      </div>

      <div className="section-compare">
        <h1 className="compare-heading">Compare</h1>
        <div className="compare-categories">
          <div className="column-one">The Features</div>
          <div className="column-two">Basic</div>
          <div className="column-three">Pro</div>
          <div className="column-four">Business</div>
        </div>

        <div className="compare-item">
          <div className="item-name">Unlimited Story Posting</div>
          <div className="check-one">
            <img src={check} alt="proba" />
          </div>
          <div className="check-two">
            <img src={check} alt="proba" />
          </div>
          <div className="check-three">
            <img src={check} alt="proba" />
          </div>
        </div>

        <div className="compare-item">
          <div className="item-name">Unlimited Photo Upload</div>
          <div className="check-one">
            <img src={check} alt="proba" />
          </div>
          <div className="check-two">
            <img src={check} alt="proba" />
          </div>
          <div className="check-three">
            <img src={check} alt="proba" />
          </div>
        </div>

        <div className="compare-item">
          <div className="item-name">Embedding Custom Content</div>
          <div className="check-one"></div>
          <div className="check-two">
            <img src={check} alt="proba" />
          </div>
          <div className="check-three">
            <img src={check} alt="proba" />
          </div>
        </div>

        <div className="compare-item">
          <div className="item-name">Customize Metadata</div>
          <div className="check-one"></div>
          <div className="check-two">
            <img src={check} alt="proba" />
          </div>
          <div className="check-three">
            <img src={check} alt="proba" />
          </div>
        </div>

        <div className="compare-item">
          <div className="item-name">Advanced Metrics</div>
          <div className="check-one"></div>
          <div className="check-two"></div>
          <div className="check-three">
            <img src={check} alt="proba" />
          </div>
        </div>

        <div className="compare-item">
          <div className="item-name">Photo Downloads</div>
          <div className="check-one"></div>
          <div className="check-two"></div>
          <div className="check-three">
            <img src={check} alt="proba" />
          </div>
        </div>

        <div className="compare-item">
          <div className="item-name">Search Engine Indexing</div>
          <div className="check-one"></div>
          <div className="check-two"></div>
          <div className="check-three">
            <img src={check} alt="proba" />
          </div>
        </div>

        <div className="compare-item">
          <div className="item-name">Custom Analytics</div>
          <div className="check-one"></div>
          <div className="check-two"></div>
          <div className="check-three">
            <img src={check} alt="proba" />
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

export default Pricing;

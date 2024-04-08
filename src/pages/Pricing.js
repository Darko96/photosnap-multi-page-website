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
          <h1> Create and share your photo Stories.</h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <button>Get an ivnite</button>
        </div>
        <div className="pricing-banner-img">
          <img src={pricingKv} alt="proba"></img>
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
            <h2>$190.00 </h2>
            <p>per month</p>
            <p>per year</p>
            <button></button>
          </div>

          <div className="pricing-pro">
            <h1>Pro</h1>
            <p>
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <h2>$39.00</h2>
            <h2>$390.00</h2>
            <p>per month</p>
            <p>per year</p>
            <button>Pick Plan</button>
          </div>

          <div className="pricing-business">
            <h1>Business</h1>
            <p>
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <h2>$39.00</h2>
            <h2>$390.00</h2>
            <p>per month</p>
            <p>per year</p>
            <button>Pick Plan</button>
          </div>
        </div>
      </div>

      <div className="section-compare">
        <h1 className="compare-heading">Compare</h1>
        <div>
          <div>The Features</div>
          <div>Basic</div>
          <div>Pro</div>
          <div>Business</div>
        </div>

        <div>
          <div>Unlimited Story Posting</div>
          <div>
            <img src={check} alt="proba" />
          </div>
          <div>
            <img src={check} alt="proba" />
          </div>
          <div>
            <img src={check} alt="proba" />
          </div>
        </div>

        <div>
          <div>Unlimited Photo Upload</div>
          <div>
            <img src={check} alt="proba" />
          </div>
          <div>
            <img src={check} alt="proba" />
          </div>
          <div>
            <img src={check} alt="proba" />
          </div>
        </div>

        <div>
          <div>Embedding Custom Content</div>
          <div></div>
          <div>
            <img src={check} alt="proba" />
          </div>
          <div>
            <img src={check} alt="proba" />
          </div>
        </div>

        <div>
          <div>Customize Metadata</div>
          <div></div>
          <div>
            <img src={check} alt="proba" />
          </div>
          <div>
            <img src={check} alt="proba" />
          </div>
        </div>

        <div>
          <div>Advanced Metrics</div>
          <div></div>
          <div></div>
          <div>
            <img src={check} alt="proba" />
          </div>
        </div>

        <div>
          <div>Photo Downloads</div>
          <div></div>
          <div></div>
          <div>
            <img src={check} alt="proba" />
          </div>
        </div>

        <div>
          <div>Search Engine Indexing</div>
          <div></div>
          <div></div>
          <div>
            <img src={check} alt="proba" />
          </div>
        </div>

        <div>
          <div>Custom Analytics</div>
          <div></div>
          <div></div>
          <div>
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

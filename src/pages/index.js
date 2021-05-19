import * as React from "react";

import Star from "../images/icon-star.svg";
import Colton from "../images/image-colton.jpg";
import Irene from "../images/image-Irene.jpg";
import Anne from "../images/image-Anne.jpg";

// markup
const IndexPage = () => {
  return (
    <main className="max-w-screen-xl px-3">
      <h1 className="text-4xl font-bold text-pink-900 text-center my-3">
        10,000+ of our users love our products.
      </h1>
      <p className="text-sm text-center mt-4 mb-12">
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
      <section className="grid gap-4 text-purple-800 text-sm font-bold mb-14">
        <div className="flex flex-col justify-center bg-pink-200 py-4 rounded-md items-center gap-2 bg-opacity-50">
          <div className="grid grid-flow-col justify-start gap-1">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <span className="block">Rated 5 Stars in Reviews</span>
        </div>
        <div className="flex flex-col justify-center bg-pink-200 py-4 rounded-md items-center gap-2 bg-opacity-50">
          <div className="grid grid-flow-col justify-start gap-1">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <span className="block">Rated 5 Stars in Report Guru</span>
        </div>
        <div className="flex flex-col justify-center bg-pink-200 py-4 rounded-md items-center gap-2 bg-opacity-50">
          <div className="grid grid-flow-col justify-start gap-1">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <span className="block">Rated 5 Stars in BestTech</span>
        </div>
      </section>
      <section className="grid gap-5 mb-5">
        <article className="bg-pink-800 rounded-md p-8">
          <div className="flex mb-12">
            <img
              src={Colton}
              alt="img"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-white">Colton Smith</h2>
              <span className="text-pink-200">Verified Buyer</span>
            </div>
          </div>
          <blockquote className="text-white font-light">
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent!"
          </blockquote>
        </article>
        <article className="bg-pink-800 rounded-md p-8">
          <div className="flex mb-12">
            <img
              src={Irene}
              alt="img"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-white">Irene Roberts</h2>
              <span className="text-pink-200">Verified Buyer</span>
            </div>
          </div>
          <blockquote className="text-white font-light">
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the
            speed of delivery."
          </blockquote>
        </article>
        <article className="bg-pink-800 rounded-md p-8">
          <div className="flex mb-12">
            <img src={Anne} alt="img" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h2 className="text-white">Anne Wallace</h2>
              <span className="text-pink-200">Verified Buyer</span>
            </div>
          </div>
          <blockquote className="text-white font-light">
            "Put an order with this company and can only praise them for the
            very high standard. Will definitely use them again and recommend
            them to everyone!"
          </blockquote>
        </article>
      </section>
    </main>
  );
};

export default IndexPage;

import { t } from "i18next";
import React, { useState } from "react";
import profileImg from "../../assets/images/profile-img.jpg";

const Reviews = () => {
  const [reviews, setReviews] = useState([1, 2, 3, 4]);
  return (
    <div className="reviews mt-5">
      <h3 className="text-[32px] font-bold mb-5">{t("reviews")}</h3>
      <div>
        {reviews.length > 0 &&
          reviews.map((item) => {
            return (
              <div className="review mb-5 last:mb-0">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={profileImg}
                      alt="profile"
                      loading="lazy"
                      className="min-w-[90px] w-[90px] h-[90px] rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-[20px] font-semibold">Lisa Atkins</h5>
                    <span className="text-[15px] text-gray-500 block">
                      12-1-2023
                    </span>
                    <p className="desc font-semibold text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates autem labore enim, beatae error iusto placeat
                      quibusdam fuga nihil nostrum accusamus maiores! Aspernatur
                      magnam debitis pariatur vel saepe, culpa a.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <form className="mt-10 bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold text-[30px] mb-10">{t("add_a_review")}</h4>

        <div className="item_input flex items-center gap-3">
          <label htmlFor="">{t("your_rating")}</label>
          <select>
            <option value="">5</option>
            <option value="">4</option>
            <option value="">3</option>
            <option value="">2</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="item_input">
          <label htmlFor="">{t("your_review")}</label>
          <textarea name=""></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-black text-white py-2 px-7 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;

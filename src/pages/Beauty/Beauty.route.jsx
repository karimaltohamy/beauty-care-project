import React, { Fragment, useState } from "react";
import Banner from "../../components/banner/Banner.component";
import { t } from "i18next";
import BeautyCard from "../../components/beautyCard/BeautyCard.component";
import "./beauty.scss"
import SearchSection from "../../components/searchSection/SearchSection";

const Beauty = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Fragment>
      <Banner title={t("beauty")} />
      <div className="py-12 beauty">
        <div className="container">
          <div className="w-full filter">
            <SearchSection needCategories={false} fullWidth={true} needContainer={false}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
              {data.length > 0 &&
                data.map((item) => {
                  return <BeautyCard />;
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Beauty;

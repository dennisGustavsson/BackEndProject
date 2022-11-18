import { useState } from "react";
import AdditionalTab from "./AllTabs/AdditionalTab";
import DescriptionTab from "./AllTabs/DescriptionTab";
import Reviews from "./AllTabs/Reviews";
import ShopAndReturns from "./AllTabs/ShopAndReturns";

const TabsMenu = () => {
  //states to toggle which tab is active on Product Details
  const [activeTab, setActiveTab] = useState("tab1");

  // const handleToggle = (e) => {
	// 	let toggler = e.target.id;

	// 	setActiveTab(toggler);
	// };

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
		let toggler = (e.target as Element).id;
		setActiveTab(toggler);
	};

  return (
    <div className='container'>
      <div className='tabs'>
        <ul className='navigation'>
          <li
            id='tab1'
            onClick={handleToggle}
            className={activeTab === "tab1" ? "active" : ""}
          >
            Description
          </li>
          <li
            id='tab2'
            onClick={handleToggle}
            className={activeTab === "tab2" ? "active" : ""}
          >
            Additional
          </li>
          <li
            id='tab3'
            onClick={handleToggle}
            className={activeTab === "tab3" ? "active" : ""}
          >
            Shopping & Returns
          </li>
          <li
            id='tab4'
            onClick={handleToggle}
            className={activeTab === "tab4" ? "active" : ""}
          >
            Reviews
          </li>
        </ul>

        <div className='outlet'>
          {activeTab === "tab1" ? <DescriptionTab /> : <></>}
          {activeTab === "tab2" ? <AdditionalTab /> : <></>}
          {activeTab === "tab3" ? <ShopAndReturns /> : <></>}
          {activeTab === "tab4" ? <Reviews /> : <></>}
        </div>
      </div>
    </div>
  );
};
export default TabsMenu;

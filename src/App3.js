// let us create a food ordering app that has :
// Header : that has a logo and a horizontal navigation bar
// a body : that has a search bar and a restaurant container that has restaurant cards.
// a footer : that has links , copyrights , Address etc.
// our website is driven by configuration sent by backend .
import react from "react";
import reactDom from "react-dom/client";
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body/> 
    </div>
  );
};
const Header = () => {
  return (
    <div className="header flex-class justify-content-space-between">
      <div className="logo">
        <img
          className="img-tag"
          src="https://cdn.dribbble.com/users/6259396/screenshots/14473720/media/1eae778854c9c1a22cd9bf68797e571b.png"
        ></img>
      </div>
      <div className="nav-logos">
        <ul>
          <li> Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList =  [
  {
  info: {
  id: "496806",
  name: "Subway",
  cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
  locality: "Jagdambey Market",
  areaName: "Samrala Chowk",
  costForTwo: "₹300 for two",
  cuisines: [
  "Healthy Food",
  "Salads",
  "Snacks"
  ],
  avgRating: 4.2,
  parentId: "2",
  avgRatingString: "4.2",
  totalRatingsString: "500+",
  sla: {
  deliveryTime: 46,
  lastMileTravel: 12.5,
  serviceability: "SERVICEABLE",
  slaString: "46 mins",
  lastMileTravelString: "12.5 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-11 23:00:00",
  opened: true
  },
  badges: { },
  isOpen: true,
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: { },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  aggregatedDiscountInfoV3: {
  header: "40% OFF",
  subHeader: "UPTO ₹80"
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/subway-jagdambey-market-samrala-chowk-ludhiana-496806",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  info: {
  id: "190938",
  name: "Roshan Vaishno Dhaba",
  cloudinaryImageId: "shehxzvyarapzhym8buc",
  locality: "Ludhiana Junction",
  areaName: "Ludhiana Junction",
  costForTwo: "₹150 for two",
  cuisines: [
  "North Indian",
  "Snacks"
  ],
  avgRating: 4.4,
  parentId: "171547",
  avgRatingString: "4.4",
  totalRatingsString: "5K+",
  sla: {
  deliveryTime: 45,
  lastMileTravel: 13.9,
  serviceability: "SERVICEABLE",
  slaString: "45 mins",
  lastMileTravelString: "13.9 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-11 23:32:00",
  opened: true
  },
  badges: { },
  isOpen: true,
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: { },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  aggregatedDiscountInfoV3: {
  header: "₹125 OFF",
  subHeader: "ABOVE ₹199",
  discountTag: "FLAT DEAL"
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/roshan-vaishno-dhaba-ludhiana-junction-ludhiana-190938",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  info: {
  id: "113688",
  name: "Johar Sweet Corner",
  cloudinaryImageId: "kzjcgil4a1x27r85k4bz",
  locality: "Gaushala Road",
  areaName: "Ludhiana Junction",
  costForTwo: "₹250 for two",
  cuisines: [
  "Sweets",
  "Desserts",
  "Street Food",
  "North Indian"
  ],
  avgRating: 4.4,
  veg: true,
  parentId: "230785",
  avgRatingString: "4.4",
  totalRatingsString: "10K+",
  sla: {
  deliveryTime: 53,
  lastMileTravel: 13.8,
  serviceability: "SERVICEABLE",
  slaString: "53 mins",
  lastMileTravelString: "13.8 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-11 20:30:00",
  opened: true
  },
  badges: {
  imageBadges: [
  {
  imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
  description: "OnlyOnSwiggy"
  },
  {
  imageId: "v1695133679/badges/Pure_Veg111.png",
  description: "pureveg"
  }
  ]
  },
  isOpen: true,
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: {
  badgeObject: [
  {
  attributes: {
  description: "OnlyOnSwiggy",
  imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
  }
  },
  {
  attributes: {
  description: "pureveg",
  imageId: "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  aggregatedDiscountInfoV3: {
  header: "₹175 OFF",
  subHeader: "ABOVE ₹349",
  discountTag: "FLAT DEAL"
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/johar-sweet-corner-gaushala-road-ludhiana-junction-ludhiana-113688",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  info: {
  id: "289603",
  name: "Soya Chhap Shri Umesh Son's",
  cloudinaryImageId: "gdkqcnaq0wwqa9hlvyf0",
  locality: "Metro road",
  areaName: "Sector 32",
  costForTwo: "₹250 for two",
  cuisines: [
  "North Indian",
  "Street Food",
  "Fast Food"
  ],
  avgRating: 4.5,
  veg: true,
  parentId: "191667",
  avgRatingString: "4.5",
  totalRatingsString: "1K+",
  sla: {
  deliveryTime: 47,
  lastMileTravel: 14.1,
  serviceability: "SERVICEABLE",
  slaString: "47 mins",
  lastMileTravelString: "14.1 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-11 22:15:00",
  opened: true
  },
  badges: {
  imageBadges: [
  {
  imageId: "v1695133679/badges/Pure_Veg111.png",
  description: "pureveg"
  }
  ]
  },
  isOpen: true,
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: {
  badgeObject: [
  {
  attributes: {
  description: "pureveg",
  imageId: "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  aggregatedDiscountInfoV3: {
  header: "60% OFF",
  subHeader: "UPTO ₹120"
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/soya-chhap-shri-umesh-sons-metro-road-sector-32-ludhiana-289603",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  info: {
  id: "370249",
  name: "Sharman Jain Sweets",
  cloudinaryImageId: "patyhpmfpudppym6iz9h",
  locality: "Sector 32 A",
  areaName: "Sector 32",
  costForTwo: "₹200 for two",
  cuisines: [
  "Sweets",
  "Chaat",
  "Snacks",
  "Bakery",
  "North Indian",
  "Fast Food",
  "Beverages"
  ],
  avgRating: 4.5,
  veg: true,
  parentId: "21795",
  avgRatingString: "4.5",
  totalRatingsString: "1K+",
  sla: {
  deliveryTime: 41,
  lastMileTravel: 13.7,
  serviceability: "SERVICEABLE",
  slaString: "41 mins",
  lastMileTravelString: "13.7 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-11 22:10:00",
  opened: true
  },
  badges: {
  imageBadges: [
  {
  imageId: "v1695133679/badges/Pure_Veg111.png",
  description: "pureveg"
  }
  ]
  },
  isOpen: true,
  aggregatedDiscountInfoV2: { },
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: {
  badgeObject: [
  {
  attributes: {
  description: "pureveg",
  imageId: "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/sharman-jain-sweets-a-sector-32-ludhiana-370249",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  info: {
  id: "682739",
  name: "Baba Chicken",
  cloudinaryImageId: "631386011e89649984170ba09a6dd6fb",
  locality: "Gurdev Nagar",
  areaName: "Samrala Chowk",
  costForTwo: "₹250 for two",
  cuisines: [
  "North Indian",
  "Biryani",
  "Chinese",
  "Beverages"
  ],
  avgRating: 4.6,
  parentId: "5285",
  avgRatingString: "4.6",
  totalRatingsString: "20+",
  sla: {
  deliveryTime: 54,
  lastMileTravel: 12.1,
  serviceability: "SERVICEABLE",
  slaString: "54 mins",
  lastMileTravelString: "12.1 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-11 22:30:00",
  opened: true
  },
  badges: { },
  isOpen: true,
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: { },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  aggregatedDiscountInfoV3: {
  header: "10% OFF",
  subHeader: "UPTO ₹40"
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/baba-chicken-gurdev-nagar-samrala-chowk-ludhiana-682739",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  info: {
  id: "516308",
  name: "Parantha Express",
  cloudinaryImageId: "ouszkfy2axunrsbsdnib",
  locality: "Tajpur Road",
  areaName: "Sector 32",
  costForTwo: "₹100 for two",
  cuisines: [
  "North Indian"
  ],
  veg: true,
  parentId: "10714",
  avgRatingString: "--",
  sla: {
  deliveryTime: 45,
  lastMileTravel: 12.5,
  serviceability: "SERVICEABLE",
  slaString: "45 mins",
  lastMileTravelString: "12.5 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-11 16:00:00",
  opened: true
  },
  badges: { },
  isOpen: true,
  aggregatedDiscountInfoV2: { },
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: { },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/parantha-express-tajpur-road-sector-32-ludhiana-516308",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  info: {
  id: "825670",
  name: "Captain Sam's Pizza",
  cloudinaryImageId: "cf6280d32aefb59cc849ef81b39fd3fd",
  locality: "Model Town",
  areaName: "Sector 32",
  costForTwo: "₹300 for two",
  cuisines: [
  "Pizzas"
  ],
  parentId: "382786",
  avgRatingString: "NEW",
  sla: {
  deliveryTime: 49,
  lastMileTravel: 13.7,
  serviceability: "SERVICEABLE",
  slaString: "49 mins",
  lastMileTravelString: "13.7 km",
  iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
  nextCloseTime: "2024-02-12 04:00:00",
  opened: true
  },
  badges: { },
  isOpen: true,
  aggregatedDiscountInfoV2: { },
  type: "F",
  badgesV2: {
  entityBadges: {
  imageBased: { },
  textBased: { },
  textExtendedBadges: { }
  }
  },
  orderabilityCommunication: {
  title: { },
  subTitle: { },
  message: { },
  customIcon: { }
  },
  differentiatedUi: {
  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  differentiatedUiMediaDetails: {
  mediaType: "ADS_MEDIA_ENUM_IMAGE",
  lottie: { },
  video: { }
  }
  },
  reviewsSummary: { },
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  isNewlyOnboarded: true,
  restaurantOfferPresentationInfo: { }
  },
  analytics: {
  context: "seo-data-aa1282c0-9e52-4532-8a77-2af2b095ebb2"
  },
  cta: {
  link: "https://www.swiggy.com/restaurants/captain-sams-pizza-model-town-sector-32-ludhiana-825670",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
  ]
const Body = () => {
  return (<div className="body">
    <div className="search">Search</div>
    <div className="res-cont">
      {/* <ResCard resData={resList[0]} />
      <ResCard resData={resList[1]} />
      <ResCard resData={resList[2]} />
      <ResCard resData={resList[3]} />
      <ResCard resData={resList[4]} />
      <ResCard resData={resList[5]} />
      <ResCard resData={resList[6]} />
      <ResCard resData={resList[7]} /> */}
      
      {/* instead of writing code like this we should use a for loop or map method to iterarte over the entire array to return the same jsx code for different data as ahown below */}

      {resList.map(restaurant => {
       return <ResCard key={restaurant.info.id} resData={restaurant}/>
      })
      }
     
     
     {/* You must be thinking about this key attribute : React uses the key attribute to optimize the process of reconciling the component tree. When a list of elements is rendered dynamically, React needs a way to identify which items have changed, been added, or been removed. The key attribute helps React efficiently update the DOM by minimizing unnecessary re-renders and ensuring that the correct components are updated.  You can use index as keys  but that is a bad practice as the index of an item can change if items are added, removed, or reordered in the list. If the index changes, React may incorrectly identify components as new or deleted, leading to unnecessary re-renders or incorrect updates. */}
     
     
     {/* here in above map function , you at first forgot touse a return statement and if you won't use return then map method will return undefined by default and if you dont want to use return statement then you can use () to wrap your jsx code as using  these parentheses implicitly returns the JSX inside them, which is a common syntax for arrow functions in React when returning JSX. so you can write the above method as something like this also :
     {resList.map(restaurant =>
      (ResCard resData={restaurant}/>) 
     )} */}
      {/* you know about props right ? they are like arguments that we pass to a function in js . 
      In React, "props" is short for "properties," and it's a system for passing data from a parent component to a child component. Props are a way to make components more dynamic and reusable. 
      A parent component can pass data to a child component by including attributes in the JSX of the child component.
      In the child component, you can access the passed data using the props object.
      Props in React are immutable, meaning that a child component cannot modify the props it receives from its parent. They are read-only.
      */}
      {/* <ResCard resName="Starbucks Coffee" resCuisine ="Beverages, Cafe" resStars ="4.3 stars"/> */}
    </div>
  </div>
  )
};
// A small take away of css is here : when the container has display flex property and you want all the flex children to be  in the same line or in the multiline within the container then you can use properties like Flex wrap .
const ResCard = (props) =>{
  const {resData} = props
  const{cloudinaryImageId,name,cuisines,avgRatingString} = resData?.info;
  // let us understand the concept of destructuring that the above line is demonstrating : { cloudinaryImageId, name, cuisines, avgRatingString }: This part is using object destructuring syntax. It creates variables named cloudinaryImageId, name, cuisines, and avgRatingString and assigns them the corresponding values from the resData.info object. Each variable is assigned the value of the property with the same name from the resData.info object.
  
  
  
  // Please do not forget that everything you write as an attribute to the child jsx will be wrapped by react in an object form so props are nothing but an object with key and values and you know this concept of destructuring in js that helps in extracting the values of ararys and object properties in a more concise and convenient way.
  return (
    <div className ='res-card'>
      <img  className ='res-card-img' src ={"https://media-assets.swiggy.com/swiggy/image/upload/" +cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{(cuisines).join(", ")}</h4>
      <h4>{avgRatingString}</h4>
    </div>
  )
}
const root = reactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

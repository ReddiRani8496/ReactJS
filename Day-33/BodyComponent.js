import React from "react";
import ReactDOM from "react-dom/client";

// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off",
//       },
//       {
//         offerName: "Buy 1, Get 1 Free",
//       },
//       {
//         offerName: "No deliverycharges",
//       },
//     ],
//   },

//   {
//     type: "restaurants",
//   },
// ];

const restaurantList = [
  {
    info: {
      id: "440123",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "Cunnigham road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "319582",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-17 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
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
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-cunnigham-road-vasanth-nagar-bangalore-440123",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "622202",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622202.JPG",
      locality: "Langford Road",
      areaName: "Shantinagar",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.5,
      parentId: "11329",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "15-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-17 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-langford-road-shantinagar-bangalore-622202",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "750396",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
      locality: "Lakshmi Road",
      areaName: "Langford Road",
      costForTwo: "₹400 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.4,
      parentId: "444382",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "15-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-17 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-lakshmi-road-langford-road-bangalore-750396",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "342643",
      name: "The Pizza Bakery - Wood Fired Sourdough",
      cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
      locality: "Church Street",
      areaName: "Central Bangalore",
      costForTwo: "₹700 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Continental"],
      avgRating: 4.6,
      parentId: "522292",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-16 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-pizza-bakery-wood-fired-sourdough-church-street-central-bangalore-bangalore-342643",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-08-17 02:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹209",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
      type: "WEBLINK",
    },
  },
];

const burgerKing = {
  name: "Burger King",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
  cusines: ["Burger", "American"],
  rating: 4.2,
};

// const RestaurantCard = () => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/" +
//           restaurantList[0].info.cloudinaryImageId
//         }
//         alt="burger"
//       ></img>
//       <h2>{restaurantList[0].info?.name}</h2>
//       <h3>{restaurantList[0].info.cuisines.join(", ")}</h3>
//       <h4>{restaurantList[0].info.sla.lastMileTravelString} Minutes</h4>
//     </div>
//   );
// };

// passing as props
// const RestaurantCard = (props) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/" +
//           props.restaurant.info.cloudinaryImageId
//         }
//         alt="burger"
//       ></img>
//       <h2>{props.restaurant.info?.name}</h2>
//       <h3>{props.restaurant.info.cuisines.join(", ")}</h3>
//       <h4>{props.restaurant.info.sla.lastMileTravelString} Minutes</h4>
//     </div>
//   );
// };

// object destructuring using props
// const RestaurantCard = ({ restaurant }) => {
//   const { cloudinaryImageId, name, cuisines, sla } = restaurant.info;
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/" +
//           cloudinaryImageId
//         }
//         alt="burger"
//       ></img>
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{sla.lastMileTravelString} Minutes</h4>
//     </div>
//   );
// };
// const Body = () => (
//   <div className="restaurant-list">
//     <RestaurantCard restaurant={restaurantList[0]} />
//     <RestaurantCard restaurant={restaurantList[1]} />
//     <RestaurantCard restaurant={restaurantList[2]} />
//     <RestaurantCard restaurant={restaurantList[3]} />
//     <RestaurantCard restaurant={restaurantList[4]} />
//   </div>
// );

// using rest operator
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, sla }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt="burger"
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.lastMileTravelString} Minutes</h4>
    </div>
  );
};
// const Body = () => (
//   <div className="restaurant-list">
//     <RestaurantCard {...restaurantList[0].info} />
//     <RestaurantCard {...restaurantList[1].info} />
//     <RestaurantCard {...restaurantList[2].info} />
//     <RestaurantCard {...restaurantList[3].info} />
//     <RestaurantCard {...restaurantList[4].info} />
//   </div>
// );

// using map
const Body = () => (
  <div className="restaurant-list">
    {restaurantList.map((restaurant) => (
      <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
    ))}
  </div>
);
export default Body;

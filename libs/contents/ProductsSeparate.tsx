import fresh from "@/assets/images/products/Fresh Products.png";
import freshBottom from "@/assets/images/products/Fresh Products bottom.png";

import bakery from "@/assets/images/products/Bakery Products.png";
import bakeryBottom from "@/assets/images/products/Bakery Products bottom.png";

import seafoods from "@/assets/images/products/Sea Foods.png";
import seafoodsBottom from "@/assets/images/products/Sea Food Bottom.png";

import footwearsGarments from "@/assets/images/products/Foot Wears & Garments.png";
import footwearsGarmentsBottom from "@/assets/images/products/Foot Wears & Garments Bottom.png";

import meat from "@/assets/images/products/Meat & Poultry.png";
import meatBottom from "@/assets/images/products/Meat & Poultry Bottom.png";

import provision from "@/assets/images/products/Provision.png";
import provisionBottom from "@/assets/images/products/Provision Bottom.png";

import home from "@/assets/images/products/Home.png";
import homeBottom from "@/assets/images/products/HomeBottom.png";
import { StaticImageData } from "next/image";

interface Product {
  image: StaticImageData;
  title: string;
  des: string[];
  bottomImg: StaticImageData;
  slug: string;
  margBottom: number;
}

export const data: Product[] = [
  {
    image: fresh,
    title: "Fresh Products",
    des: [
      "It always goes untold that if you get fresh right, you have a tendency to get the rest of the store right. If you get fresh wrong, it doesn't matter what the rest of the store offers you. The decisive matter is that fresh food products are at the centre of shopping decisions.",
      "Hence we have taken utmost care in managing the freshness of the products.",
      "Enthused mostly by consumer demand for fresh, healthy and additive-free food products that are safe and nutritious, we have tried our best to respond with fresh-cut fruits or vegetables that have been trimmed, peeled and/or cut into a fully/readily utilizable product, either open or packaged, to offer to the end users. We have adopted creative product development, new and hygienic handling practices, innovative technology and skillful marketing initiatives.",
      "Our range of fresh-cut tropical fruits includes melons, , mangoes, mangosteen, cantaloupe rambutan, jackfruit, pummelo, avocado, papaya, all kinds of berries, durian, grapes, pineapples citrus fruits and other fruit mixes.",
      "Fresh-cut salads and vegetables on the stands include shredded leafy vegetables and salad mixes, peeled baby carrots, baby corn, broccoli and cauliflower florets, cut celery stalks, spring onions, shredded cabbage, cut asparagus, cut sweet potatoes. Fresh-cut herbs are also available.",
    ],
    bottomImg: freshBottom,
    margBottom: 94,
    slug: "fresh-products",
  },
  {
    image: bakery,
    title: "Bakery Products",
    des: [
      "Our bakery is unlike anything you've known before. At Madinat, we believe there is always a reason to celebrate. Relish some of the finest cakes in town ,luscious Arabic sweets, exotic varieties of fresh breads, delectable savories , heavenly muffins and more.Our exhilarating collection will surely pamper your taste buds and leave you hungry for more.",
      "We strive hard to bridge customer expectations and quality services with our wide range of varieties of breads, pastries, cakes, sandwiches, etc. at our Bakery with good ambience to give you a relaxed mood. We have given much importance to making bakery and confectionary products of international standards and packaging at a viable cost to provide superior value to urban consumers. Our aim is to build a brand, across the region, that goes synonymous with quality bakery products manufactured with state-of-the-art, hygienic facilities.",
    ],
    bottomImg: bakeryBottom,
    margBottom: 175,
    slug: "bakery-products",
  },
  {
    image: seafoods,
    title: "Sea Foods",
    des: [
      "Madinat is very meticulous about good hygiene and makes it a top priority to assure that the seafood is stored in the most hygienic and temperature controlled environment, providing fresh and frozen sea food.",
      "We offers the full range of High Quality Seafood products catering to the UAE and International markets at affordable price.",
      "The entire product range under goes stringent quality checks at all levels and follows HACCP quality assurance guidelines to match tough international food quality requirements.",
    ],
    bottomImg: seafoodsBottom,
    margBottom: 256,
    slug: "sea-food",
  },
  {
    image: meat,
    title: "Meat & Poultry",
    des: [
      "When you need healthy food and even be sure that you get the best food discounts, then our meat section throws more surprises with great offers across our range of quality meat products from all-natural chicken breasts to tender, juicy steaks",
      "To ensure a truly irresistible meat in different forms, to meet your expectations for flavor and quality, we have adopted greatest care in getting these from the farms where utmost care have been taken for animal welfare.",
      "The all-natural poultry - chickens, turkeys, ducks and geese, in our store is grown adopting ecologically sound process thereby avoiding any kind of antibiotics, growth hormones, or animal by-products. Poultry sold in our store are from the farms which adopt standard welfare norms which ensure farm animals have a wholesome diet, comfortable environment with ample space to move around, well cared for by skilled stock people.",
      "We ensure our customers with the best quality mutton/lamb all year round. Our suppliers make sure that they maintain the same high welfare standards we require and hence you can be guaranteed with best quality lamb/mutton when you buy from our store.",
      "Our signature beef, roasted, broiled or grilled, rich and delectable, will delight your family and friends. This premium, hand-picked beef is so tender, juicy and palatable that everything will taste better.",
    ],
    bottomImg: meatBottom,
    margBottom: 86,
    slug: "meat-poultry",
  },
  {
    image: provision,
    title: "Provision",
    des: [
      "We, at Madinath, are excited about making life simpler and grocery shopping a thrill! You can enjoy the experience of shopping organic food & grocery with your family unlike early days when it used to be a stressful task for either one of the family.",
      "One can shop at their leisure in our Grocery store and a large number of products from great brands in our grocery list; you will find everything you want for everyday needs. We have strained ourselves hard to make the list complete, meticulously including each and every stuff, for the people of all walks of life.",
      "Right from everyday essentials, rice, flour and pulses, different varieties of kidney beans, organic sugar and jaggery, pickles, oats, products that are without artificial coloring and preservatives, all kinds of spices from all over the world, right from the regions where they originate, are featured in our grocery stock. Select from a plethora of choices in every groceries inventory, absolutely handpicked for our esteemed customers, you will find the best quality available at the lowest prices.",
      "You also have the advantage of picking the groceries either packed or loose and at Madinath you will find the best packing with international standards - both technique adopted and the material for packing. You may also take the luxury of placing the order from the convenience of your home/office and get them delivered to you at no extra cost. You can even select a convenient time for home delivery and your order will be delivered at your doorstep.",
      "Be surprised with our special discounts and offers announced for a short period like ‘for a single day’, ‘on the floor’ etc.",
    ],
    bottomImg: provisionBottom,
    margBottom: 70,
    slug: "provision",
  },
  {
    image: home,
    title: "Home Appliances",
    des: [
      "With hectic and technologically demanding lifestyles on the rise, in the contemporary household, it is unthinkable to lead life without adequate home appliances. At the same time it is not that easy, as all homemakers know, choosing the best appliances and getting good deals on them, with all brands and manufacturers as well supermarkets offering the best possible deals on all ranges, sometimes leaving the customers confused.",
      "Be it for Kitchen appliances like ovens, grills, air fryers, toasters, coffee makers and all kinds cook tops - induction, electrical etc., Home appliances like Irons, Washing Machines, Water Purifiers, refrigerators or other appliances - Air Conditioners, Air Coolers, Vacuum Cleaners, or Emergency Lights, you name it we have it.",
      "We keep you updated with the latest in technology, with almost all ranges of utility home appliances and up-to-date products of all popular brands, with some of the lowest prices and attractive deals in the region, on these household appliances.",
      "You also have the opportunity to compare prices of any appliance with that elsewhere and enjoy the shopping experience with some of the best priced deals on all utility home appliances and make your life simpler and easier.",
    ],
    bottomImg: homeBottom,
    margBottom: 185,
    slug: "home-appliances",
  },
  {
    image: footwearsGarments,
    title: "Foot Wears & Garments",
    des: [
      "Discover a myriad of trendy footwear and garments awaiting you at Madinath's vibrant collection. Whether you're in search of sleek shoes or fashionable attire, our diverse array of styles ensures there's something for everyone. From classic elegance to contemporary chic, explore the latest trends and timeless favorites within our curated selection in our supermarket",
      "At Madinath, we pride ourselves on offering affordable fashion without compromising on quality. Our budget-friendly options allow you to indulge in style without breaking the bank. With competitive prices and regular promotions, you can elevate your wardrobe without exceeding your budgetary limits.",
      "Experience hassle-free shopping with Madinath's user-friendly platform. Our intuitive interface and efficient checkout process make it easy to find and purchase your favorite footwear and garments. Shop from the comfort of your home or on the go and enjoy swift delivery straight to your doorstep.",
      "Stay ahead of the curve with our exclusive offers and discounts, available to enhance your shopping experience. From seasonal sales to limited-time promotions, there's always an opportunity to snag a stylish steal. Discover unbeatable value and unbeatable style at Madinath - your ultimate destination for affordable, on-trend fashion.",
    ],
    bottomImg: footwearsGarmentsBottom,
    margBottom: 185,
    slug: "footwears-garments",
  },
];

// export const FreshProducts = {
//   image: fresh,
//   title: "Fresh Products",
//   des: [
//     "It always goes untold that if you get fresh right, you have a tendency to get the rest of the store right. If you get fresh wrong, it doesn&apos;t matter what the rest of the store offers you. The decisive matter is that fresh food products are at the centre of shopping decisions.",
//     "Hence we have taken utmost care in managing the freshness of the products.",
//     "Enthused mostly by consumer demand for fresh, healthy and additive-free food products that are safe and nutritious, we have tried our best to respond with fresh-cut fruits or vegetables that have been trimmed, peeled and/or cut into a fully/readily utilizable product, either open or packaged, to offer to the end users. We have adopted creative product development, new and hygienic handling practices, innovative technology and skillful marketing initiatives.",
//     "Our range of fresh-cut tropical fruits includes melons, , mangoes, mangosteen, cantaloupe rambutan, jackfruit, pummelo, avocado, papaya, all kinds of berries, durian, grapes, pineapples citrus fruits and other fruit mixes.",
//     "Fresh-cut salads and vegetables on the stands include shredded leafy vegetables and salad mixes, peeled baby carrots, baby corn, broccoli and cauliflower florets, cut celery stalks, spring onions, shredded cabbage, cut asparagus, cut sweet potatoes. Fresh-cut herbs are also available.",
//   ],
//   bottomImg: freshBottom,
//   margBottom:,
//   slug: "fresh-products",
// };

// export const BakeryProducts = {
//   image: bakery,
//   title: "Bakery Products",
//   des: [
//     "Our bakery is unlike anything you’ve known before. At Madinat, we believe there is always a reason to celebrate. Relish some of the finest cakes in town ,luscious Arabic sweets, exotic varieties of fresh breads, delectable savories , heavenly muffins and more.Our exhilarating collection will surely pamper your taste buds and leave you hungry for more.",
//     "We strive hard to bridge customer expectations and quality services with our wide range of varieties of breads, pastries, cakes, sandwiches, etc. at our Bakery with good ambience to give you a relaxed mood. We have given much importance to making bakery and confectionary products of international standards and packaging at a viable cost to provide superior value to urban consumers. Our aim is to build a brand, across the region, that goes synonymous with quality bakery products manufactured with state-of-the-art, hygienic facilities.",
//   ],
//   bottomImg: bakeryBottom,
//   margBottom:,
//   slug: "bakery-products",
// };

// export const SeaFoods = {
//   image: seafoods,
//   title: "Sea Foods",
//   des: [
//     "Madinat is very meticulous about good hygiene and makes it a top priority to assure that the seafood is stored in the most hygienic and temperature controlled environment, providing fresh and frozen sea food.",
//     "We offers the full range of High Quality Seafood products catering to the UAE and International markets at affordable price.",
//     "The entire product range under goes stringent quality checks at all levels and follows HACCP quality assurance guidelines to match tough international food quality requirements.",
//   ],
//   bottomImg: seafoodsBottom,
//   margBottom:,
//   slug: "sea-food",
// };

// export const MeatPoultry = {
//   image: meat,
//   title: "Meat & Poultry",
//   des: [
//     "When you need healthy food and even be sure that you get the best food discounts, then our meat section throws more surprises with great offers across our range of quality meat products from all-natural chicken breasts to tender, juicy steaks",
//     "To ensure a truly irresistible meat in different forms, to meet your expectations for flavor and quality, we have adopted greatest care in getting these from the farms where utmost care have been taken for animal welfare.",
//     "The all-natural poultry - chickens, turkeys, ducks and geese, in our store is grown adopting ecologically sound process thereby avoiding any kind of antibiotics, growth hormones, or animal by-products. Poultry sold in our store are from the farms which adopt standard welfare norms which ensure farm animals have a wholesome diet, comfortable environment with ample space to move around, well cared for by skilled stock people.",
//     "We ensure our customers with the best quality mutton/lamb all year round. Our suppliers make sure that they maintain the same high welfare standards we require and hence you can be guaranteed with best quality lamb/mutton when you buy from our store.",
//     "Our signature beef, roasted, broiled or grilled, rich and delectable, will delight your family and friends. This premium, hand-picked beef is so tender, juicy and palatable that everything will taste better.",
//   ],
//   bottomImg: meatBottom,
//   margBottom:,
//   slug: "meat-poultry",
// };

// export const Provision = {
//   image: provision,
//   title: "Provision",
//   des: [
//     "We, at Madinath, are excited about making life simpler and grocery shopping a thrill! You can enjoy the experience of shopping organic food & grocery with your family unlike early days when it used to be a stressful task for either one of the family.",
//     "One can shop at their leisure in our Grocery store and a large number of products from great brands in our grocery list; you will find everything you want for everyday needs. We have strained ourselves hard to make the list complete, meticulously including each and every stuff, for the people of all walks of life.",
//     "Right from everyday essentials, rice, flour and pulses, different varieties of kidney beans, organic sugar and jaggery, pickles, oats, products that are without artificial coloring and preservatives, all kinds of spices from all over the world, right from the regions where they originate, are featured in our grocery stock. Select from a plethora of choices in every groceries inventory, absolutely handpicked for our esteemed customers, you will find the best quality available at the lowest prices.",
//     "You also have the advantage of picking the groceries either packed or loose and at Madinath you will find the best packing with international standards - both technique adopted and the material for packing. You may also take the luxury of placing the order from the convenience of your home/office and get them delivered to you at no extra cost. You can even select a convenient time for home delivery and your order will be delivered at your doorstep.",
//     "Be surprised with our special discounts and offers announced for a short period like ‘for a single day’, ‘on the floor’ etc.",
//   ],
//   bottomImg: provisionBottom,
//   margBottom:,
//   slug: "provision",
// };

// export const HomeAppliances = {
//   image: home,
//   title: "Home Appliances",
//   des: [
//     "With hectic and technologically demanding lifestyles on the rise, in the contemporary household, it is unthinkable to lead life without adequate home appliances. At the same time it is not that easy, as all homemakers know, choosing the best appliances and getting good deals on them, with all brands and manufacturers as well supermarkets offering the best possible deals on all ranges, sometimes leaving the customers confused.",
//     "Be it for Kitchen appliances like ovens, grills, air fryers, toasters, coffee makers and all kinds cook tops - induction, electrical etc., Home appliances like Irons, Washing Machines, Water Purifiers, refrigerators or other appliances - Air Conditioners, Air Coolers, Vacuum Cleaners, or Emergency Lights, you name it we have it.",
//     "We keep you updated with the latest in technology, with almost all ranges of utility home appliances and up-to-date products of all popular brands, with some of the lowest prices and attractive deals in the region, on these household appliances.",
//     "You also have the opportunity to compare prices of any appliance with that elsewhere and enjoy the shopping experience with some of the best priced deals on all utility home appliances and make your life simpler and easier.",
//   ],
//   bottomImg: homeBottom,
//   margBottom:,
//   slug: "home-appliances",
// };

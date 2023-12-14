import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import mapimg1 from "./mapimg/1.webp";
import mapimg2 from "./mapimg/2.webp";
import mapimg3 from "./mapimg/3.webp";
import mapimg4 from "./mapimg/4.jpg";
import mapimg5 from "./mapimg/5.jpg";
import antalya from "./travelimg/antalya.webp";
import antalya2 from "./travelimg/antalya2.webp";
import antalya3 from "./travelimg/antalya3.webp";
import antalya4 from "./travelimg/antalya4.webp";
import australia from "./travelimg/australia.webp";
import australia2 from "./travelimg/australia2.webp";
import australia3 from "./travelimg/australia3.webp";
import australia4 from "./travelimg/australia4.webp";
import dolmabahce from "./travelimg/dolmabahce.webp";
import dolmabahce2 from "./travelimg/dolmabahce2.webp";
import dolmabahce3 from "./travelimg/dolmabahce3.webp";
import dolmabahce4 from "./travelimg/dolmabahce4.webp";
import germany from "./travelimg/germany.webp";
import germany2 from "./travelimg/germany2.webp";
import germany3 from "./travelimg/germany3.webp";
import germany4 from "./travelimg/germany4.webp";
import greece from "./travelimg/greece.webp";
import greece2 from "./travelimg/greece2.webp";
import greece3 from "./travelimg/greece3.webp";
import greece4 from "./travelimg/greece4.webp";
import italy from "./travelimg/italy.webp";
import italy2 from "./travelimg/italy2.webp";
import italy3 from "./travelimg/italy3.webp";
import italy4 from "./travelimg/italy4.webp";
import japan from "./travelimg/japan.webp";
import japan2 from "./travelimg/japan2.webp";
import japan3 from "./travelimg/japan3.webp";
import japan4 from "./travelimg/japan4.webp";
import norway from "./travelimg/norway.webp";
import norway2 from "./travelimg/norway2.webp";
import norway3 from "./travelimg/norway3.webp";
import norway4 from "./travelimg/norway4.webp";
import paris from "./travelimg/paris.webp";
import paris2 from "./travelimg/paris2.webp";
import paris3 from "./travelimg/paris3.webp";
import paris4 from "./travelimg/paris4.webp";
import maldives from "./travelimg/maldives.webp";
import maldives2 from "./travelimg/maldives2.webp";
import maldives3 from "./travelimg/maldives3.webp";
import maldives4 from "./travelimg/maldives4.webp";
const cards = [
  {
    size: 2,
    title: "OPEN A WORLD OF POSSIBILITIES",
    p: "Lorem ipsum dolor sit amet.",
    button: "Browse by destination",
    img: img1,
  },
  {
    size: 1,
    title: "Save up to $200 per person",
    p: "Lorem ipsum dolor sit amet.",
    button: "Browse by destination",
    img: "",
  },
  {
    size: 1,
    title: "Off-season travel",
    p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    button: "Find your off-season tour",
    img: img3,
  },
  {
    size: 1,
    title: "Grand Tours",
    p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    button: "Shop Grand Tours",
    img: img4,
  },
  {
    size: 1,
    title: "New & trending",
    p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    button: "Check out what's new",
    img: img5,
  },
];

const sliderCards = [
  {
    title: "Experiential travel made easy",
    description: "You dream it. We’ll take care of every last detail.",
    button: "Find out how we do it",
  },
  {
    title: "Pick your perfect trip",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    button: "",
  },
  {
    title: "Put just $299 down",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    button: "",
  },
  {
    title: "Prep your packing list",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    button: "",
  },
  {
    title: "Say bon voyage!",
    description:
      "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    button: "",
  },
];
const biggerCards = [
  {
    size: 1,
    title: "Traveling with 7+",
    p: "You’ll enjoy some pretty sweet perksalong the way.",
    button: "Browse by destination",
    img: img2,
  },
  {
    size: 1,
    title: "Ready, set, get inspired",
    p: "Lorem ipsum dolor sit amet. Destination and real traveler stories to inspire and enrich your next trip.",
    button: "Browse by destination",
    img: img6,
  },
  {
    size: 1,
    title: "Save up to $200 with Specials",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.",
    button: "Shop last-minute deals",
    img: "",
  },
];

const travelCards = [
  {
    id: 0,
    img: dolmabahce,
    img2: dolmabahce2,
    img3: dolmabahce3,
    img4: dolmabahce4,
    map: mapimg1,
    url: "dolmabahce",
    title: "Dolmabahce Sarayi",
    destination: "Turkey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 2,
    stars: 5,
    oldPrice: 4012,
    price: 95,
    button: "View tour",
    favorite: false,
  },
  {
    id: 1,
    img: norway,
    img2: norway2,
    img3: norway3,
    img4: norway4,
    map: mapimg2,
    url: "norway",
    title: "Norway Mountains",
    destination: "Norway",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 4,
    stars: 4,
    oldPrice: 5524,
    price: 321,
    button: "View tour",
    favorite: false,
  },
  {
    id: 2,
    img: antalya,
    img2: antalya2,
    img3: antalya3,
    img4: antalya4,
    map: mapimg3,
    url: "antalya",
    title: "Majestic seas in Antalya",
    destination: "Turkey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 5,
    stars: 3,
    oldPrice: 6657,
    price: 456,
    button: "View tour",
    favorite: false,
  },
  {
    id: 3,
    img: australia,
    img2: australia2,
    img3: australia3,
    img4: australia4,
    map: mapimg4,
    url: "australian",
    title: "Australian Cliffs",
    destination: "Australia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 7,
    stars: 4,
    oldPrice: 2621,
    price: 123,
    button: "View tour",
    favorite: false,
  },
  {
    id: 4,
    img: maldives,
    img2: maldives2,
    img3: maldives3,
    img4: maldives4,
    map: mapimg5,
    url: "maldives",
    title: "Maldives hotel by the sea",
    destination: "Maldives",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 13,
    stars: 5,
    oldPrice: 1912,
    price: 341,
    button: "View tour",
    favorite: false,
  },
  {
    id: 5,
    img: germany,
    img2: germany2,
    img3: germany3,
    img4: germany4,
    map: mapimg1,
    url: "germany",
    title: "Germany's beautiful castles",
    destination: "Germany",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 13,
    stars: 5,
    oldPrice: 1912,
    price: 341,
    button: "View tour",
    favorite: false,
  },
  {
    id: 6,
    img: paris,
    img2: paris2,
    img3: paris3,
    img4: paris4,
    map: mapimg2,
    url: "france",
    title: "Paris Eiffel Tower",
    destination: "France",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 13,
    stars: 5,
    oldPrice: 1912,
    price: 274,
    button: "View tour",
    favorite: false,
  },
  {
    id: 7,
    img: italy,
    img2: italy2,
    img3: italy3,
    img4: italy4,
    map: mapimg3,
    url: "italy",
    title: "Italy's beautiful streets",
    destination: "Italy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 13,
    stars: 5,
    oldPrice: 1912,
    price: 341,
    button: "View tour",
    favorite: false,
  },
  {
    id: 8,
    img: japan,
    img2: japan2,
    img3: japan3,
    img4: japan4,
    map: mapimg4,
    url: "japan",
    title: "Japan's beautiful temples",
    destination: "Japan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.",
    groupSize: 13,
    stars: 5,
    oldPrice: 1912,
    price: 341,
    button: "View tour",
    favorite: false,
  },
  {
    id: 9,
    img: greece,
    img2: greece2,
    img3: greece3,
    img4: greece4,
    map: mapimg5,
    url: "greece",
    title: "Greece's beautiful beaches",
    destination: "Greece",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus!",
    groupSize: 13,
    stars: 5,
    oldPrice: 1912,
    price: 341,
    button: "View tour",
    favorite: false,
  },
];

export { cards, sliderCards, biggerCards, travelCards };

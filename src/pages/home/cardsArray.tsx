import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import travelimg1 from './travelimg/1.jpg';
import travelimg2 from './travelimg/2.jpg';
import travelimg3 from './travelimg/3.jpg';
import travelimg4 from './travelimg/4.jpg';
import travelimg5 from './travelimg/5.jpg';
import mapimg1 from './mapimg/1.webp';
import mapimg2 from './mapimg/2.webp';
import mapimg3 from './mapimg/3.webp';
import mapimg4 from './mapimg/4.jpg';
import mapimg5 from './mapimg/5.jpg';
const cards = [
    { size: 2, title: 'OPEN A WORLD OF POSSIBILITIES', p: "Lorem ipsum dolor sit amet.", button: "Browse by destination", img: img1 },
    { size: 1, title: 'Save up to $200 per person', p: "Lorem ipsum dolor sit amet.", button: "Browse by destination", img: "" },
    { size: 1, title: 'Off-season travel', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Find your off-season tour", img: img3 },
    { size: 1, title: 'Grand Tours', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Shop Grand Tours", img: img4 },
    { size: 1, title: 'New & trending', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Check out what's new", img: img5 },
  ];

  const sliderCards = [
    { title: "Experiential travel made easy", description: "You dream it. We’ll take care of every last detail.", button: "Find out how we do it" },
    { title: "Pick your perfect trip", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Put just $299 down", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Prep your packing list", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Say bon voyage!", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
  ]
  const biggerCards = [
    { size: 1, title: 'Traveling with 7+', p: "You’ll enjoy some pretty sweet perksalong the way.", button: "Browse by destination", img: img2 },
    { size: 1, title: 'Ready, set, get inspired', p: "Lorem ipsum dolor sit amet. Destination and real traveler stories to inspire and enrich your next trip.", button: "Browse by destination", img: img6 },
    { size: 1, title: 'Save up to $200 with Specials', p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.", button: "Shop last-minute deals", img: "" },
  ]
  
  const travelCards = [
    { img: travelimg1, map: mapimg1, url: "dolmabahce", title: "Dolmabahce Sarayi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.", groupSize: "15 travelers", stars: 5, oldPrice: "4012" , price: "211", button: "View tour" },
    { img: travelimg2, map: mapimg2, url: "norway", title: "Norway Mountains", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.", groupSize: "12 travelers",stars: 4, oldPrice: "5524" , price: "321", button: "View tour" },
    { img: travelimg3, map: mapimg3, url: "antalya", title: "Majestic seas in Antalya", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.", groupSize: "5 travelers",stars: 3, oldPrice: "6657" , price: "456", button: "View tour" },
    { img: travelimg4, map: mapimg4, url: "australian", title: "Australian Cliffs", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.", groupSize: "10 travelers",stars: 4, oldPrice: "2621" , price: "123", button: "View tour" },
    { img: travelimg5, map: mapimg5, url: "maldives", title: "Maldives hotel by the sea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quas veritatis blanditiis officiis recusandae deleniti dolor ullam voluptatibus! Quaerat.", groupSize: "22 travelers",stars: 5, oldPrice: "1912" , price: "341", button: "View tour" },
  ]

    export {cards, sliderCards, biggerCards, travelCards};
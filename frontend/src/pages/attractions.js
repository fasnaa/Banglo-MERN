import React from "react";
import './attractions.css';

const places = [
  {
    name: "Lalbagh Botanical Garden",
    image: "https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Lalbagh-Bangalore_2.jpg.webp?VersionId=ZZe9pMMmPNFkxhB488vtoWRh0tFzLjtw&itok=rVwcdrA0",
    description: "Spread across 240 acres, Lalbagh Botanical Garden is home to a variety of exotic plant species, a serene lake, and the iconic Glass House, which hosts the annual flower show.",
    timings: "6:00 AM - 7:00 PM",
  },
  {
    name: "Cubbon Park",
    image: "https://media.assettype.com/TNIE%2Fimport%2F2013%2F12%2F9%2F4%2Foriginal%2FCubbon-Park.jpg?w=1024&auto=format%2Ccompress&fit=max",
    description: "A lush green oasis in the heart of Bangalore, Cubbon Park is perfect for morning walks, cycling, and photography. It houses historical statues, the State Library, and vibrant flora.",
    timings: "6:00 AM - 6:00 PM",
  },
  {
    name: "Bangalore Palace",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLOwHzYSJi_dPC1GH3yjBVNTxHvJVRtxirw&s",
    description: "Modeled after England’s Windsor Castle, Bangalore Palace features Tudor-style architecture, elegant wood carvings, sprawling grounds, and a rich collection of paintings and photographs.",
    timings: "10:00 AM - 5:30 PM",
  },
  {
    name: "Vidhana Soudha",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Vidhana_Soudha_sunset.jpg",
    description: "An architectural marvel, Vidhana Soudha is the seat of Karnataka’s legislature. Built in Dravidian style, this grand building is beautifully lit in the evenings.",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    name: "ISKCON Temple Bangalore",
    image: "https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/6754/isk-5-1729852866.webp",
    description: "One of the largest ISKCON temples in the world, this spiritual sanctuary offers a divine experience with mesmerizing chants, delicious prasadam, and beautiful deities of Lord Krishna.",
    timings: "4:15 AM - 9:00 PM",
  },
  {
    name: "UB City Mall",
    image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/05/UBCity.jpg",
    description: "A premium shopping and entertainment hub, UB City boasts luxury brands, rooftop restaurants, art galleries, and a vibrant nightlife experience.",
    timings: "11:00 AM - 11:00 PM",
  },
  {
    name: "Wonderla Amusement Park",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvPksopC9GQnxEkOICLpeIFdxzJOd--0QIA&s",
    description: "India’s top-rated amusement park, Wonderla features thrilling roller coasters, wave pools, rain dance, and adventure rides, making it a perfect getaway for families and friends.",
    timings: "11:00 AM - 6:00 PM",
  },
  {
    name: "Bannerghatta National Park",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42_unqOqqY4mJmXSYEyDo3v5fLbm7JjR1dw&s",
    description: "A paradise for wildlife lovers, Bannerghatta National Park offers jungle safaris, a butterfly park, a zoo, and an animal rescue center with tigers, lions, and elephants.",
    timings: "9:30 AM - 5:00 PM",
  },
  {
    name: "Commercial Street",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoHR7NGWyE_7x9AGVyFP5c2Dfdn73fGSfgw&s",
    description: "A shopaholic’s delight, Commercial Street is famous for its budget-friendly fashion stores, exquisite jewelry, and delicious street food options.",
    timings: "10:00 AM - 9:00 PM",
  },
  {
    name: "Nandi Hills",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiD-alwuT-ZrdKe08HUMmmr_ubmp9gG6Uug&s",
    description: "A serene hill station, Nandi Hills offers breathtaking sunrise views, ancient temples, and adventure activities like paragliding and cycling.",
    timings: "6:00 AM - 6:00 PM",
  },
  {
    name: "Innovative Film City",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZ-fMmCdAP7YGaFiIRq34mAY36G7IiNakPg&s",
    description: "An entertainment theme park featuring Bollywood film sets, wax museums, adventure zones, and cultural shows for a fun-filled experience.",
    timings: "10:00 AM - 7:00 PM",
  },
  {
    name: "Jawaharlal Nehru Planetarium",
    image: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoJp39rAzlxfeZG_o6tnyyvhUWZA47eKBkg&s",
    description: "A must-visit for astronomy lovers, the planetarium offers interactive space exhibits and captivating sky shows about stars, planets, and galaxies.",
    timings: "10:30 AM - 5:30 PM",
  },
];


const attractions = () => {
  return (
    <div className="container">
      <h1 className="title">Main Attraction</h1>
      <div className="grid">
        {places.map((place, index) => (
          <div key={index} className="card">
            <img src={place.image} alt={place.name} />
            <h2 className="card-title">{place.name}</h2>
            <p className="card-description">{place.description}</p>
            <p className="card-timings">⏰ {place.timings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default attractions;

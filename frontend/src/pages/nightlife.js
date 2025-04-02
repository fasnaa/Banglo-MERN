import React from "react";
import "./nightlife";

const data = [
  { title: "Main Attractions", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Vidhana_Soudha_sunset.jpg", link: "/attractions" },
  { title: "Nightlife", image: "https://images.pexels.com/photos/31305759/pexels-photo-31305759/free-photo-of-stunning-aerial-night-view-of-tromso-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "#nightlife" },
  { title: "Hidden Spots", image: "https://images.pexels.com/photos/27219919/pexels-photo-27219919/free-photo-of-dinh-vua-meo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "#hidden-spots" },
  { title: "Language Support", image: "https://i.pinimg.com/736x/c1/df/c5/c1dfc543bcf0dd88fc4211ab5c5fd4ea.jpg", link: "#language-support" },
  { title: "Safety Measures & Weather Updates", image: "https://i.pinimg.com/736x/8a/ff/8b/8aff8ba0f08bb12227600e74d5de710e.jpg", link: "#safety-weather" },
];

const AttractionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Explore the City</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="bg-white rounded-2xl shadow-lg p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AttractionsPage;
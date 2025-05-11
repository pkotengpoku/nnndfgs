import React from 'react';

const countries = [
  'United Kingdom',
  'Australia',
  'Ireland',
  'United States',
  'Canada',
  'Germany',
  'Spain',
];

const cities = [
  'London', 'Leicester', 'Liverpool', 'Sheffield', 'Newcastle', 'Cardiff',
  'Birmingham', 'Nottingham', 'Coventry', 'Leeds', 'Manchester', 'Swansea'
];

const imageUrl = 'https://www.setaswall.com/wp-content/uploads/2017/03/London-Great-Britain-England-Wallpaper-2560x1600.jpg'; // placeholder image

const PopularCities = () => {
  return (
    <div className="px-6 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cities.map((city, idx) => (
          <div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group cursor-pointer"
          >
            {/* Image with zoom on hover */}
            <img
              src={imageUrl}
              alt={city}
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark overlay fades in on hover */}
            <div className="absolute inset-0 bg-slate-900/40 transition-opacity duration-500 group-hover:opacity-70" />

            {/* Bottom text */}
            <div className="absolute bottom-0 w-full text-white text-sm font-semibold text-center  py-2 transition-opacity duration-500 group-hover:opacity-100">
              {city}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;

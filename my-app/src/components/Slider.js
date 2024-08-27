import React, { useState } from "react";

const Slider = () => {
  const testimonials = [
    {
      id: 1,
      name: "William Smith",
      role: "Customer",
      text: "أنا أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها!",
      rating: 4.7,
      image: "/New folder/main.png"
    },
    {
      id: 2,
      name: "John Doe",
      role: "Customer",
      text: "أنا أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها!",
      rating: 4.9,
      image:"/New folder/main.png"
    },
    {
      id: 3,
      name: "Jane Doe",
      role: "Customer",
      text: "أنا أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها!",
      rating: 5.0,
      image: "/New folder/main.png"
    },
    {
      id: 4,
      name: "Alice Johnson",
      role: "Customer",
      text: "أنا أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها!",
      rating: 4.8,
      image: "/New folder/main.png"
    },
    {
      id: 5,
      name: "Robert Brown",
      role: "Customer",
      text: "أنا أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها! هذه أفضل منصة أحب خدمتهم وأستمتع بها!",
      rating: 4.6,
      image: "/New folder/main.png"
    }
    // Add more testimonials as needed
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    if (current + 3 < length) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
  <div className="mt-11">
      <h2 className="text-4xl font-bold text-start ml-32  mb-8">
    What Our <br />
    <span className="text-blue-500">Customer Says</span>
  </h2>
    <div className="relative flex flex-col items-center h-[100%] w-full">
   
      <div className="relative flex justify-center items-center w-full">
        <button
          onClick={prevSlide}
          className="absolute left-12 bg-blue-500 text-white rounded-full p-2"
          disabled={current === 0}
        >
          &#8249;
        </button>
        <div className="flex justify-center space-x-4 overflow-hidden w-3/4">
          {testimonials.slice(current, current + 3).map((testimonial) => (
            <div
              className="opacity-100 transition duration-500 ease-in-out transform scale-100 w-1/3"
              key={testimonial.id}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center mx-2">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4 mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-gilroy font-regular">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-800 font-poppins-regular">{testimonial.text}</p>
                <div className="flex justify-end items-center mt-4">
                  <span className="text-yellow-500">⭐</span>
                  <span className="ml-2 text-gray-800">{testimonial.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-12 bg-blue-500 text-white rounded-full p-2"
          disabled={current + 3 >= length}
        >
          &#8250;
        </button>
      </div>
    </div>
  </div>
  );
};

export default Slider;

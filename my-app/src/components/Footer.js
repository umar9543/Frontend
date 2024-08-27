import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className=" justify-center  items-center py-10 sm:py-4 bg-gray-900 mt-24">
      <div className="flex justify-center items-center py-10 sm:py-4 ">
        <div className="container flex justify-between lg:px-0 md:px-5 text-white sm:gap-x-11">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <img src="New folder/image_footer_logo.svg" alt="Footer Logo" className="h-44 w-44 sm:w-24 sm:h-28 object-contain" />
          </div>

          {/* Address Section */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-blue-500">Address</p>
            <div className="flex items-start gap-2">
              <img src="images/img_save_white_a700.png" alt="Address Icon" className="h-5 w-5 object-cover" />
              <p>Park Avenue South, New York, 74812, United States</p>
            </div>
            <div className="flex items-start gap-2">
              <img src="images/img_save_white_a700.png" alt="Contact Icon" className="h-5 w-5 object-cover" />
              <p>contact@016labs.com</p>
            </div>
            <div className="flex items-start gap-2">
              <img src="images/img_save_white_a700.png" alt="Phone Icon" className="h-5 w-5 object-cover" />
              <p>000-123-456</p>
            </div>
            <div className="flex gap-4 mt-2">
              <p>FAQ's</p>
              <a href="#">Contact Us</a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-blue-500">Links</p>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Our Chefs</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">What’s new</a></li>
            </ul>
          </div>

          {/* Newsletter and Socials */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-blue-500">Subscribe to Newsletter</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 rounded-l-md text-black"
              />
              <button className="bg-blue-500 p-2 rounded-r-md">
                <img src="images/img_save.svg" alt="Subscribe" />
              </button>
            </div>
            <p className="text-xl font-semibold text-blue-500">Our Social</p>
            <div className="flex gap-3">
              <img src="images/img_mask_group.png" alt="Social Icon 1" className="h-8 w-8 object-cover" />
              <img src="images/img_mask_group.png" alt="Social Icon 2" className="h-8 w-8 object-cover" />
              <img src="images/img_mask_group.png" alt="Social Icon 3" className="h-8 w-8 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 w-full text-center flex items-center justify-center gap-x-20">
        {/* <p className="text-sm text-white mt-4">
          Copyrights 2022 016 Labs - All Rights Reserved
        </p> */}
        <div class="w-72 h-0.5 bg-white"></div>
        <div>  Copyrights 2022 016 Labs - All Rights Reserved</div>
        <div class="w-72 h-0.5 bg-white"></div>
      </div>
    </footer>
  );
}

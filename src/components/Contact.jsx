import { InstagramEmbed } from 'react-social-media-embed';

function Contact() {
  return (
    <div id="contact" className="bg-gray-100 w-full min-h-screen p-2 flex items-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
            If you have any questions or would like to schedule a consultation with me, please do not hesitate to do it
            </p>
            <ul className="text-lg text-gray-700">
            <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
       <img
         src="https://ailenhairstylistweb.s3.amazonaws.com/salon-hair-stylist-5331382_1280.png"
         alt="Contact"
         className="w-full h-auto object-cover rounded-tl-2xl rounded-br-2xl"
       />
     </div>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <a href="tel:+17867949162"> +1 (786) 794 9162 </a>
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <a href={"mailto:ailenmejiastravieso@gmail.com"}>ailenmejiastravieso@gmail.com</a>
              </li>
              

              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <InstagramEmbed url='https://www.instagram.com/p/Ct-HZtfsIwc/'/>
              
              </li>

            </ul>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Contact;

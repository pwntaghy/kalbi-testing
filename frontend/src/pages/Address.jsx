import React from "react";

const Address = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">Our Office</h3>
            <p className="font-medium text-gray-400 leading-relaxed">
              Kalbii Global Private Limited <br />
              Sumerpur, Pali <br />
              Rajasthan, India
            </p>
          </div>

          {/* Responsive Map */}
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden border border-neutral-800">
            <iframe
              title="Kalbii Global Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.58234833562216!2d73.07563178843142!3d25.162175513667915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942ed003ce564b5%3A0x8976716347a31f2!2sKalbii%20Global%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1766386448210!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;

import React from 'react'
import img from '../../assets/pragati.jpg'

const Pragati = () => {
  return (
    <div className="p-5">
      <h3 className="text-2xl sm:text-5xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] py-1">
        प्रगति
      </h3>
      <div className="flex flex-col sm:flex-row justify-evenly items-center mt-8">
        {/* Image Container with Layered Effect */}
        <div className="relative w-60 sm:w-80 m-3">
          {/* Background Layer */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-full h-full bg-[#fd645b] rounded-lg -z-10"></div>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-full h-full bg-[#fd645b] rounded-lg -z-10"></div>

          {/* Image with Border & Shadow */}
          <img
            src={img}
            className="w-full object-fill rounded-lg shadow-lg border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="sm:m-3 flex justify-center items-start flex-col sm:w-[600px] sm:p-3 p-5 mt-7 text-sm sm:text-base  card">
          <p className="mb-5">
            भारत में 9 करोड़ युवा महिलाएँ (15-29 वर्ष) शिक्षा, रोजगार और
            प्रशिक्षण (NEET - Not in Education, Employment & Training) दायरे से
            बाहर हैं।। इसका मुख्य कारण कम उम्र में विवाह, मातृत्व, पलायन,
            माध्यमिक विद्यालय तक पहुँच की कमी, शैक्षणिक बाधाएँ और गरीबी है।
            इनमें से कई युवतियाँ अपने स्वास्थ्य, घरों और समुदायों के बारे में
            सूचित निर्णय लेने के लिए आवश्यक स्वायत्तता से वंचित हैं, जो उन्हें
            औपचारिक अर्थव्यवस्था से प्रभावी रूप से हाशिए पर डाल देता है। हम
            प्रगति के माध्यम से इन युवतियों को अपनी 10वीं कक्षा की शिक्षा पूरी
            करने में सहायता करने के साथ-साथ आगे की शिक्षा, रोजगार और कौशल विकास
            के अवसरों का सृजन करने की आकांक्षा रखते हैं। हमारा लक्ष्य किशोरीयों
            और युवतियों को सशक्त बनाना है, उन्हें अपनी पूरी क्षमता का एहसास करने
            के लिए आवश्यक विकल्प और संसाधन प्रदान करना है।
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pragati

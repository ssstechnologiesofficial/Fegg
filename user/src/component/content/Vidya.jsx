
import React from "react";
import img from "../../assets/Nav-bar(Sub-menu) Images/कार्यक्रम/Vidhya/Vidhya2.jpg";
import bgImage from "../../assets/Nav-bar(Sub-menu) Images/कार्यक्रम/Vidhya/Vidhya1.png"; // Ensure this is the correct path

const Vidya = () => {
  return (
    <div className="">
      {/* Header Section with Background Image */}
      <div className="relative">
        <div
          className="vidya-img flex items-center justify-start px-10"
          style={{
            width: "100%",
            height: "560px",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="absolute top-10 right-10 text-red-600 text-3xl sm:text-5xl font-bold text-right">
            <h1 className="uppercase pt-2 inline-block">विद्या</h1>
            <p className="text-gray-100 border-t-4 border-red-600 py-3 text-sm sm:text-lg">
              किशोरियों और युवा महिलाओं के लिए <br />
              दूसरा मौका कार्यक्रम
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:mx-12 mx-4 relative -mt-14 rounded-lg shadow-lg mb-8 z-10 bg-white">
        <div className="flex flex-col sm:flex-row justify-evenly items-center mt-8">
          {/* Image Container with Layered Effect */}
          <div className="relative w-60 sm:w-80 m-3">
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-full h-full bg-[#fd645b] rounded-lg -z-10"></div>
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-full h-full bg-[#fd645b] rounded-lg -z-10"></div>

            <img
              src={img}
              className="w-full h-full object-fill rounded-lg shadow-lg border-4 border-white"
              alt="Pragati Program"
            />
          </div>

          {/* Text Content */}
          <div className="sm:m-3 flex justify-center items-start flex-col sm:w-[600px] sm:p-3 p-5 mt-7 text-sm sm:text-base">
            <div className="text-center py-4">
              <h3 className="text-xl md:text-2xl font-bold text-red-400 pt-1 inline-block">
                विद्या
              </h3>
            </div>
            {/* <p className="mb-5">
              हमारे विद्या प्रोग्राम के साझेदार ग्रामीण क्षेत्रों में हाशिए पर
              मौजूद बालिकाओं की पहचान कर के, जागरूकता और नामांकन में सहायता करने
              के लिए गाँव-आधारित सामुदायिक स्वयंसेवकों और लैंगिक समानता समर्थकों
              का एक नेटवर्क तैयार करते हैं, जिसे "टीम बालिका" के नाम से जाना
              जाता है। नामांकन के बाद, हमारे साझेदार बालिकाओं के सीखने के
              परिणामों में सुधार लाने के लिए पूरक पुनर्साक्षरता कक्षाएँ प्रदान
              करके यह सुनिश्चित करते हैं कि वे प्रभावी रूप से सीख रही हैं। इनमें
              से कई बालिकाओं को अपनी सहपाठियों के साथ तालमेल बिठाने में गंभीर
              चुनौतियों का सामना करना पड़ता है, क्योंकि वे अक्सर अपने परिवार में
              स्कूल जाने वाली पहली पीढ़ी की बालिकाएं होती हैं। इन अंतरालों को
              दूर करने के लिए, हम एक सूक्ष्म-दक्षता आधारित विद्यालयीन पाठ्यक्रम
              "ज्ञान का पिटारा" (GKP या “Box of Knowledge”) का उपयोग करते हैं,
              जो विशेष रूप से तीसरी से पाँचवीं कक्षा के बच्चों के लिए तैयार किया
              गया है। यह दृष्टिकोण मूलभूत कौशलों को मजबूत करने पर केंद्रित है और
              नए शिक्षार्थियों को अकादमिक सफलता और दीर्घकालिक शैक्षिक उपलब्धियों
              के लिए आवश्यक आधार तैयार करने में सक्षम बनाता है।
            </p> */}
            
            <p className="mb-5">
              {/* <strong>विद्या:</strong>  */}
              एजुकेट गर्ल्स का इन-स्कूल प्राथमिक कार्यक्रम 6-14 वर्ष की लड़कियों पर केंद्रित है जो औपचारिक शिक्षा प्रणाली से बाहर हैं। हमारा मिशन ग्रामीण भारत में शिक्षा से वंचित लड़कियों को चिन्हित कर, उनका नामांकन और ठहराव करने के साथ उन्हें गुणवत्तापूर्ण शिक्षा एवं अवसर प्रदान करना है।
            </p>
            
            <ul className="list-disc pl-5 mb-5">
              <li><strong>लोकल चैंपियन:</strong> गांव के सबसे शिक्षित युवाओं को टीम बालिका के रूप में नियुक्त किया जाता है।</li>
              <li><strong>घर-घर सर्वेक्षण:</strong> शिक्षा से वंचित लड़कियों की पहचान करना।</li>
              <li><strong>मानसिकता परिवर्तन:</strong> गाय की बैठकों के माध्यम से स्थायी मानसिकता परिवर्तन लाना।</li>
              <li><strong>नामांकन और ठहराव:</strong> स्कूल प्रबंधन समिति की मदद करना ताकि लड़कियों का ठहराव बना रहे।</li>
              <li><strong>गुणवत्तापूर्ण शिक्षा:</strong> शिक्षा परिणामों को बढ़ाने के लिए।</li>
              <li><strong>जीवन कौशल प्रशिक्षण:</strong> जीवन की चुनौतियों का सामना करने में मदद, आत्मनिर्भरता और लचीलापन को बढ़ावा देना।</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vidya;


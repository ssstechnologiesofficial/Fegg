import React, { useState } from 'react'

const faqs = [
  {
    question: 'What is MPSOS?',
    answer:
      'MPSOS stands for Madhya Pradesh State Open School, an initiative that provides flexible learning opportunities for students in classes 10 and 12 through open schooling.',
  },
  {
    question: 'Who can enroll in MPSOS?',
    answer:
      'Any student who wishes to complete their 10th or 12th education and meets the eligibility criteria can enroll in MPSOS.',
  },
  {
    question: 'What are the benefits of enrolling in MPSOS?',
    answer:
      'Students can access flexible learning options, study materials, practice tests, exam-related information, and results—all on a single platform.',
  },
  {
    question: 'How do I register for MPSOS?',
    answer:
      'Visit the MPSOS website, fill in the required details, and complete the preliminary registration. For final registration, visit your nearest AISECT center with the necessary documents and pay the enrollment fee.',
  },
  {
    question: 'What documents are required for registration?',
    answer:
      'You need to provide your previous academic records, an identity proof (Aadhaar card or equivalent), passport-size photographs, and any other documents required during the registration process.',
  },
  {
    question:
      'Can I complete my registration online without visiting an AISECT center?',
    answer:
      'No, the final registration process, including document submission and fee payment, must be completed at the nearest AISECT center.',
  },
  {
    question: 'Where can I find the list of AISECT centers?',
    answer:
      'The list of AISECT centers is available under the "AISECT Centers" section on the EG-MPSOS website.',
  },
  {
    question: 'How can I access study materials?',
    answer:
      'After registration, you can log in to the EG-MPSOS website and access the "Study Materials" section to download or view the available resources.',
  },
  {
    question: 'Is study material available for free?',
    answer:
      'Yes, study materials are available free of charge for all registered students.',
  },
  {
    question: 'In which languages is the study material available?',
    answer:
      'Study materials are available in Hindi, as it is easy for all students to read.',
  },
  {
    question: 'What are practice sets?',
    answer:
      'Practice sets are online mock tests available on the website to help students prepare for exams. They simulate the actual exam format and assess your knowledge.',
  },
  {
    question: 'How can I attempt practice sets?',
    answer:
      'Log in to the MPSOS website, go to the "Practice Sets" section, and select your subject to begin practicing.',
  },
  {
    question: 'Are practice sets timed?',
    answer:
      'Yes, practice sets are designed to simulate real exam conditions and are timed accordingly.',
  },
  {
    question: 'Can I attempt practice sets multiple times?',
    answer:
      'Yes, you can attempt practice sets multiple times to improve your understanding and skills.',
  },
  {
    question: 'How can I get my admit card?',
    answer:
      'Admit cards will be available for download on the MPSOS website [https://www.mpsos.nic.in/]. You can log in with your credentials to download them before the exam. You can also visit an AISECT center to collect your admit card.',
  },
  {
    question: 'Where can I check my exam results?',
    answer:
      'Exam results will be published under the "Results" section on the MPSOS website [https://www.mpsos.nic.in/]. You can access them using your enrollment number.',
  },
  {
    question: 'What should I do if there is an error in my result?',
    answer:
      'If you notice any discrepancies in your results, contact the MPSOS helpdesk immediately via the provided phone number or email ID.',
  },
  {
    question: 'How do I configure the chatbot with WhatsApp?',
    answer:
      'Log in to the EG-MPSOS website, go to the "Chatbot Integration" section, and follow the instructions to link the chatbot with your WhatsApp.',
  },
  {
    question: 'How can the chatbot assist me?',
    answer:
      'The chatbot can assist with registration queries, study materials, practice sets, exam schedules, results, and general support.',
  },
  {
    question: 'Is the chatbot available 24/7?',
    answer: 'Yes, the chatbot is available 24/7 to assist students.',
  },
  {
    question: 'How can I contact the MPSOS helpdesk?',
    answer:
      'You can contact the helpdesk through the toll-free number or email provided on the website.',
  },
  {
    question: 'Will I receive notifications about important updates?',
    answer:
      'Yes, registered students will receive notifications about important updates like exam schedules and results via email, SMS, and the website.',
  },
  {
    question: 'How can I provide feedback about the MPSOS website?',
    answer:
      'Currently, there is no dedicated interface for student feedback. However, you can share your feedback by calling the toll-free number or sending an email to the provided support address.',
  },
  {
    question: 'What should I do if I face technical issues on the website?',
    answer:
      'Report any technical issues to the helpdesk, and they will assist in resolving them as soon as possible.',
  },
  {
    question: 'Can I update my personal details after registration?',
    answer:
      'Yes, you can update your details by visiting an AISECT center. However, only the center can edit your profile, and changes must be made within a limited time frame.',
  },
]

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border  rounded-lg p-4 shadow-sm">
            <button
              className="w-full  text-left font-medium text-lg flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700 border-b-2 border-[#fd645b] ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQComponent

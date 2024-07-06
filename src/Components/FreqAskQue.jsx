import { useState } from "react";

function FreqAskQue() {
  const [activeTab, setActiveTab] = useState("Eligibility");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = {
    Eligibility: [
      "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      "What is the minimum system configuration required?",
    ],
    "How To Use?": [
      "How do I access the course materials?",
      "How do I track my progress?",
    ],
    "Terms & Conditions": [
      "What is the refund policy?",
      "Are there any prerequisites?",
    ],
  };

  const answers = {
    "Do I need to have prior Product Management and Project Management experience to enroll in the program?":
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    "What is the minimum system configuration required?":
      "The minimum system configuration required is...",
    "How do I access the course materials?":
      "You can access the course materials by...",
    "How do I track my progress?": "You can track your progress by...",
    "What is the refund policy?": "The refund policy is...",
    "Are there any prerequisites?": "There are no prerequisites...",
  };

  const handleQuestionClick = (question) => {
    setActiveQuestion((prevQuestion) =>
      prevQuestion === question ? null : question
    );
  };

  return (
    <div className="flex flex-col items-center w-full h-[350px]">
      <h2 className="text-3xl mt-4 font-bold mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <div className="flex gap-10 mt-10 items-center justify-center max-w-5xl w-full">
        <div className="flex flex-col gap-4 w-[259px] h-[208px]">
          {Object.keys(questions).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-4 border rounded-md ${
                activeTab === tab
                  ? "bg-white text-blue-600 font-semibold shadow"
                  : "bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full min-w-[500px]">
          {questions[activeTab].map((question) => (
            <div key={question} className="p-4 border-b">
              <button
                onClick={() => handleQuestionClick(question)}
                className={`text-lg font-medium text-left w-full ${
                  activeQuestion === question
                    ? "text-blue-600"
                    : "text-gray-800"
                }`}
              >
                {question}
              </button>
              {activeQuestion === question && (
                <p className="mt-2 text-gray-600">{answers[question]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreqAskQue;

export interface QuestionsProps {
  question: string;
  options: string[];
  handleAnswerClick: (selectOption: string) => void;
}

const Questions: React.FC<QuestionsProps> = ({
  question,
  options,
  handleAnswerClick,
}) => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-[80px] ">{question}</h2>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {options.map((option, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}   
        </div>
      </div>
    </div>
  );
};

export default Questions;

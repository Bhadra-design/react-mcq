interface ResultProps {
  score: number;
  totalQuestions: number;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions }) => {
  const percentage = () => {
    return ((score / totalQuestions) * 100).toFixed(2);
  };

  const message = () => {
    const percentageScore = percentage();
    if (Number(percentageScore) >= 80) {
      return (
        <p>
          Excellent! You scored {score} out of {totalQuestions} ({percentageScore}%)
        </p>
      );
    } else if (Number(percentageScore) >= 60) {
      return (
        <p>
          Good job! You scored {score} out of {totalQuestions} ({percentageScore}%)
        </p>
      );
    } else {
      return (
        <p>
          Keep practicing! You scored {score} out of {totalQuestions} (
          {percentageScore}%)
        </p>
      );
    }
  };
  return <div>
    <div className="p-4">
        <div className="text-center text-xl font-semibold mb-4">Quiz Completed!!</div>
        {message()}
    </div>
  </div>;
};

export default Result;

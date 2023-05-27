
const ResetButton = (props) => {
  const { resetValue } = props;
  
  const handleReset = () => {
    resetValue(0);
  };

  return (
    <button
      type="button"
      onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetButton;

const ResetButton = (props) => {
  const { resetValue, resBtnName } = props;
  
  const handleReset = () => {
    resetValue(0);
  };

  return (
    <button
      type="button"
      onClick={handleReset}>
      {resBtnName}
    </button>
  );
};

export default ResetButton;
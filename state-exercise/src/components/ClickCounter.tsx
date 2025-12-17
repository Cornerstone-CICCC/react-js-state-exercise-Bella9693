type Props = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ClickCounter = ({ setCount }: Props) => {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Click Counter</button>
  );
};

export default ClickCounter;

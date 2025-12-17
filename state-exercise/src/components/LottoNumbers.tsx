type Props = {
  setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

const LottoNumbers = ({ setLottoNumbers }: Props) => {
  const generateNumbers = () => {
    const numbers = Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * 50) + 1
    );
    setLottoNumbers(numbers);
  };

  return <button onClick={generateNumbers}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;

type Props = {
  setIsLightsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const LightToggle = ({ setIsLightsOn }: Props) => {
  return (
    <button onClick={() => setIsLightsOn((prev) => !prev)}>
      Toggle Lights
    </button>
  );
};

export default LightToggle;

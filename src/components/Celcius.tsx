interface Props {
  toFarhrenheid: (celcius: number) => void;
}

const Celcius = ({ toFarhrenheid }: Props) => {
  return (
    <>
      <input
        onChange={(e) => e.target.value}
        type="text"
        placeholder="Geeft Celcius Temp"
      />
    </>
  );
};

export default Celcius;

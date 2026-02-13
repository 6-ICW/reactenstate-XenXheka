interface Props {
  Temp: number;
}

const Celcius = ({ Temp }: Props) => {
  return (
    <>
      <input
        onChange={(e) => e.target.value}
        type="text"
        placeholder="Geeft Celcius Temp"
        value={Temp}
      />
    </>
  );
};

export default Celcius;

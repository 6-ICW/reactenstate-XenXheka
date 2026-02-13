interface Props {
  Temp: number;
}
const Farenheid = ({ Temp }: Props) => {
  return (
    <>
      <input
        onChange={(e) => e.target.value}
        type="text"
        placeholder="Geef Farenheid"
        value={Temp}
      />
    </>
  );
};

export default Farenheid;

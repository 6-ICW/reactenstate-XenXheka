interface Props {
  ToCelcius: (Fahrenheid: number) => void;
}
const Farenheid = ({ ToCelcius }: Props) => {
  return (
    <>
      <input
        onChange={(e) => e.target.value}
        type="text"
        placeholder="Geef Farenheid"
      />
    </>
  );
};

export default Farenheid;

export default function Languages(props) {
  return (
    <span
      style={{
        margin: "2px",
        borderRadius: "3px",
        padding: "4.5px",
        color: `${props.color}`,
        backgroundColor: `${props.backgroudnCl}`,
      }}
    >
      {props.name}
    </span>
  );
}

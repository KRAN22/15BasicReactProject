const List = (props) => {
  console.log(props.people);
  return (
    <div>
      {props.people.map((person) => {
        const { id, name, age, image } = person;
        return <img src={image} alt={name} />;
      })}
    </div>
  );
};
export default List;

import "./style.css";

const List = (props) => {
  console.log(props.people);
  return (
    <div>
      {props.people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="list-container">
            <img src={image} alt={name} />
            <div className="list-name">
              <h4> {name} </h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;

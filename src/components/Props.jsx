function Props1(props) {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}

function Props2(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h1>Name : {props.profile.name}</h1>
      <h1>Age : {props.profile.age}</h1>
    </>
  );
}

function Props3(props) {
  return (
    <>
      <h1>{props.title}</h1>
      Locations :{" "}
      {props.locations.map((location) => (
        <p key={location}>{location}</p>
      ))}
    </>
  );
}

export default Props1;
export { Props2, Props3 };

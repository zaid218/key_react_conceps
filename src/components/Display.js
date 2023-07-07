import "../index.css";
import Middle from "./Middle";

const Display = (props) => {
  const middleComponents = props.item.map((item, index) => (
    <Middle
      key={index}
      title={item.title}
      image={item.image}
      description={item.description}
    />
  ));

  return <ul id="concepts">{middleComponents}</ul>;
};

export default Display;

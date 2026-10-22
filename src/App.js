import './App.css';

const MyColors = [
  { value: 7, color: "#FF7F7F" },
  { value: 8, color: "#228B22" },
  { value: 9, color: "#87CEEB" },
  { value: 4, color: "#FFD1DC" },
  { value: 5, color: "#FED8B1" },
  { value: 6, color: "#000000" },
  { value: 1, color: "#DAB1DA" },
  { value: 2, color: "#DAB1DA" },
  { value: 3, color: "#87CEEB" },
];

function Block({ bgcolor, children }) {
  return (
    <div
      className="block"
      style={{ "--bg": bgcolor }}
      onClick={() => alert(children)}
    >
      {children}
    </div>
  );
}

function ColorGrid({ colorArray }) {
  return (
    <div className="grid">
      {colorArray.map((item) => (
        <Block key={item.value} bgcolor={item.color}>
          {item.value}
        </Block>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Part 2</h1>
      <ColorGrid colorArray={MyColors} />
    </div>
  );
}

export default App;

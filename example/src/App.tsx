import MalleableODI from "malleable-odi-toolkit-0.0/src/components/MalleableODI";

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <MalleableODI
        itemList={[
          {
            name: "Bryan",
            value: "30",
          },
          {
            name: "Peiling",
            value: "14",
          },
          {
            name: "Rima",
            value: "15",
          },
        ]}
      >
        {({ item }) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.value}</p>
          </div>
        )}
      </MalleableODI>
    </>
  );
}

export default App;

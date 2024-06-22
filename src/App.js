import { MantineProvider } from "@mantine/core";
import TableByCrop from "./components/TableByCrop";
import TableByYear from "./components/TableByYear";
import "@mantine/core/styles.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <div className="App">
          <h1>Agriculture Analytics</h1>
          <h2>Table by Year</h2>
          <TableByYear />
          <h2>Table by Crop</h2>
          <TableByCrop />
        </div>
      </MantineProvider>
    </div>
  );
}

export default App;

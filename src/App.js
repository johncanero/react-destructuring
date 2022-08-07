import './App.css';
import cars from './cars';

  function App() {

  // Console Log
  const [honda, tesla] = cars;
  console.log(honda);

  // SpeedStats
  const {
    speedStats: { topSpeed: hondaTopSpeed }
  } = honda;

  const {
    speedStats: { topSpeed: teslaTopSpeed }
  } = tesla;

  // coloursByPopularity
  const {
    coloursByPopularity: [hondaTopColour]
  } = honda;

  const {
    coloursByPopularity: [teslaTopColour]
  } = tesla;




  return (
    <div>
        <table>
            <tbody>
              <tr>
                <th>Brand</th>
                <th>Top Speed</th>
              </tr>
              <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColour}</td>
              </tr>
              <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColour}</td>
              </tr>
            </tbody>
     </table>
    </div>
  );
}

export default App;

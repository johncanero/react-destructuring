import './App.css';
import cars from './cars';

  function App() {

  // Console Log
  const [honda, tesla, spongebob] = cars;
  console.log(honda);


 // coloursByPopularity
 const {
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;


const {
  coloursByPopularity: [spongebobTopColour]
} = spongebob;



  // SpeedStats
  const {
    speedStats: { topSpeed: hondaTopSpeed }
  } = honda;

  const {
    speedStats: { topSpeed: teslaTopSpeed }
  } = tesla;

  const {
    speedStats: { topSpeed: spongebobTopSpeed }
  } = spongebob;



  return (
    <div>
        <table>
            <tbody>
              <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Color</th>
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

              <tr>
                <td>{spongebob.model}</td>
                <td>{spongebobTopSpeed}</td>
                <td>{spongebobTopColour}</td>
              </tr>
            </tbody>
     </table>
    </div>
  );
}

export default App;

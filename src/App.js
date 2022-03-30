import Cube from './Cube';
import './App.css';


const App = () => {
  return (<div className='containerApp'>
    < Cube name={'Item A'} color={'blue'} width={'150px'} height={'150px'} />
    < Cube name={'Item B'} color={'red'} width={'150px'} height={'150px'} rounded={true} />
    < Cube name={'Item C'} color={'green'} width={'100px'} height={'100px'} />
    < Cube name={'Item D'} color={'yellow'} width={'200px'} height={'200px'} rounded={true} />
  </div>
  )
}

export default App;

import Tilt from 'react-parallax-tilt'
import './App.css';

function App() {
  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center
    items-center">
      <div className='h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500
      rounded-full absolute left-1/2 top-1/5 animate-pulse z-2'>
      </div>
      <div className='h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to purple-500
      rounded-full absolute top-1/4 left-40 animate-pulse'>

      </div>
      <Tilt>
      <div className='container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl
      shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm'>
        <form className='h-full flex flex-col justify-evenly items-center'>
          <div className='font-poppins text-white text-2xl tracking-wider'>Login form</div>
          <input type='username' placeholder='Username' className='input-text'/>
          <input type='password' placeholder='Password' className='input-text'/>
          <input type='submit' className='font-poppins cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80'/>
        </form>
      </div>
      </Tilt>
    </div>
  );
}

export default App;

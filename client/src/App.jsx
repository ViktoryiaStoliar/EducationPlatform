import './App.css';
import RouteProvider from './RouteProvider/RouteProvider';
import useAuth from './hooks/useAuth';
import myContext from './context/myContext';

function App() {
  
  const data = useAuth()
  const route = RouteProvider(!!data.token);

  return (
    <>
      <myContext.Provider value={data}>
        {route}
      </myContext.Provider>
    </>
  );
}

export default App;

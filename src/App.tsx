import Button from '@mui/material/Button';

const App = () => {
  return (
    <div>
      <h1>This profile is live</h1>

      <Button onClick={()=> alert("Hello World")} variant="contained">Hello world</Button>
    </div>
  );
};

export default App;

import Contact from "./components/Contact"; 
// ⬆️ This line imports the Contact component we just created

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>  
      {/* This is a heading that will show at the top */}
      
      <Contact />  
      {/* This renders the Contact component, meaning the form will appear here */}
    </div>
  );
}

export default App; 
// ⬆️ Export so other files (like main.jsx) can use App

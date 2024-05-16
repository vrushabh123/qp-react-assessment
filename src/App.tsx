// import "./App.css";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="w-full py-8 mx-auto md:max-w-7xl">
          <TodoWrapper />
        </div>
      </main>
    </div>
  );
}

export default App;

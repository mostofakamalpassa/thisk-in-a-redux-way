import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
>
    <Navbar></Navbar>
  

    <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
    <Header></Header>
       
        <hr class="mt-4" />

      
        <div
            class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
           
           <TodoList></TodoList>

        </div>

        <hr class="mt-4" />

     
        <Footer></Footer>
    </div>
</div>
  );
}

export default App;

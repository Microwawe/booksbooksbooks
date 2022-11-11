import { Books } from "./components/Books";

function App() {
    return (
        <div className="text-gray-800">
            <header className="text-center">
                <h1>Basic full stack book application</h1>
            </header>
            <main>
                <Books />
            </main>
        </div>
    );
}

export default App;

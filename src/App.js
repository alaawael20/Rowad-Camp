import { useEffect, useState } from "react";
import HomePage from "./Pages/Home/HomePage";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <HomePage />
        </div>
      )}
    </div>
  );
}

export default App;

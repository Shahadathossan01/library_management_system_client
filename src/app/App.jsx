import { useState } from "react";
import PaginationControlled from "../components/shared/PaginationControlled";

const App = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
  

    return (
        <div>
            <h1>Main App</h1>
            <PaginationControlled
                handleChange={handleChange}
                page={page}
                count={20}
            />
        </div>
    );
};

export default App;
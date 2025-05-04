import NoData from "../components/shared/NoData";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const App = () => {

    return (
        <div>
            <h1>Main App</h1>
            <NoData
                message="No comments yet"
                icon={<SentimentVeryDissatisfiedIcon fontSize="large" />}
            />
        </div>
    );
};

export default App;
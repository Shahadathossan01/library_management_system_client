import { BookIssueProvider } from "./BookIssueProvider";


export const BookIssueSuccess = () => {
    return (
        <BookIssueProvider>
            <BookIssueSuccessContent></BookIssueSuccessContent>
        </BookIssueProvider>
    );
};

BookIssueSuccess.displayName='BookIssueSuccess'

const BookIssueSuccessContent = () => {
    return (
        <div>
            <h1>Success</h1>
        </div>
    );
};

BookIssueSuccessContent.displayName='BookIssueSuccessContent'
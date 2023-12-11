import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Oopss</h1>
            <Link to="/" className="btn-success">Home </Link>
        </div>
    );
};

export default ErrorPage;
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-xl mx-auto text-center h-screen items-center flex">
            <div className="space-y-4">
                <h1 className="text-5xl">Oops !!</h1>
                <p className="text-3xl">
                    Something is going on in the Universe... <br />
                    It seems like we’re having some difficulties; please don’t abandon ship, we’re sending for help.
                </p>
                <Link to="/" className="btn text-white  bg-amber-600 font-bold text-3xl rounded-tl-3xl rounded-br-3xl hover:bg-orange-600 border-none">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
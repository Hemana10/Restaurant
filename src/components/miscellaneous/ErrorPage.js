const ErrorPage = ({ error }) => {
    return (
        <div className="flex bg-red-50 h-12 m-5">
            <div className="bg-red-700 w-3"></div>
            <div className="flex items-center pl-3">
                <span>{error}</span>
            </div>
        </div>
    );
};

export default ErrorPage;
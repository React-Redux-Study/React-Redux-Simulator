
const ErrorComponent = ({ message }) => {
    return (
        message && (<div className="text-sm text-rose-600">
            {message}
        </div>)
    )
}

export default ErrorComponent
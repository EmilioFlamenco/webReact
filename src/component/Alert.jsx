export function Alert({ message }) {
    return (
        <div className="alert alert-danger" role="alert" >
            <span>

                {message}

            </span>
        </div>
    )
}
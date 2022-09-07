
export default function Screen(props) {
    return (
        <div className="screen">
            <div className="exp">
                <p>{props.exp}</p>
            </div>
            <div className="res">
                <p>Result now:</p>
                <div>{props.res}</div>
            </div>

        </div>
    )
}
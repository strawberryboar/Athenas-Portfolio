import React, {useState, useEffect} from "react";

export default function DateWidget() {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
           setInterval(() => {
            setDateState(new Date());
            }, 5000);
    }, []);


    return (
        <div className="date">
            <p>
              {' '}
              {dateState.toLocaleDateString('en-US', {
                month: 'short',
                 day: 'numeric',
                 year: 'numeric',
              })}
            </p>
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
    );
}
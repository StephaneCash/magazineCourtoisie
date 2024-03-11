
import React from "react";

const Page = React.forwardRef((props, ref) => {
    console.log(props)
    return (
        <div className="demoPage" ref={ref}>
            <h1>Page Header</h1>
            <p>Page number: {props.number}</p>
        </div>
    );
});

export default Page;
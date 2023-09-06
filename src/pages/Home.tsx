import { useEffect, useState } from "react";

const Home = (props : {name : String}) => {
    return(
        <div>
            <h1>{props.name ? 'Hi ' + props.name : 'You are not authenticated'}</h1>
        </div>
    )
}

export default Home;
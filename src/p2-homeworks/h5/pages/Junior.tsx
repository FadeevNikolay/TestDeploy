import React, {CSSProperties} from "react";

function Junior() {
    // let styles: CSSProperties = {
    //     fontSize: '40px',
    //     fontWeight: 'bold'
    // }

    let styles = {
        fontSize: '40px',
        fontWeight: 'bold',
        textAlign: 'center'
    } as const;

    return (
        <div style={styles}>JUNIOR PAGE Change</div>
    );
}

export default Junior;

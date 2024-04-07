"use client";
export default function Button1(props) {
    return (
        <button onClick={() => { console.log(props.price) }}>Button</button>
    );
}

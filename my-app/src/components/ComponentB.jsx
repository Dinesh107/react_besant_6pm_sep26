import ComponentC from "./ComponentC";

function ComponentB() {

    return (
        <div>
            <h1>Welcome to Component B</h1>
            <p>This is another simple React component.</p>
            <ComponentC />
        </div>
    );
}
export default ComponentB;
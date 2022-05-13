import React from "react";

const App = function() {
    return (
        <>
            <header>
                <h1 style={{color: "black"}}>Random Number Generator</h1>
            </header>

            <section>
                <label>From:</label>
                <br />
                <input type="number" className="fromNum" />
                <br />
                <label>To:</label>
                <input type="number" className="toNum" />
                <button type="submit" className="button">Generate</button>
            </section>

            <div>
                <h1 className="num"></h1>
            </div>

            <script>

            </script>
        </>
    )
}

export default App;


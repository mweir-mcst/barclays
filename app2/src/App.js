import React from "react";

const inputStyle = {
    border: "none",
    fontSize: "20px",
    height: "30px",
    padding: "10px"
};

const App = function() {
    return (
        <div style={{
            fontFamily: '"Lucida Console", "Courier New", monospace',
            backgroundColor: "#c2e1ff",
            textAlign: "center"
        }}>
            <header>
                <h1 style={{color: "black"}}>Random Number Generator</h1>
            </header>

            <section>
                <label>From:</label>
                <br />
                <input type="number" className="fromNum" style={inputStyle} />
                <br />
                <div className="space" style={{
                    margin: "10px"
                }} />
                <label>To:</label>
                <br />
                <input type="number" className="toNum" style={inputStyle} />
                <br />
                <button type="submit" className="button" onClick={function() {
                    const fromNum = document.querySelector(".fromNum").value;
                    const toNum = document.querySelector(".toNum").value;

                    const randomNum = Math.floor(Math.random() * parseInt(toNum));

                    if (randomNum >= parseInt(fromNum)) {
                        const num = document.querySelector(".num");
                        num.innerText = randomNum;
                    }
                }} style={{
                    display: "inline-block",
                    borderRadius: "4px",
                    backgroundColor: "lightsteelblue",
                    border: "none",
                    color: "steelblue",
                    padding: "5px 7px",
                    margin: "15px",
                    fontFamily: '"Lucida Console", "Courier New", monospace'
                }}>Generate</button>
            </section>

            <div>
                <h1 className="num"></h1>
            </div>

            <script>

            </script>
        </div>
    )
}

export default App;


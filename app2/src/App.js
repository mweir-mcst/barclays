import React from "react";

const App = function() {
    return (
        <div style={{backgroundColor: "white"}}>
            <header>
                <h1 style={{color: "#000000"}}>Random Number Generator</h1>
            </header>

            <section>
                <label>From:</label>
                <br />
                <input type="number" className="fromNum" />
                <br />
                <label>To:</label>
                <input type="number" className="toNum" />
                <button type="submit" className="button" onClick={function() {
                    const fromNum = document.querySelector(".fromNum").value;
                    const toNum = document.querySelector(".toNum").value;

                    const randomNum = Math.floor(Math.random() * parseInt(toNum));

                    if (randomNum >= parseInt(fromNum)) {
                        const num = document.querySelector(".num");
                        num.innerText = randomNum;
                    }
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


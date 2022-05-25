import React, {Suspense} from "react";
const RemoteApp = React.lazy(() => import("app2/App"));

const inputButtonStyle = {
    backgroundColor: "#00aaff",
    color: "black",
    border: "solid black 2px",
    width: "75px",
    borderRadius: "500px"
}

function display(value) {
    document.getElementById("result").value += value;
}

const App = () => {
  return (
    <>
        <div className="title" style={{
            marginBottom: "10px",
            borderRadius: "5px",
            textAlign: "center",
            width: "340px",
            color: "#000000",
            border: "solid black 2px"
        }}>Calculator</div>
        <table border="10">
            <tr>
                <td colSpan="3">
                    <input type="text" id="result" style={{
                        backgroundColor: "white",
                        borderRadius: "25px",
                        border: "solid black 2px",
                        width: "100%"
                    }} />
                </td>
                <td>
                    <input type="button" value="c" onClick={function() {
                        document.getElementById("result").value = "";
                    }} style={inputButtonStyle} />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="1" onClick={() => display("1")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="2" onClick={() => display("2")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="3" onClick={() => display("3")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="/" onClick={() => display("/")} style={inputButtonStyle}  />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="4" onClick={() => display("4")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="5" onClick={() => display("5")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="6" onClick={() => display("6")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="-" onClick={() => display("-")} style={inputButtonStyle}  />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="7" onClick={() => display("7")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="8" onClick={() => display("8")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="9" onClick={() => display("9")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="+" onClick={() => display("+")} style={inputButtonStyle}  />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button" value="." onClick={() => display(".")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="0" onClick={() => display("0")} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="=" onClick={function() {
                        document.getElementById("result").value = eval(document.getElementById("result").value);
                    }} style={inputButtonStyle}  />
                </td>
                <td>
                    <input type="button" value="*" onClick={() => display("*")} style={inputButtonStyle}  />
                </td>
            </tr>
        </table>

      <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense>
    </>)
}


export default App;

import "./styles.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/action";

function Data({ data }) {
  return (
    <div className="data">
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Spinner() {
  return (
    <div className="body">
      <div className="loading">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}

function Error() {
  return (
    <div>
      <p>WOOPS...SOMETHING IS WRONG...</p>
    </div>
  );
}

function App({ fetchData, myData: { isLoading, data, error } }) {
  useEffect(() => {
    fetchData();
    //console.log(data);
  }, [fetchData]);

  return (
    <div className="App">
      <Spinner />
      {/* {isLoading ? (
        <Spinner />
      ) : error !== null ? (
        <Error />
      ) : (
        <Data data={data} />
      )} */}
    </div>
  );
}
const mapStateToProps = (state) => ({
  myData: state.reducer
});

export default connect(mapStateToProps, { fetchData })(App);

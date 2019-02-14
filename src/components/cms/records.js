import React from "react";
import { connect } from "react-redux";

import { When } from "../if";

import * as actions from "./actions.js";

const styles = {
  clickable: { cursor: "pointer" },
  delete: {
    color: "red",
    cursor: "pointer",
    marginLeft: ".5em"
  }
};

const API = process.env.REACT_APP_API;

class Records extends React.Component {

  getRecord = id => {
    let url = `${API}/${this.props.records.model.model}/${id}`;
    this.props.getRecord(url);

  };

  deleteRecord = id => {
    let url = `${API}/${this.props.records.model.model}/${id}`;
    
    this.props.deleteRecord(this.props.records.model.model, id, url);
  };

  render() {


    return (
      <>
      <ul>
        <p>This is where the data from the API will appear!</p>

        {this.props.records.records &&
          this.props.records.records.map((record, i) => (
            <>
            <li key={record._id}>

              <span
                style={styles.clickable}
                onClick={() => this.getRecord(record._id)}
              >
                {record.name}
              </span>
              <span
                style={styles.delete}
                onClick={() => this.deleteRecord(record._id)}
              >
                x
              </span>
            </li>
            </>
          ))}
          <button onClick={this.props.clearRecord}>Clear Form</button>
      </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records,
  model: state.records.model
});

const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  deleteRecord: (model, id, url) => dispatch(actions.destroy(model, id, url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Records);



// <When condition={this.props.model}>
// {
//   <ul>
//   {this.props.records.map((record, i) => (
//     <li key={record._id[i]}>
//       <span
//         style={styles.clickable}
//         onClick={() => this.getRecord(record._id)}
//       >
//         {record.name}
//       </span>
//       <span
//         style={styles.delete}
//         onClick={() => this.deleteRecord(record._id)}
//       >
//         x
//       </span>
//     </li>
//   ))}
// </ul>
//   <button onClick={this.props.clearRecord}>+</button> }
// </When>
import React from "react";
import { connect } from "react-redux";

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

class Models extends React.Component {

  componentDidMount() {
    let url = `${API}/models`;
    console.log(API);

    this.props.getModels(url);
  }

  selectModel = model => {
    let url = `${API}/${model}`;
    this.props.clearRecord();
    this.props.setModel(model);
    this.props.getRecords(url);

    this.props.getSchema(model, url+'/schema');


  };

  render() {
    return (
      <ul>
        <p>Hello World!</p>
        {this.props.models &&
          this.props.models.map((model, i) => (
            <li
              key={`models-${i}`}
              onClick={() => {
                this.selectModel(model);
              }}
            >
              <span style={styles.clickable}>{model}</span>
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  models: state.records.models,
  schemas: state.records.schemas, //added saturday diquattro

});

const mapDispatchToProps = (dispatch, getState) => ({
  setModel: model => dispatch(actions.setModel(model)),
  getModels: url => dispatch(actions.getModels(url)),
  getRecords: url => dispatch(actions.getRecords(url)),
  getSchema: (model, url) => dispatch(actions.getSchema(model, url)),//added saturday diquattro
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Models);

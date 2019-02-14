import superagent from "superagent";




export const setModel = (model) => dispatch => {
  // working
  dispatch(runSetModel({ model: model }))
}

const runSetModel = payload => {
  // working
  return {
    type: "MODEL",
    payload: payload
  };
};

export const getSchema = (model, url) => dispatch => {
  // console.log('getschema called',url)
  superagent.get(url).then(data => {
    dispatch(runGetSchema({ model: model, schema: data.body }));
  });
};


const runGetSchema = payload => {
  // working
  return {
    type: "SCHEMA",
    payload: payload
  };
};

export const getModels = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetModels(data.body));
  });
};

const runGetModels = payload => {
  // working
  return {
    type: "MODELS",
    payload: payload
  };
};

export const getRecords = url =>dispatch => {
  // working
  superagent.get(url).then(data => {
      dispatch(runGetRecords(data.body.results));
      
  });
};

const runGetRecords = payload => {
  // working
  return {
    type: "RECORDS",
    payload: payload
  };
};

export const getRecord = url => dispatch => {
 //working

  superagent.get(url).then(data => {
    dispatch(runGetRecord(data.body));
  });
};

const runGetRecord = payload => {
  //working receiving an object in payload
  return {
    type: "RECORD",
    payload: payload
  };
};

export const post = (model, url, record) => dispatch => {
  superagent
    .post(url)
    .send(record)
    .then(data => {
      dispatch(runPost({ model, record: data.body }));
    });
};

const runPost = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const put = (model, url, record) => dispatch => {
  superagent
    .put(url)
    .send(record)
    .then(data => {
      dispatch(runPut({ model, record: data.body }));
    });
};

const runPut = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

export const destroy = (model, id, url) => dispatch => {
  superagent.delete(url).then(data => {
    dispatch(runDestroy({ model, id }));
  });
};

const runDestroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export const clearRecord = () => {
  // console.log('called from clear')
  return {
    type: "CLEAR"
  };
};

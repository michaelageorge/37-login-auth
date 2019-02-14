let initialState = {
  model: null,
  models: [],
  records: [],
  schemas: {},
  record: {}
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "MODEL":
    // console.log('MODEL payload', payload)
      return { ...state, model: payload };

    case "SCHEMA":
      // console.log('from schemas',state.schemas)

      return {
        ...state,
        schemas: { [payload.model]: payload.schema }
      };

    case "MODELS":
      return { ...state, models: payload };

    case "RECORDS":
      return { ...state, records: payload };

    case "CLEAR":
    
    if(state.model)return {...state, record: []}
    else return state;

    case "RECORD":
    console.log('RECORD payload',payload)
    // console.log('from record reducer',payload)
    //working setting record in store
      return { ...state, record: payload };

    case "POST":
      return { ...state, records: [...state.records, payload.record] };

    case "PUT":
      let updatedRecords = state.records.map(record =>
        record._id === payload.record._id ? payload.record : record
      );
      return { ...state, records: updatedRecords };

    case "DELETE":
      let filteredRecords = state.records.filter(
        record => record._id !== payload.id
      );
      return { ...state, records: filteredRecords };

    default:
      return state;
  }
};

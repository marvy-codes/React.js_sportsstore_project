// Creating an action object that can be processed by the data it contains.

import { ActionTypes} from "./Types";
// import { data as phData} from "./placeholderData";
import { RestDataSource } from "./RestDataSource";

// The only requirement for objects produced by action creators is that they must have
// a type property whose value specifies the type of change required to the data store.

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params).then(response => 
        ({  dataType,
            data: response.data,
            total: Number(response.headers["x-total-count"]),
            params
        }))
})

/*
export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});
*/

// would be replaced with data from webservice in chapter 6

export const setPageSize = (newSize) => 
    ({type: ActionTypes.DATA_SET_PAGESIZE, payload: newSize});

export const setSortProperty = (newProp) =>
    ({type: ActionTypes.DATA_SET_SORT_PROPERTY, payload: newProp});
        
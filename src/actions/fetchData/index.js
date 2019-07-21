import { FETCH_DATA_LIST } from '../actionTypes';

import { getDataListURL } from "../../utils/endpointURLUtils";

export const getDataList = () => {
    return ({
        type: FETCH_DATA_LIST,
        payload: {
            request: {
                url: getDataListURL()
            }
        }
    });
}
import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

/* consider refactoring to Map after some research in how lowdash was implementing */
/* const arrayToMap = (array, keyField) => new Map(
	array.map(item => [ item[keyField], item ])
) */

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            // return arrayToMap(action.payload.data, 'id'); if using Map
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
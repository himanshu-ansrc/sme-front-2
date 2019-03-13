import { combineReducers } from 'redux'
import {admin_type, admin_action, candidates} from './reducers'

export default combineReducers({
      admin: admin_type,
      admin_action,
      candidates
})
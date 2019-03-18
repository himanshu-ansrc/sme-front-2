import { combineReducers } from 'redux'
import {admin, admin_action, candidates, new_request, skills_and_locations} from './reducers'

export default combineReducers({
      admin,
      admin_action,
      candidates,
      sme_request: new_request,
      skills_and_locations
})
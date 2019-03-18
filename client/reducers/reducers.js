import {ADMIN_TYPE, LOGIN_USER, ACTION_TYPE, LIST_CANDIDATES, SKILLS_AND_LOCATIONS, CREATE_REQUEST} from '../actions/types.js'

export const admin_type =  (state=null, action)=>{
     switch(action.type){
         case ADMIN_TYPE:
	         return action.payload
         default:
           return state;
     }
}

export const admin_action =  (state=null, action)=>{
     switch(action.type){
         case ACTION_TYPE:
           return action.payload
         default:
           return state;
     }
}

export const candidates =  (state=null, action)=>{
     switch(action.type){
         case LIST_CANDIDATES:
           return action.payload
         default:
           return state;
     }
}


export const skills_and_locations = (state=null, action)=>{
     switch(action.type){
         case SKILLS_AND_LOCATIONS:
           return action.payload
         default:
              return state;
     }
}

export const new_request = (state=null, action)=>{
     switch(action.type){
         case CREATE_REQUEST:
           return action.payload
         default:
              return state;
     }
}




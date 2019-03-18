import {LOGIN_USER, AUTH_USER, ADMIN_TYPE, SKILLS_AND_LOCATIONS,
	    ACTION_TYPE, LIST_CANDIDATES} from './types.js'
import CONFIG from '../../config';
import axios from 'axios';

export const login_user = ({email, password}, cb)=>{
	   return async (dispatch)=>{
	   	    try{
               const result = await axios.post(`${CONFIG.API_URL}/login`, {
               	  email , password
               });
               console.log(result)
               dispatch({
                 type: LOGIN_USER,
                 payload: result['data']
	           })
	           cb();
	   	    }catch(e){
               dispatch({
                 type: LOGIN_USER,
                 payload: e
	           })
	   	    }
	   };
}


export const authenticate = (token, cb)=>{
	   return async (dispatch)=>{
	   	    try{
               const result = await axios.post(`${CONFIG.API_URL}/authenticate`, {}, {
               	     headers: { token }});
               dispatch({
                 type: AUTH_USER,
                 payload: result['data']
	           })
	           cb();
	   	    }catch(e){
               dispatch({
                 type: AUTH_USER,
                 payload: null
	           })
	   	    }
	   };
}


export const logout = ()=>{
	   localStorage.removeItem(CONFIG.TOKEN);
	   return  (dispatch)=>{
               dispatch({
                 type: AUTH_USER,
                 payload: null
	           })
	   	    }
}


export const load_dashboard = ()=>{
       const token = localStorage.getItem(CONFIG.TOKEN);
		   if(token){
			   return async (dispatch)=>{
			   	    try{
		               const result = await axios.post(`${CONFIG.API_URL}/admin-dashboard`, {}, {
		               	     headers: { token }});
		               console.log(result)
		               dispatch({
		                 type: ADMIN_TYPE,
		                 payload: result['data']['data']
			           })
			   	    }catch(e){
		               dispatch({
		                 type: ADMIN_TYPE,
		                 payload: null
			           })
			   	    }
			   };
		  }else{
		  	return (dispatch)=>{
		  	           dispatch({
		                 type: ADMIN_TYPE,
		                 payload: null
			           })
		  	       }
		  }

}


export const dashboard_content = (type)=>{
       return (dispatch)=>{
				       dispatch({
								   type: ACTION_TYPE,
								   payload : type
							 })
			 }
}


export const  candidates_list = (params, cb)=>{
	   return async (dispatch)=>{
	   	    let queryString = "";
	   	    if(params){
               queryString += `?id=${params}`;
	   	    }
	   	    try{
               const result = await axios.get(`${CONFIG.API_URL}/list-candidates${queryString}`, {});
               dispatch({
                 type: LIST_CANDIDATES,
                 payload: result['data']['data']
	           })
	           cb()
	   	    }catch(e){
               dispatch({
                 type: LIST_CANDIDATES,
                 payload: null
	           })
	   	    }
	 };
}

export const create_sme_request = (params, cb)=>{
	   return async (dispatch)=>{
	   	    try{
               const result = await axios.post(`${CONFIG.API_URL}/create-request`, params);
               console.log(result)
               dispatch({
                 type: CREATE_REQUEST,
                 payload: result['data']
	           })
	           cb();
	   	    }catch(e){
               dispatch({
                 type: CREATE_REQUEST,
                 payload: e
	           })
	   	    }
	   };
}


export const skillsAndLocations = (cb)=>{
	   return async (dispatch)=>{
	   	    try{
               const result = await axios.get(`${CONFIG.API_URL}/skills_and_locations`);
               dispatch({
                 type: SKILLS_AND_LOCATIONS,
                 payload: result['data']
	           })
	           cb();
	   	    }catch(e){
               dispatch({
                 type: SKILLS_AND_LOCATIONS,
                 payload: e
	           })
	   	    }
	   };
}





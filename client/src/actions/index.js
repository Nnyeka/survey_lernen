import axios from 'axios'
import { FETCH_USER } from './types'

const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};


//const a:String = 'James'
const handleSuccess = (reference) => {
return axios.post('/api/paystack',{reference}).then(({data}) => {
  console.log(data)
    return data
  })
}
//const handleSuccess = reference => async dispatch => {
//   const res = await axios.post("/api/paystack", reference);

   // dispatch({ type: FETCH_USER, payload: res.data });
//};

export {fetchUser, handleSuccess}


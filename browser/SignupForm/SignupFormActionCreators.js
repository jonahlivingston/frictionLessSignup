import axios from 'axios';

export const FILL_FORM = 'FILL_FORM';

export const fillForm = (userData) => ({
  type: FILL_FORM,
  userData,
});

export const getUserInfo = (fieldValue) => dispatch => {
    axios.post('/api/email',{email:fieldValue})
        .then(user => {
            if (user.data==='error'){
                dispatch(fillForm('notFound'));
            }
            else{
                dispatch(fillForm(user.data));
            }
        })
        .catch(err => console.error(`post request to get user data was unsuccessful`, err));
}

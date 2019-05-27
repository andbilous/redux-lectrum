import { combineForms } from 'react-redux-form';

export const formsReducer=combineForms(
    {
        user: {
            profile: {
                firstName: '',
                lastName:  '',
                avatar:    [],
            },
            password: {
                oldPassword: '4',
                newPassword: '4',
            },
        },
    }, 'forms')
;

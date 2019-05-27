// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from 'react-redux-form';
import { Input } from '../../components';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { newPassword } from '../../bus/forms/shapes';
import { book } from '../../navigation/book';
import { profileActions } from '../../bus/profile/actions';

const mapStateToProps = (state) => {
    return {
        isFetching: state.ui.get('isFetching'),
        profile:    state.profile,
    };
};
const mapDispatchToProps=profileActions;

@connect(mapStateToProps, mapDispatchToProps)

export default class NewPasswordForm extends Component {
    static defaultProps = {
        // State
        isFetching: false,

        // Actions
        updatePasswordAsync: () => {},
    };

    _submitPassword = (passwordData) => {
        const { updatePasswordAsync } = this.props;

        updatePasswordAsync(passwordData);
    };

    render () {
        const { isFetching } = this.props;

        return (
            <Form
                initialValues = { newPassword.shape }
                render = { (props) => {
                    const { isValid, touched, errors } = props;

                    const newPasswordFormWrapperStyles = cx(Styles.newPasswordFormWrapper, Styles.wrapper, {
                        [Styles.disabledInput]: isFetching,
                    });
                    const oldPasswordStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.oldPassword && errors.oldPassword,
                    });
                    const newPasswordStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.newPassword && errors.newPassword,
                    });

                    const buttonStyle = cx(Styles.loginSubmit, {
                        [Styles.disabledButton]: isFetching,
                    });
                    const buttonMessage = isFetching ? 'Загрузка...' : 'Сменить пароль';

                    return (
                        <Form className = { Styles.form } model = 'forms.user.password'>
                            <div className = { newPasswordFormWrapperStyles }>
                                <div>
                                    <Input
                                        className = { oldPasswordStyle }
                                        disabled = { isFetching }
                                        model = 'forms.user.password.oldPassword'
                                        name = 'oldPassword'
                                        placeholder = 'Старый пароль'
                                        type = 'password'
                                    />
                                    <Input
                                        className = { newPasswordStyle }
                                        disabled = { isFetching }
                                        model = 'forms.user.password.newPassword'
                                        name = 'newPassword'
                                        placeholder = 'Новый пароль'
                                        type = 'password'
                                    />
                                    <button
                                        className = { buttonStyle }
                                        disabled = { isFetching }
                                        type = 'submit'
                                        onClick = { this._submitPassword }>
                                        {buttonMessage}
                                    </button>
                                </div>
                                <Link to = { book.profile }>← назад</Link>
                            </div>
                        </Form>
                    );
                } }
                validationSchema = { newPassword.schema }
                onSubmit = { this._submitPassword }
            />
        );
    }
}

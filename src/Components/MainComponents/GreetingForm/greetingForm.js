import React from "react";
import {Formik, Field, Form} from "formik";
import FormScheme from "./formScheme";
import "./greetingForm.sass"
import dudeImage from "../../../../src/Images/dude.svg"
import PhoneMaskInput from "./phoneMaskInput";


class GreetingForm extends React.Component {

    state = {
        checkbox: false,
        submitting: false,
        success: false,

    }

    isFormValid = (errors, touched) => {
        if (!this.state.checkbox) {
            return false
        }
        if (Object.keys(touched).length === 0) {
            return false
        } else {
            for (let key in errors) {
                if (errors[key]) {
                    return false
                }
            }
        }
        return true
    }


    render() {
        return (

            <div className='container-fluid formWrapper'>
                <div className=" greetingForm row  " id="greetingForm">
                    <div className="greetingForm-image">
                        <img src={dudeImage} alt=""/>
                    </div>
                    <div className='greetingForm-title H2 col-lg-12 col-sm-12'>Форма с приветами</div>
                    <div className="greetingForm-form col-lg-12 col-sm-12">
                        <Formik
                            initialValues={{
                                name: "",
                                phone: '',
                                email: "",
                                message: ""
                            }}
                            onSubmit={(values, {setSubmitting, resetForm}) => {

                                this.setState({submitting:true});
                                setTimeout(() => {
                                    this.setState({submitting:false, success: true})
                                    resetForm(values);
                                }, 2000);

                                setTimeout(() => {
                                    this.setState({success: false, checkbox: false});
                                }, 5000);

                            }}
                            validationSchema={FormScheme}>

                            {({errors, touched,isSubmitting, handleChange}) => (
                                <Form>
                                    <div className="greetingForm__wrap col-lg-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12">
                                                <Field name="name"
                                                       placeholder="Ваше имя"
                                                       type="text"
                                                       className="usualInput"/>
                                            </div>
                                            <div className="greetingForm-text P_S Grey_Dark col-lg-6 col-sm-12">Имя нас
                                                не сильно волнует и это поле необязательное
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12">
                                                <Field name="phone"
                                                       placeholder="Телефон"
                                                       type="tel"
                                                       onChange={handleChange}
                                                       as={PhoneMaskInput}
                                                       className={errors.phone && touched.phone ? 'invalidInput' : "usualInput"}/>

                                                {errors.phone &&
                                                touched.phone && (
                                                    <div className="greetingForm__error">{errors.phone}</div>)}
                                            </div>
                                            <div className="greetingForm-text P_S Grey_Dark col-lg-6 col-sm-12">Для
                                                телефона нужна маска для ввода
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12">
                                                <Field
                                                    name="email"
                                                    placeholder="Электронная почта"
                                                    type="email"
                                                    className={errors.email && touched.email ? 'invalidInput' : "usualInput"}
                                                />

                                                {errors.email && touched.email &&
                                                <div className="greetingForm__error">{errors.email}</div>}
                                            </div>
                                            <div className="greetingForm-text P_S Grey_Dark col-lg-6 col-sm-12">Почту
                                                нужно валидировать, что пользователь точно указал адекватный и похожий
                                                на настоящий адрес
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12">
                                                <Field
                                                    name="message"
                                                    as="textarea"
                                                    placeholder="Сообщение"
                                                    className={errors.message && touched.message ? 'textArea_input invalidInput ' : "textArea_input usualInput"}
                                                />

                                                {errors.message && touched.message && (
                                                    <div className="greetingForm__error">{errors.message}</div>
                                                )}
                                            </div>
                                            <div className="greetingForm-text P_S Grey_Dark col-lg-6 col-sm-12">Без
                                                сообщения форму отправлять бессмысленно
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12">
                                                <div className='greetingForm__checkbox'>
                                                    <input type='checkbox' id='checkBox'
                                                           onClick={() => {
                                                               this.setState(
                                                                   ({checkbox}) => {
                                                                       return {checkbox: !checkbox}
                                                                   }
                                                               )
                                                           }}
                                                    />
                                                    <label htmlFor='checkBox'> Согласен с правилами обработки моих
                                                        персональных данных
                                                    </label>
                                                </div>

                                                <div className='greetingForm__error'>{this.props.result}</div>
                                            </div>
                                            <div className="greetingForm-text P_S Grey_Dark col-lg-6">Форма отправляется
                                                только, если отметка с согласием стоит
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="greetingForm-button col-lg-6 col-sm-12 ">
                                                    <button
                                                    disabled={!this.isFormValid(errors, touched)}
                                                    className={this.isFormValid(errors, touched) ? 'btn_primary col-lg-6' : 'btn_disabled col-lg-6'}
                                                    type="submit">
                                                    {this.state.submitting?
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>:
                                                        "Отправить сообщение"
                                                    }
                                                </button>
                                                {this.state.success && renderSuccessMessage()

                                                }
                                            </div>

                                            <div className="greetingForm-text P_S Grey_Dark col-lg-6">У кнопки несколько
                                                состояний. Яркой и синей она становится когда все нормально и форму
                                                можно отправлять
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
                <div>
                    <div className="greetingForm-line col-lg-12 col-sm-12"/>
                </div>
            </div>
        )
    }


}

const renderSuccessMessage = ()=>{
    return <div className="greetingForm-successMessage col-lg-6">
        <div className="greetingForm-successMessage__icon ">
            <i className="fa fa-check-circle" aria-hidden="true"/>
        </div>
        <div className="greetingForm-successMessage__text P_S">
            Письмо для активации аккаунта успешно отправлено на адрес электронной почты, который вы указали при регистрации.
        </div>
    </div>
}


export default GreetingForm;

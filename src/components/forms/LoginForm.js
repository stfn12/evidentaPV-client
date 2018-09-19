import React from 'react';
import {Form, Button, Message} from 'semantic-ui-react';
//import Validator from 'validator';
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component{
  state ={
    data:{
      user:'',
      password:''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = () =>{
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      this.setState({loading: true});
      this.props.submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false})
        );
    }
  };

  validate = (data) =>{
    const errors = {};
    if(!data.user) errors.user = "Introduceti user";
    if(!data.password) errors.password = "Introduceti parola";
    return errors;
  };

  render(){
    const { data, errors, loading } = this.state;
    return(
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && <Message negative>
          <Message.Header>Oops! Ceva nu e in regula</Message.Header>
          <p>{errors.global}</p>
        </Message>}
        <Form.Field error={!!errors.user}>
          <label htmlFor="user">User</label>
          <input type = "user"
                 id="user"
                 name="user"
                 value={data.user}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.user && <InlineError text={errors.user}/>}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Parola</label>
          <input type = "password"
                 id="password"
                 name="password"
                 value={data.password}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.password && <InlineError text={errors.password}/>}
      <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from "semantic-ui-react";
import InlineError from "../../messages/InlineError";

class AddChitantaForm extends React.Component {
  state = {
    data: {
      contravenient: '',
      cnp: '',
      numar: '',
      data: '',
      suma: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    console.log({errors});
    if(Object.keys(errors).length === 0){
      this.setState({loading: true});
      this.props
        .submit(this.state.data)
        .catch(err=> this.setState({errors: err.response.data.errors, loading: false}))
    }
  };

  validate = data => {
    const errors = {};
    if(!data.contravenient) errors.contravenient = "Campul nu poate fi gol";
    if(!data.cnp) errors.cnp = "Campul nu poate fi gol";
    if(!data.numar) errors.numar = "Campul nu poate fi gol";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return(
      <Form onSubmit={this.onSubmit} loading={loading}>

        <Form.Field error={!!errors.contravenient}>
          <label htmlFor="contravenient">Contravenient</label>
          <input type = "text"
                 id="contravenient"
                 name="contravenient"
                 placeholder="nume"
                 value={data.contravenient}
                 onChange={this.onChange}/>
          {errors.contravenient && <InlineError text={errors.contravenient}/>}
        </Form.Field>

        <Form.Field error={!!errors.cnp}>
          <label htmlFor="cnp">CNP</label>
          <input type = "number"
                 id="cnp"
                 name="cnp"
                 placeholder="cnp"
                 value={data.cnp}
                 onChange={this.onChange}/>
          {errors.cnp && <InlineError text={errors.cnp}/>}
        </Form.Field>

        <Form.Field error={!!errors.numar}>
          <label htmlFor="numar">Numar</label>
          <input type = "number"
                 id="numar"
                 name="numar"
                 placeholder="numar"
                 value={data.numar}
                 onChange={this.onChange}/>
          {errors.numar && <InlineError text={errors.numar}/>}
        </Form.Field>

        <Form.Field error={!!errors.data}>
          <label htmlFor="data">Data</label>
          <input type = "date"
                 id="data"
                 name="data"
                 placeholder="data"
                 value={data.data}
                 onChange={this.onChange}/>
          {errors.data && <InlineError text={errors.data}/>}
        </Form.Field>

        <Form.Field error={!!errors.suma}>
          <label htmlFor="suma">Suma</label>
          <input type = "number"
                 id="suma"
                 name="suma"
                 placeholder="suma"
                 value={data.suma}
                 onChange={this.onChange}/>
          {errors.suma && <InlineError text={errors.suma}/>}
        </Form.Field>

        <Button primary>Adauga</Button>
      </Form>
    );
  }
}

AddChitantaForm.propTypes ={
  addChitanta: PropTypes.func.isRequired
};

export default AddChitantaForm;
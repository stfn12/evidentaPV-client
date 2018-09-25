import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message, Button } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class AddProcesForm extends React.Component {
  state = {
    data: {
      serie: '',
      numar: '',
      data_intocmire: '',
      marca: '',
      contravenient: '',
      adresa: '',
      localitate: '',
      suma: '',
      mod_intocmire: ''
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
        .catch(this.setState({loading: false}));
    }
  };

  validate = data => {
    const errors = {};
    if(!data.serie) errors.serie = "Campul nu poate fi gol";
    if(!data.numar) errors.numar = "Campul nu poate fi gol";
    if(!data.marca) errors.marca = "Campul nu poate fi gol";
    if(!data.contravenient) errors.contravenient = "Campul nu poate fi gol";
    if(!data.localitate) errors.localitate = "Campul nu poate fi gol";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return(
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && <Message negative>
          <Message.Header>Oops! Ceva nu e in regula</Message.Header>
          <p>{errors.global}</p></Message>}
        <Form.Field error={!!errors.serie}>
          <label htmlFor="serie">Serie</label>
          <input type = "text"
                 id="serie"
                 name="serie"
                 placeholder="serie"
                 value={data.serie}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.serie && <InlineError text={errors.serie}/>}
        <Form.Field error={!!errors.numar}>
          <label htmlFor="numar">Numar</label>
          <input type = "number"
                 id="numar"
                 name="numar"
                 placeholder="numar"
                 value={data.numar}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.numar && <InlineError text={errors.numar}/>}
        <Form.Field error={!!errors.data_intocmire}>
          <label htmlFor="data_intocmire">Data intocmire</label>
          <input type = "date"
                 id="data_intocmire"
                 name="data_intocmire"
                 placeholder="data"
                 value={data.data_intocmire}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.data_intocmire && <InlineError text={errors.data_intocmire}/>}
        <Form.Field error={!!errors.marca}>
          <label htmlFor="marca">Marca</label>
          <input type = "number"
                 id="marca"
                 name="marca"
                 placeholder="marca"
                 value={data.marca}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.marca && <InlineError text={errors.marca}/>}
        <Form.Field error={!!errors.contravenient}>
          <label htmlFor="contravenient">Contravenient</label>
          <input type = "text"
                 id="contravenient"
                 name="contravenient"
                 placeholder="contravenient"
                 value={data.contravenient}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.contravenient && <InlineError text={errors.contravenient}/>}
        <Form.Field error={!!errors.adresa}>
          <label htmlFor="adresa">Adresa</label>
          <input type = "text"
                 id="adresa"
                 name="adresa"
                 placeholder="adresa"
                 value={data.adresa}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.adresa && <InlineError text={errors.adresa}/>}
        <Form.Field error={!!errors.localitate}>
          <label htmlFor="localitate">Localitate</label>
          <input type = "text"
                 id="localitate"
                 name="localitate"
                 placeholder="iasi / alta localitate"
                 value={data.localitate}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.localitate && <InlineError text={errors.localitate}/>}
        <Form.Field error={!!errors.suma}>
          <label htmlFor="suma">Suma</label>
          <input type = "number"
                 id="suma"
                 name="suma"
                 placeholder="suma"
                 value={data.suma}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.suma && <InlineError text={errors.suma}/>}
        <Form.Field error={!!errors.mod_intocmire}>
          <label htmlFor="mod_intocmire">Mod intocmire</label>
          <input type = "text"
                 id="mod_intocmire"
                 name="mod_intocmire"
                 placeholder="mod intocmire"
                 value={data.mod_intocmire}
                 onChange={this.onChange}
          />
        </Form.Field>
        {errors.mod_intocmire && <InlineError text={errors.mod_intocmire}/>}
        <Button primary>Adauga</Button>
      </Form>
    );
  }
}

AddProcesForm.propTypes ={
 addProces: PropTypes.func.isRequired
};

export default AddProcesForm;
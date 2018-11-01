import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Form, Button, Segment, Grid, Icon } from "semantic-ui-react";
import InlineError from '../../messages/InlineError';

class EditProcesForm extends React.Component{
  state = {
    data: {
      _id: this.props.proces._id,
      serie: this.props.proces.serie,
      numar: this.props.proces.numar,
      data_intocmire: this.props.proces.data_intocmire,
      marca: this.props.proces.marca,
      contravenient: this.props.proces.contravenient,
      cnp: this.props.proces.cnp,
      adresa: this.props.proces.adresa,
      localitate: this.props.proces.localitate,
      suma: this.props.proces.suma,
      mod_intocmire: this.props.proces.mod_intocmire
    },
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      data:{
        _id: props.proces._id,
        serie: props.proces.serie,
        numar: props.proces.numar,
        data_intocmire: props.proces.data_intocmire,
        marca: props.proces.marca,
        contravenient: props.proces.contravenient,
        cnp: props.proces.cnp,
        adresa: props.proces.adresa,
        localitate: props.proces.localitate,
        suma: props.proces.suma,
        mod_intocmire: props.proces.mod_intocmire
      }
    })
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value}
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      this.setState({loading: true});
      this.props
        .submit(this.state.data)
        .catch(err=> this.setState({errors: err.response.data.errors, loading: false})
        );
    }
  };

  validate = data => {
    const errors = {};
    if(!data.serie) errors.serie = "Campul nu poate fi gol";
    if(!data.numar) errors.numar = "Campul nu poate fi gol";
    if(!data.marca) errors.marca = "Campul nu poate fi gol";
    if(!data.contravenient) errors.contravenient = "Campul nu poate fi gol";
    if(!data.cnp) errors.cnp = "Campul nu poate fi gol";
    if(!data.localitate) errors.localitate = "Campul nu poate fi gol";
    return errors;
  };

  render(){
    const{ errors, data, loading } = this.state;

    return(
      <Segment>
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Grid fluid="true">
          <Grid.Row>
            <Grid.Column>
              <Form.Field error={!!errors.serie}>
                <label htmlFor="serie">Serie</label>
                <input
                  type="text"
                  id="serie"
                  name="serie"
                  placeholder="Serie"
                  value={data.serie}
                  onChange={this.onChange}
                />
                {errors.serie && <InlineError text={errors.serie}/>}
              </Form.Field>

              <Form.Field error={!!errors.numar}>
                <label htmlFor="numar">Numar</label>
                <input
                  type="number"
                  id="numar"
                  name="numar"
                  placeholder="Numar"
                  value={data.numar}
                  onChange={this.onChange}
                />
                {errors.numar && <InlineError text={errors.numar}/>}
              </Form.Field>

              <Form.Field error={!!errors.data_intocmire}>
                <label htmlFor="data_intocmire">Data intocmire</label>
                <input
                  type="date"
                  id="data_intocmire"
                  name="data_intocmire"
                  placeholder="Data intocmire"
                  value={moment(data.data_intocmire).format('YYYY-MM-DD')}
                  onChange={this.onChange}
                />
                {errors.data_intocmire && <InlineError text={errors.data_intocmire}/>}
              </Form.Field>

              <Form.Field error={!!errors.marca}>
                <label htmlFor="marca">Marca controlor</label>
                <input
                  type="number"
                  id="marca"
                  name="marca"
                  placeholder="Marca"
                  value={data.marca}
                  onChange={this.onChange}
                />
                {errors.marca && <InlineError text={errors.marca}/>}
              </Form.Field>

              <Form.Field error={!!errors.contravenient}>
                <label htmlFor="contravenient">Contravenient</label>
                <input
                  type="text"
                  id="contravenient"
                  name="contravenient"
                  placeholder="Contravenient"
                  value={data.contravenient}
                  onChange={this.onChange}
                />
                {errors.contravenient && <InlineError text={errors.contravenient}/>}
              </Form.Field>

              <Form.Field error={!!errors.cnp}>
                <label htmlFor="cnp">CNP</label>
                <input
                  type="text"
                  id="cnp"
                  name="cnp"
                  placeholder="cnp"
                  value={data.cnp}
                  onChange={this.onChange}
                />
                {errors.cnp && <InlineError text={errors.cnp}/>}
              </Form.Field>

              <Form.Field error={!!errors.adresa}>
                <label htmlFor="adresa">Adresa</label>
                <input
                  type="text"
                  id="adresa"
                  name="adresa"
                  placeholder="Adresa"
                  value={data.adresa}
                  onChange={this.onChange}
                />
                {errors.adresa && <InlineError text={errors.adresa}/>}
              </Form.Field>

              <Form.Field error={!!errors.localitate}>
                <label htmlFor="localitate">Mod solutionare</label>
                <input
                  type="text"
                  id="localitate"
                  name="localitate"
                  placeholder="Localitate"
                  value={data.localitate}
                  onChange={this.onChange}
                />
                {errors.localitate && <InlineError text={errors.localitate}/>}
              </Form.Field>

              <Form.Field error={!!errors.suma}>
                <label htmlFor="suma">Suma</label>
                <input
                  type="number"
                  id="suma"
                  name="suma"
                  placeholder="Suma"
                  value={data.suma}
                  onChange={this.onChange}
                />
                {errors.suma && <InlineError text={errors.suma}/>}
              </Form.Field>

              <Form.Field error={!!errors.mod_intocmire}>
                <label htmlFor="mod_intocmire">Mod intocmire</label>
                <input
                  type="text"
                  id="mod_intocmire"
                  name="mod_intocmire"
                  placeholder="Mod intocmire"
                  value={data.mod_intocmire}
                  onChange={this.onChange}
                />
                {errors.mod_intocmire && <InlineError text={errors.mod_intocmire}/>}
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button primary icon labelPosition='right'>
          <Icon name='checkmark'/>Salveaza</Button>
      </Form>
      </Segment>
    )
  }
}

EditProcesForm.propTypes ={
  submit: PropTypes.func.isRequired,
  proces: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    serie: PropTypes.string.isRequired,
    numar: PropTypes.number.isRequired,
    data_intocmire: PropTypes.string.isRequired,
    marca: PropTypes.number.isRequired,
    contravenient: PropTypes.string.isRequired,
    cnp: PropTypes.string.isRequired,
    adresa: PropTypes.string.isRequired,
    localitate: PropTypes.string.isRequired,
    suma: PropTypes.number.isRequired,
    mod_intocmire: PropTypes.string.isRequired
  }).isRequired
};

export default EditProcesForm;
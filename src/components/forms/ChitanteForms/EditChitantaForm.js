import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Form, Button, Segment, Grid } from 'semantic-ui-react';
import InlineError from '../../messages/InlineError';

class EditChitantaForm extends React.Component{
  state = {
    data: {
      _id: this.props.chitanta._id,
      contravenient: this.props.chitanta.contravenient,
      cnp: this.props.chitanta.cnp,
      numar: this.props.chitanta.numar,
      data: this.props.chitanta.data,
      suma: this.props.chitanta.suma
    },
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      data:{
        _id: props.chitanta._id,
        contravenient: props.chitanta.contravenient,
        cnp: props.chitanta.cnp,
        numar: props.chitanta.numar,
        data: props.chitanta.data,
        suma: props.chitanta.suma
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
      console.log(this.state.data);
      this.props
        .submit(this.state.data)
        .catch(err=> this.setState({errors: err.response.data.errors, loading: false})
        );
    }
  };

  validate = data => {
    const errors = {};
    if(!data.contravenient) errors.contravenient = "Campul nu poate fi gol";
    if(!data.cnp) errors.cnp = "Campul nu poate fi gol";
    if(!data.numar) errors.numar = "Campul nu poate fi gol";
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

                <Form.Field error={!!errors.contravenient}>
                  <label htmlFor="contravenient">Contravenient</label>
                  <input
                    type="text"
                    id="contravenient"
                    name="contravenient"
                    placeholder="nume"
                    value={data.contravenient}
                    onChange={this.onChange}
                  />
                  {errors.contravenient && <InlineError text={errors.contravenient}/>}
                </Form.Field>

                <Form.Field error={!!errors.cnp}>
                  <label htmlFor="cnp">CNP</label>
                  <input
                    type="number"
                    id="cnp"
                    name="cnp"
                    placeholder="cnp"
                    value={data.cnp}
                    onChange={this.onChange}
                  />
                  {errors.cnp && <InlineError text={errors.cnp}/>}
                </Form.Field>

                <Form.Field error={!!errors.numar}>
                  <label htmlFor="numar">Numar</label>
                  <input
                    type="number"
                    id="numar"
                    name="numar"
                    placeholder="numar"
                    value={data.numar}
                    onChange={this.onChange}
                  />
                  {errors.numar && <InlineError text={errors.numar}/>}
                </Form.Field>

                <Form.Field error={!!errors.data}>
                  <label htmlFor="data">Data</label>
                  <input
                    type="date"
                    id="data"
                    name="data"
                    placeholder="data"
                    value={moment(data.data).format('YYYY-MM-DD')}
                    onChange={this.onChange}
                  />
                  {errors.data && <InlineError text={errors.data}/>}
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

              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Button primary>Salveaza</Button>
        </Form>
      </Segment>
    )
  }
}

EditChitantaForm.propTypes ={
  submit: PropTypes.func.isRequired,
  chitanta: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    contravenient: PropTypes.string.isRequired,
    cnp: PropTypes.number.isRequired,
    numar: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
    suma: PropTypes.number.isRequired
  }).isRequired
};

export default EditChitantaForm;
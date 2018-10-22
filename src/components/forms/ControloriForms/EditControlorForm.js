import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Segment, Grid, Icon } from 'semantic-ui-react';
import InlineError from '../../messages/InlineError';

class EditControlorForm extends React.Component{
  state = {
    data: {
      _id: this.props.controlor._id,
      marca: this.props.controlor.marca,
      nume: this.props.controlor.nume
    },
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      data:{
        _id: props.controlor._id,
        marca: props.controlor.marca,
        nume: props.controlor.nume
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
    if(!data.marca) errors.marca = "Campul nu poate fi gol";
    if(!data.nume) errors.nume = "Campul nu poate fi gol";
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

                <Form.Field error={!!errors.marca}>
                  <label htmlFor="marca">Marca</label>
                  <input
                    type="number"
                    id="marca"
                    name="marca"
                    placeholder="marca"
                    value={data.marca}
                    onChange={this.onChange}
                  />
                  {errors.marca && <InlineError text={errors.marca}/>}
                </Form.Field>

                <Form.Field error={!!errors.nume}>
                  <label htmlFor="nume">Nume</label>
                  <input
                    type="text"
                    id="nume"
                    name="nume"
                    placeholder="nume"
                    value={data.nume}
                    onChange={this.onChange}
                  />
                  {errors.nume && <InlineError text={errors.nume}/>}
                </Form.Field>

              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Button primary icon labelPosition='right'><Icon name='checkmark'/>Salveaza</Button>
       </Form>
      </Segment>
    )
  }
}

EditControlorForm.propTypes ={
  submit: PropTypes.func.isRequired,
  controlor: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    marca: PropTypes.number.isRequired,
    nume: PropTypes.string.isRequired
  }).isRequired
};

export default EditControlorForm;
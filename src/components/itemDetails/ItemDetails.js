import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../spinner/spinner';
import './itemDetails.css';

const Record = ({item, field, label})=> {
  return(
    <li className="list-group-item">
      <span className="term">{label}: </span>
      <span>{item[field]}</span>
    </li>
  );
};

export{
  Record
};

export default class ItemDetails extends Component {

  constructor(){
    super();

    this.state = {
      item: null,
      image: null,
      loading: true
    };

    this.swapiService = new SwapiService();
  };

  componentDidMount(){
    this.updatePerson();
  };

  componentDidUpdate(prevProps){
    if(this.props.itemId !== prevProps.itemId){
      this.updatePerson();
      this.setState({loading: true});
    }
  };

  updatePerson = ()=> {
    const { itemId, getData, getImageUrl } = this.props;

    if(!itemId){
      return;
    }

    getData(itemId).then((item)=> {
      this.setState({ item, loading: false, image: getImageUrl(item) });
  });
};

  render() {

    if(!this.state.item){
      return <span>Select a person from a list</span>
    }

    const { loading, item, image } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView item={item} 
                                           image={image} prop={this.props.children} /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  };
}

const PersonView = ({item, image, prop})=> {

  const { name } = item;
  
  return(
    <React.Fragment>
      <img className="person-image"
      src={image} alt="char" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          { React.Children.map(prop, (child)=>{
            return React.cloneElement(child, { item });
          }) }
        </ul>
      </div>
    </React.Fragment>
  );
};
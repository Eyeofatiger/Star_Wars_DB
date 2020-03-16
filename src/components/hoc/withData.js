import React, {Component, Fragment} from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

const withData = (View, getData)=>{
    return class extends Component{
      constructor(){
        super();
    
        this.state = {
          data: null,
          error: false,
          loading: true
        };
      };
    
      componentDidMount(){  
        getData()
            .then((data)=> {
              this.setState({
                data,
                loading: false
              });
            }).catch(this.onError);
      };
    
      onError = (err)=> {
        this.setState({
          error: true,
          loading: false
        });
      };
  
      render(){
        const {data, loading, error} = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = (loading || !data) ? <Spinner /> : null;
        const content = hasData ? <View {...this.props} data={data} /> : null;
    
        return (
          <Fragment>
            {errorMessage}
            {spinner}
            {content}
          </Fragment>
        );
      };
    }
  };

  export default withData;
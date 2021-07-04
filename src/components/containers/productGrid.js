import React from 'react';
import { fetchProducts  } from '../redux/products/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';


const ProductGrid = (props) => {

    useEffect(()=>{
      props.fetchData()
    }, [props.fetchData])

    return ( <div>
        <h1> This is Product Grid page</h1>
            {console.log(props.products)}
    </div> );
}

const mapStateToProps = (state)=>{
  return{
      products: state.products
  }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchData: ()=> dispatch(fetchProducts())
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ProductGrid)
import {Component} from 'react';
import './search-box.style.css';

class SearchBox extends Component {
    render() {
        return( 
            <input type={this.props.type} className={this.props.className} placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler} />
        )
    }
}

export default SearchBox;
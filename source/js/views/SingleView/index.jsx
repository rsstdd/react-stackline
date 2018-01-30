import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';
import Tile from '../../components/MultiTile';
import { setCurrentColor, getColors } from '../../actions/colorAction';

@connect(state => ({
    // Colors
  colorData: state.app.get('colorData'),

    // Filters
  currentColor: state.app.get('currentColor'),
}))
export default class SinlgeView extends Component {
  static propTypes = {
    colorData: PropTypes.array,
    currentColor: PropTypes.string,
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    
    this.state = {
      id: '',
    };

    this.onSelectColor = this.onSelectColor.bind(this);
  }
  
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   const routerId = this.props.match.params.id;
  // 
  //   if (!this.props.colorData) dispatch(getColors());
  // 
  //   dispatch(setCurrentColor(routerId))
  // }
  // 
  // 
  // componentDidUpdate(prevProps, prevState) {
  //   const { dispatch } = this.props;
  //   const routerId = this.props.match.params.id;
  // 
  //   if (prevProps == undefined) return false;
  //   
  //   console.log('== ROUTER ID ===>', routerId);
  //   
  //   dispatch(setCurrentColor(routerId));
  //   this.setState({ id: routerId });
  // }

  onSelectColor(color) {
    const { dispatch } = this.props.params;
    dispatch(setCurrentColor(color));
  }

  render() {
    console.log('=== this.props.match.id ===>', this.props.match.params.id);
    const { currentColor, colorData } = this.props;
    const { color, hex, id } = currentColor ? currentColor : '';
    let divColor = {
      backgroundColor: `${hex}`
    };
    const styles = { 
      tileDiv: "single-view__single-view-tile Layout__single-view-small-tile", 
      tileName: "single-view__single-view-tile__name Layout__single-view__single-view-tile__name"
    }

    return (
      <div className=" Layout__single-content single-view" >
          <div className="single-view__tile Layout__single-view-tile" style={ divColor }>
            <h3 className="single-view__tile--name Layout__single-view-tile--name">{ hex }</h3>
          </div>
          
          <div className="single-view__tile-list Layout__single-view__tile-list">
            { colorData && 
              colorData
                .filter(item => item.color === `${color}`)
                .slice(0, 4)
                .map(item => {
                  return (
                    <Tile
                      setClass={ styles }
                      key={ item.id }
                      color={ item }
                      onSelectColor={ this.onSelectColor }
                    />
                  )
                })
            }
          </div>
          <Link 
            to="/"
            className='btn single-view__button Layout__single-view__button'
            >
             <button>
              reset
            </button>
          </Link>
      </div>
    );
  }
}

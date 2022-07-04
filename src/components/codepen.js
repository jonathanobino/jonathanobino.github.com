import React, { Component } from 'react';
import { LazyFrame } from 'lazy-react';

class Codepen extends Component {
  constructor(props) {
    super(props);
    this.mapIdsToFrame = this.mapIdsToFrame.bind(this);
    this.state = {
      pens: this.mapIdsToFrame([
        'VedwMz', // product card
        'yeqgvr', // music ui
        'ZWpjzR', // weather dashboard
        'obwBEz', // twitter hearth animation
      ]),
    };
  }

  render() {
    return (
      <div className="row main">
        <div className="medium-2 large-2 columns text-right">
          <h2>My Popular Pens</h2>
        </div>
        <div className="medium-10 large-10 columns spaceBetween">
          {this.state.pens.map((elem, index) => {
            return (
              <LazyFrame
                key={elem.id}
                link={elem.link}
                height={268}
                style={{ maxWidth: '100%', marginBottom: '10px' }}
                offset={200}
              />
            );
          })}
        </div>
      </div>
    );
  }

  mapIdsToFrame(array) {
    return array.map((elem) => ({
      id: elem,
      link:
        '//codepen.io/jonathanobino/embed/preview/' +
        elem +
        '/?height=268&theme-id=0&default-tab=result',
    }));
  }

  componentDidMount() {
    // api is down for the moment
    // axios.get('https://cpv2api.com/pens/popular/jonathanobino')
    // .then(result => {
    // 	console.log(result)
    // 	if(result.data.success){
    // 		let done = result.data.data.map(elem => {
    // 			let id = elem.link.split('/').pop();
    // 			return {
    // 				id,
    // 				link:'//codepen.io/jonathanobino/embed/preview/'+id+'/?height=268&theme-id=0&default-tab=result'
    // 			}
    // 		})
    // 		this.setState({
    // 			pens:done.slice(0,4)
    // 		});
    // 	}
    // })
    // .catch(err => console.log(err))
  }
}

export default Codepen;
import React, {Component} from 'react';
import PortfolioItem from './portfolioItem';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [
        {
          link: 'http://ratemyc.herokuapp.com',
          description: 'Rate My Customer',
          imageSrc: '/images/ratemy.png',
        },
        {
          link: 'https://github.com/jonathanobino/kiko-hack',
          description: 'Kiko Experience (hackathon app)',
          imageSrc: '/images/kiko.png',
        },
        {
          link: 'http://www.digigrafonline.it',
          description: 'Digigraf',
          imageSrc: '/images/digigraf.png',
        },
      ],
    };
  }

  render() {
    return (
      <div className="row main">
        <div className="medium-2 large-2 columns text-right">
          <h2>Some work that I've done</h2>
        </div>
        <div className="medium-10 large-10 columns">
          <div className="row">
            {this.state.portfolio.map((elem, index) => (
              <div className="medium-4 columns" key={index}>
                <PortfolioItem item={elem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
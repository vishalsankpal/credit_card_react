import React from 'react'
import Ads from '../ads/Ads';
import Card from '../Card/Card';
import Container from '../Container/Container';
import Row from '../row/row';

import './CreditCard.scss';

const CreditCard = ({card}) => {
    
  return (
    <section className='get-credit-card-section'>
        <Container>
            <h2 className='get-credit-title'>Related Ad Topics</h2>
            <Row >
                {
                    card.map(item=>
                        <Card columnCount={3}>
                            <a href={item.linkUrl}>
                                <div class="card-wrapper">
                                    <div class="card-image-container">
                                        <img src={item.imgUrl} alt="cardImage" />
                                    </div>
                                    <div class="card-title-container">
                                        <a href="#" class="card-title"> 
                                            <span class="cart-title-text">{item.title}</span> 
                                            <span class="card-icon"><i class="fa-light fa-circle-chevron-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </Card>
                    )
                }
                
            </Row>
            <Row>
                <Card columnCount={2}>
                    <div className='cta-wrapper'>
                        <button>
                            <span class="text">Credit Cards With Zero Interest</span>
                            <span class="right-icon"><i class="fa-light fa-circle-chevron-right"></i></span>
                        </button>
                    </div>
                </Card>
                <Card columnCount={2}>
                    <div className='cta-wrapper'>
                        <button>
                            <span class="text">Credit Cards With Zero Interest</span>
                            <span class="right-icon"><i class="fa-light fa-circle-chevron-right"></i></span>
                        </button>
                    </div>
                </Card>
            </Row>
            <Ads/>
        </Container>
    </section>
  )
}

export default CreditCard

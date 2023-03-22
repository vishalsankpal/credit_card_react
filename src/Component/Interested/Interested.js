import React from 'react'
import Container from '../Container/Container';
import Row from '../row/row';
import Card from '../Card/Card';
import './Interested.scss';
import Ads from '../ads/Ads';

const Interested = ({interestedCards}) => {
  return (
    <section className='interested-section'>
        <div className="text-container container">
            <h2 className="intterested-section-title">You may also be interested in:</h2>
        </div>
        <Container>
            <Row>
                {
                    interestedCards.map(item=>
                        <Card columnCount="5" direction="reverse">
                            <a href={item.linkUrl}>
                                <div class="card-wrapper">
                                    <div class="card-image-container">
                                        <img src={item.imgUrl} alt={item.title} /> 
                                    </div>
                                    <div class="card-title-container">
                                        <a href={item.linkUrl} class="card-title"> 
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
            <Ads>Ads</Ads>
        </Container>
    </section>
  )
}

export default Interested

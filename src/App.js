import logo from './assets/logo.png';
import './App.scss';
import PageHeader from './Component/Page-header/PageHeader';
import CreditCard from './Component/creditCard/CreditCard';
import Interested from './Component/Interested/Interested';
import cardImageOne from './assets/card-1.png';
import cardImageTwo from './assets/card-3.png';
import InterestFirst from './assets/interested1.png';
import InterestSecond from './assets/interested2.png';
import InterestThird from './assets/interested3.png';
import InterestFourth from './assets/interested4.png';
import InterestFifth from './assets/interested5.png';

function App() {
  let card = [
    {
        title:'Online credit card Application',
        imgUrl:cardImageOne,
        linkUrl:'#'
    },
    {
        title:'Online credit card Application',
        imgUrl:cardImageTwo,
        linkUrl:'#'
    },
    {
        title:'Online credit card Application',
        imgUrl:cardImageOne,
        linkUrl:'#'
    }
  ]
  let interestedCards = [
    {
        title:'Auto Loan Quotes',
        imgUrl:InterestFirst,
        linkUrl:'#'
    },
    {
        title:'Auto Loan Quotes',
        imgUrl:InterestSecond,
        linkUrl:'#'
    },
    {
        title:'Auto Loan Quotes',
        imgUrl:InterestThird,
        linkUrl:'#'
    },
    {
        title:'Auto Loan Quotes',
        imgUrl:InterestFourth,
        linkUrl:'#'
    },
    {
      title:'Auto Loan Quotes',
      imgUrl:InterestFifth,
      linkUrl:'#'
    }
  ]
  return (
    <div className="App">
      <header>
        <div class="logo-container">
            <a href="/" title="CreditCardsToday">
                <img src={logo} alt="CreditCardsToday Logo" />
            </a>
        </div>
      </header>
      <PageHeader />
      <CreditCard card={card}/>
      <Interested interestedCards={interestedCards}/>
    </div>
  );
}

export default App;

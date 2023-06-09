import { useContext, useEffect, useState } from 'react';
import './Coin.scss';
import { useParams } from 'react-router-dom';
import { RequestContext } from '../../context/requestProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollar } from '@fortawesome/free-solid-svg-icons';
import ChangePercentage from '../change-percentage/ChangePercentage';
import ThemeContext from '../../context/themeProvider';

const Coin = (props) => {
  const [fetchingData, setFetchingData] = useState(false);
  const [data, setData] = useState(null);
  const [showApiOnHoldMessage, setShowApiOnHoldMessage] = useState(false);

  const { theme } = useContext(ThemeContext);
  const request = useContext(RequestContext);

  const params = useParams();

  useEffect(() => {
    setFetchingData(true);

    request.get(`coins/${params.coinId}`).then((response) => {
      if (response.data.name) {
        setData(response.data);
      } else if (response.data.status && response.data.status.error_code === 429) {
        setShowApiOnHoldMessage(true);
      }

      setFetchingData(false);
    });
  }, []);

  return (
    <div className={`Coin ${theme}`}>
      {
        !fetchingData && data && <>
          <h1 className="name">{data.name}</h1>

          <div className="prices">
            <div className="header">
              <FontAwesomeIcon icon={faClock} size="lg" />
              <span>Last 24 hours</span>
            </div>

            <div className="values">
              <div className="current">
                <span className="label">Current</span>
                <div className="value">
                  <FontAwesomeIcon icon={faDollar} size="xs"/>
                  <span>{data.price.current.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="highest">
                <span className="label">Highest</span>
                <div className="value">
                  <FontAwesomeIcon icon={faDollar} size="xs"/>
                  <span>{data.price.highest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              
              <div className="lower">
                <span className="label">Lower</span>
                <div className="value">
                  <FontAwesomeIcon icon={faDollar} size="xs"/>
                  <span>{data.price.lower.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="header">
              <span>Last 24 hours</span>
              <span>Last 7 days</span>
              <span>Last 14 days</span>
              <span>Last month</span>
              <span>Last 2 months</span>
              <span>Last 200 days</span>
              <span>Last year</span>
            </div>

            <div className="values">
              <ChangePercentage value={data.priceChange[0]}></ChangePercentage>
              <ChangePercentage value={data.priceChange[1]}></ChangePercentage>
              <ChangePercentage value={data.priceChange[2]}></ChangePercentage>
              <ChangePercentage value={data.priceChange[3]}></ChangePercentage>
              <ChangePercentage value={data.priceChange[4]}></ChangePercentage>
              <ChangePercentage value={data.priceChange[5]}></ChangePercentage>
              <ChangePercentage value={data.priceChange[6]}></ChangePercentage>
            </div>
          </div>

          <p className="description" dangerouslySetInnerHTML={{ __html: data.description}}></p>
        </>
      }

      {
        fetchingData && <>
          <div className="name-skeleton-item"></div>
          <div className="prices-skeleton-item"></div>
          <div className="stats-skeleton-item"></div>
          <div className="description-skeleton-item"></div>
        </>
      }

      {
        !fetchingData && showApiOnHoldMessage && <span>
          Coins API is on hold. Please try again in 5 minutes.
        </span>
      }
    </div>
  );
}

export default Coin;

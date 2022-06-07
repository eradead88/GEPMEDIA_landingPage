import React from 'react'
import layoutings from '../container_and_positions/containers_positions.module.css'
import textlayouts from './content.module.css'
import styles from './cta.module.css'
import cards from './pricing_cards.module.scss'
import Link from 'next/link'
const Fade = require("react-reveal/Fade");

function CardDescription({ title }) {	
	return (
		<div className={cards.card_description}>
			<h2 className={cards.card_desc_h2}>{ title }</h2>
		</div>
	);
};

function CardBilling({ price }) {
	return (
		<div className={cards.stylescard_billing}>
			<p>
				<strong className={cards.price}>Rp. { price }</strong>
			</p>
		</div>
	);
};

function CardFeatures({ data }) {	
	return (
		<div className={cards.card_features}>
			<ul className={cards.list_features}>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	);
};

function CardAction() {
	return (
		<div className={cards.card_action}>
			<Link href='https://simakui.gepmedia.id/#!/login'><a><button className={cards.action_button}>DAFTAR SEKARANG</button></a></Link>
		</div>
	);
};

function PricingCard(props) {	
	const { 
    type,
    title,
    price,
    recurrency,
    mostPopular,
    data,
  } = props;
	
	return (
		<div className={`${cards.card} ${type}`} id={type == 'pro' ? `${cards.pro}` : `${cards.basic}`}>
      { (mostPopular) ? <span className="most-popular">Most Popular</span> : null }
			<CardDescription title={title} />
			<CardBilling price={price} recurrency={recurrency} />
			<CardFeatures data={data} />
			<CardAction />
		</div>
	);
};

const cardsData = [
    {
      id: 1,
      type: 'basic',
      title: 'Paket A',
      description: '-',
      price: "25.000",
      recurrency: 24.99,
      mostPopular: false,
      data: ['2X Try Out SIMAK UI', '-', '-', 'Video Pembahasan', 'E-Book']
    },
    {
      id: 2,
      type: 'pro',
      title: 'Paket Kelas Online',
      description: '-',
      price: "150.000",
      recurrency: 84.99,
      mostPopular: false,
      data: ['2X Try Out SIMAK UI', '10X Kelas Online', 'Kumpulan Latihan Soal', 'Video Pembahasan', 'E-Book']
    }
];

function CallToAction() {
  return (
    <>
        <div className={layoutings.container_fluid}>
            <div className={`${layoutings.positionRelative} ${layoutings.py2}`}>
                <h2 className={`${textlayouts.text_title_content} ${textlayouts.text_center} ${layoutings.positionRelative}`}>
                    DAFTAR<span className={textlayouts.span}> SEGERA</span>
                </h2>
            </div>
        </div>
        <div className={layoutings.mt5}>
            <div className={`${styles.background_content} ${layoutings.positionRelative}`}>
                <div className={layoutings.container}>
                    <Fade bottom>
                    <div className={cards.app_wrapper}>
                      {
                        cardsData.map(props => {
                          return(
                            <PricingCard
                            {...props}
                            key={props.id}
                            />
                          )
                        })
                      }
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    </>
  )
}

export default CallToAction
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { themeSettings } from '../lib/settings';
import MetaTags from '../components/metaTags';
import CustomProducts from '../components/products/custom';
import HomeSlider from '../components/homeSlider';
import BestSelling from '../components/bestSelling';
import Headerbadge from '../components/headerbadge';
// import img from '../../assets/images/anime/Itachi_Uchiha_2_Half_Sleeve-Black_300x.png';

const IndexContainer = props => {
	const {
		addCartItem,
		state: { pageDetails, settings }
	} = props;

	// const data1 = null;
	const data1 = [
		{
			link: '/anime/itachi-uchiha',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1558728539/ApatoTees/Itachi_Uchiha_2_Half_Sleeve-Black_1024x1024.png',
			name: 'Itachi Uchiha',
			price: '$200'
		},
		{
			link: '/anime/roronoa-zoro',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658382/ApatoTees/Roronoa_Zoro_Half_Sleeve-_White_300x.png',
			name: 'Roronoa Zoro',
			price: '$200'
		},
		{
			link: '/anime/kame-symbol-2-2',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658382/ApatoTees/Kame_Symbol_Half_Sleeve-_Red_300x.png',
			name: 'Kame Symbol',
			price: '$200'
		},
		{
			link: '/anime/its-an-anime_t',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1558273747/ApatoTees/It_s_An_Anime_Things_Half_Sleeve-Navy_Blue_300x.png',
			name: 'Its An Anime',
			price: '$200'
		}
	];


	const data2 = [
		{
			link: '/football/manchester-united',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/ApatoTees/Manchester_United_2_Half_Sleeve-Red_300x.png',
			name: 'Manchester United',
			price: '$200'
		},
		{
			link: '/football/mancheste-city',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/ApatoTees/Manchester_City_Half_Sleeve-Navy_Blue_300x.png',
			name: 'Mancheste City',
			price: '$200'
		},
		{
			link: '/football/real-madrid',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/ApatoTees/Real_Madrid_Half_Sleeve-Black_300x.png',
			name: 'Real Madrid',
			price: '$200'
		},
		{
			link: '/football/psg',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/ApatoTees/PSG_Half_Sleeve-_White_300x.png',
			name: 'PSG',
			price: '$200'
		}
	];
	const data3 = [
		{
			link: '/gaming/team-navi',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658418/ApatoTees/Team_Navi_Half_Sleeve-_Yellow_300x.png',
			name: 'Team Navi',
			price: '$200'
		},
		{
			link: '/gaming/Eat-Sleep-Dota-Repeat',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1558727956/ApatoTees/Eat_Sleep_Dota_Repeat_Half_Sleeve-Black_300x.png',
			name: 'Eat Sleep Dota Repeat',
			price: '$200'
		},
		{
			link: '/gaming/eat-sleep-fortnite',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1558728212/ApatoTees/EAT_Sleep_Fortnite_Repeat_Half_Sleeve-Red-min_300x.png',
			name: 'Eat Sleep Fortnite',
			price: '$200'
		},
		{
			link: '/gaming/lol',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658418/ApatoTees/LOL_Keywords-Half_Sleeve_White-min_300x.png',
			name: 'LOL',
			price: '$200'
		}
	];

	return (
		<Fragment>
			<MetaTags
				title={pageDetails.meta_title}
				description={pageDetails.meta_description}
				canonicalUrl={pageDetails.url}
				ogTitle={pageDetails.meta_title}
				ogDescription={pageDetails.meta_description}
			/>

			{/* <HomeSlider images={themeSettings.home_slider} /> */}
			<Headerbadge />
			<BestSelling data={data1} section='Anime' />
			<BestSelling data={data2} section='Football' />
			<BestSelling data={data3} section='Gaming' />

			{pageDetails.content &&
				pageDetails.content.length > 10 && (
					<section className="section">
						<div className="container">
							<div className="content">
								<div
									dangerouslySetInnerHTML={{
										__html: pageDetails.content
									}}
								/>
							</div>
						</div>
					</section>
				)}

			<section className="section">
				<div className="container">
					<div className="title is-4 has-text-centered">
						{themeSettings.home_products_title}
					</div>
					<CustomProducts
						sku={themeSettings.home_products_sku}
						sort={themeSettings.home_products_sort}
						limit={themeSettings.home_products_limit}
						settings={settings}
						addCartItem={addCartItem}
					/>
				</div>
			</section>
		</Fragment>
	);
};

IndexContainer.propTypes = {
	addCartItem: PropTypes.func.isRequired,
	state: PropTypes.shape({
		settings: PropTypes.shape({}),
		pageDetails: PropTypes.shape({})
	}).isRequired
};

export default IndexContainer;

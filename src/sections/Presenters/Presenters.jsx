import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import "./Presenters.scss";
import Bubble from "../../components/Bubble/Bubble";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Arrow from "../../icons/Arrow"
import { StructuredText  } from "react-datocms"
import { useStaticElement, useAllElements } from '../../tools/datoCmsTools'

const Presenter = (props) => {
    return (
		<div className="presenter-card" style={props.style ? props.style : {}}>
				<div className="presenter-wrapper">
				<div className="presenter-img" style={{ backgroundImage: "url('" + props.imageUrl + "')"}}>
					<Bubble
						smallText
						darkText
						title={props.name}
						subtitle={`${props.title}, ${props.company}`}
						size="large"
						shadow
						color={props.highlight ? "primary" : "light"}
						corners={[props.right ? "bottom-right" : "top-left"]}
					></Bubble>
				</div>
				<div className="presenter-name-mobile">
					<div className="name">{props.name}</div>
					<div className="title">{props.title}, {props.company}</div>
				</div>
			</div>
		</div>
    );
};

const HighlightedPresenters = (props) => {
	const {presenters} = props 
	return	(
		<div className="presenters-grid">
		{
			presenters?.map((presenter, index) => (
				<Presenter
					key={presenter.slug}
					right={index % 2 === 1}
					name={presenter.name}
					highlight={index===0}
					title={presenter.title}
					company={presenter.company}
					imageUrl={presenter.image.url}
				/>
			))
		}
		</div>)
}

const AllPresenters = (props) => {
	const {presenters} = props 
	return	(
		<div className="presenters-grid small">
		{
			presenters?.filter(presenter => presenter.image).map((presenter, index) => (
				<Presenter
					key={presenter.slug}
					right={index % 2 === 1}
					name={presenter.name}
					highlight={index===0}
					title={presenter.title}
					company={presenter.company}
					imageUrl={presenter.image.url}
					style={{animationDelay: `${index * 0.05}s`}}
				/>
			))
		}
		</div>)
}

const Presenters = (props) => {
	const [presenterText] = useStaticElement("speaker") 
	const [allPresenters] = useAllElements("presenters")
	const [showAll, setShowAll] = useState(false)
	const highlightedPresenters = allPresenters?.filter(s => s.highlighted)
	const furtherPresenters = allPresenters?.filter(s => !s.highlighted && s.image)


    return (
        <Section id="eloadok" container placeholder static>
			<Title>
				Akikkel együtt <span className="text-uppercase">ünnepelhetünk</span>
			</Title>
			<Text subtitle>
				<StructuredText data={presenterText} />
			</Text>
            
			
			{(allPresenters) && <HighlightedPresenters presenters={highlightedPresenters} />}
			{furtherPresenters?.length > 0 && 
				<>
					<Button onClick={() => setShowAll(!showAll)}><Arrow rotation={showAll ? 180 : 0} /> További előadóink </Button>
					{(allPresenters && showAll) && <AllPresenters presenters={furtherPresenters} />}
				</>
			}
			
        </Section>
    );
};

export default Presenters;

import Section from "../../components/Section/Section"
import "./Map.scss"
import Title from "../../components/Title/Title"
import Text from "../../components/Text/Text"
import map from "../../assets/img/map.png"
import { useStaticElement } from '../../tools/datoCmsTools'
import { StructuredText  } from "react-datocms"


const Map = () => {
	const [mapText1] = useStaticElement("map1") 
	const [mapText2] = useStaticElement("map2") 
	return <Section id="helyszin" container placeholder>
		<Title>Az ünnepség HELYSZÍNE</Title>
		<Text description><StructuredText data={mapText1}></StructuredText></Text>
		<a href="https://www.google.com/maps/place/BME+I+%C3%89p%C3%BClet/@47.4726802,19.0574508,17z" target="_blank" rel="noreferrer">
			<img className="map" src={map} alt="Térkép" />
		</a>
		<Text description><StructuredText data={mapText2}></StructuredText></Text>
	</Section>
}

export default Map
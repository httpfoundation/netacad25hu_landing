import './SectionWelcome.scss'
import negyedgomb from "../../assets/img/negyedgomb.png";

const Section = (props) => {
	return <section id={props.id} className={`section ${props.placeholder && 'section-placeholder'}`} style={{position: "relative"}}>
		    <div class="background">
                <div class="background-strip zero-strip"></div>
                <div class="background-strip first-strip"></div>
                <div class="background-strip second-strip"></div>
                <div class="background-strip third-strip"></div>
				<div class="background-strip image-strip"><img src={negyedgomb} alt="" /></div>
				
            </div>
		<div className={`${props.container && 'container'} ${props.relative && ' relative'}`}>
			{props.name && <h2>{props.name}</h2>}
			{props.children}
		</div>
	</section>
}

export default Section
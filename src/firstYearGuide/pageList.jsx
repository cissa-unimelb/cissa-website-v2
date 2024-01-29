
const SampleComponent = (props) => {
    return (
        <div style={{
            width: "100%",
            height: "50vh",
            backgroundColor: props.color            
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur in purus id odio efficitur congue. Nulla suscipit, 
            diam vel sodales fermentum, quam lacus faucibus ipsum, eget 
            scelerisque velit sapien sit amet risus. Fusce sit amet ornare 
            lacus, vitae imperdiet risus. Aliquam pharetra, dolor ac consequat 
            feugiat, felis erat imperdiet libero, id tincidunt quam elit a 
            dui. Nullam pretium luctus suscipit. Integer maximus est felis, 
            pharetra aliquam arcu posuere vitae. Phasellus sed porta felis, 
            sed efficitur nulla. Cras nec eleifend eros.
        </div>
    )
}



const PageList = [
    <SampleComponent color="red"/>,
    <SampleComponent color="green"/>,
    <SampleComponent color="black"/>
]

export default PageList;
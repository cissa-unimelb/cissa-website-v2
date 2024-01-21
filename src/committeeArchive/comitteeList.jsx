import { executives } from "./committeeData"

const CommitteeList = (props) => {
    const curWidth = window.innerWidth;
    const isSmall = curWidth < 350;
    return (
        <ul>
            {props.roles
                .filter((roleData) => {
                    const [role] = Object.entries(roleData)[0]
                    if (props.isExecutive){
                        return executives.includes(role)
                    } else {
                        return !executives.includes(role)
                    }
                })
                .map((roleData, idx) => {
                    const [role, name] = Object.entries(roleData)[0];
                    return (
                        <li key={idx}>
                            <strong>{role}:</strong> {isSmall?<p>{name}</p>:name} 
                        </li>
                    )
                })}
        </ul>
    )
}

export default CommitteeList
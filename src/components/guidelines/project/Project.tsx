import './project.css';

interface ProjectProps{
    projectTitle:string;
    projectDate:string;
    backgroundPicture:string;
    zIndex:number;
    opacity:number;
}

const Project: React.FC<ProjectProps> = ({projectTitle,projectDate,backgroundPicture,zIndex,opacity,}) => {
    const divStyle:React.CSSProperties = {
        opacity: opacity,
        backgroundImage: `url(${backgroundPicture})`,
        zIndex:zIndex
    };
    return (
        <div className="project" style={divStyle}>
            <div className='projectDetails'>
                <p className='projectTitle'>{projectTitle}</p>
                <p className='projectDate'>{projectDate}</p>
            </div>
        </div>
    )
}
export default Project;
import './index.css'
const ProjectItem =props=>{
const {projectList}=props
const {projectId,imageURL,title,description}=projectList

return(
   
        <li className='listers'>
            
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
        </li>
    
)
}
export default ProjectItem
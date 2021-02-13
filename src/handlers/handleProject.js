import { logger } from '../../lib/logger.js';

import { Project } from '../classes/portfolio.js';


export function handleProject(){

  let ProjectUrl = "https://api.github.com/users/sharafcs50/repos?per_page=100" ;

  // Array of the selected project ids

  const myProjectIds = [299423811,306131010];
 // declare a variable to be able to add it to the logger 
  let project ;
  // filter data array 
 const filterData = (data) =>{
 data.forEach(element =>{
   if(!myProjectIds.includes(element.id)){
     return ;
    }

     project = new Project(element.id, element.name, element.html_url) ;    
    const renderProject = project.render();

    const projectsDiv = document.getElementById('projects');
    projectsDiv.appendChild(renderProject);
   
 })

 }

 // fetch data form GitHub API 
 
  fetch(ProjectUrl)
  .then(res => res.json())
  .then(data =>  filterData(data))
  .catch(err => console.log(err)); 
  
  
//push project to logger function 
  logger.push({
    action: 'fetch project',
    project: project,
    
})
}
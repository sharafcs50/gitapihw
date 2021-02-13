export class Project {
    constructor(id, name, html_url){
        this.id = id;
        this.name = name;
        this.link = html_url;
    }

    render(){
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('parent-div');

        const parentImg = document.createElement('div');
        parentImg.classList.add('parent-img');

        parentDiv.appendChild(parentImg);

        const image = document.createElement('img');
        image.src = `./public/assets/${this.id}.png`;
        image.className = 'images';

        parentImg.appendChild(image);

        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('project-title');
        projectTitle.innerText = `${this.name}`;

        parentImg.appendChild(projectTitle);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description-div');

        const textDiv = document.createElement('div');
        textDiv.classList.add('text-div');

        descriptionDiv.appendChild(textDiv);

        const projectLink = document.createElement('a');
        projectLink.classList.add('project-link');
        projectLink.innerHTML = `${this.name} <i class = "fas fa-paperclip"> </i>`;
        projectLink.href = `${this.link}`;
        projectLink.target = `_blank`;

        descriptionDiv.appendChild(projectLink);

        parentDiv.appendChild(descriptionDiv);

        return parentDiv;
        
    }
}
function Render(element, container){
    const newElement = document.createElement(element.type);
    newElement.innerHTML=element.children;
    for(const prop in element.props){
        newElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(newElement);
}

const newElement = {
    type : 'a',
    props : {
        href : 'https://www.facebook.com',
        target : '_self' 
    },
    children : 'Open Book Not FacebooK Okay'
}
const root = document.querySelector('#root');

Render(newElement, root);

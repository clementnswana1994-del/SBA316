import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        this.setTitle("Dashboard");
    }
    
    async getHtml() {
        return `
           <h1>Welcome back, Home</h1>
           <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Quisque rutrum libero non elementum commodo. Pellentesque eget egestas tellus.
               Vestibulum pellentesque finibus dolor, id euismod odio viverra et. Vivamus congue
               consectetur pharetra. Fusce id porta magna. In sagittis malesuada enim at
               rutrum. Ut fringilla ligula interdum mauris maximus, sed accumsan sapien
               placerat. Duis id nisl vel nulla rutrum sollicitudin ac sit amet tellus.
               Nam rutrum aliquam placerat. Curabitur tempor, turpis vitae bibendum
               finibus, nibh augue ultricies tellus, nec porta mauris nisl id mauris.
               Pellentesque sit amet risus id ipsum semper ultricies non in ipsum.
            </p>
            <p>
               <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
};


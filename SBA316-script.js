export default class extends AbstractView {
    constructor() {
        super();
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

export default class {
     constructor() {
 }

 setTitle(title) {
     document.title = title;
 }
 async getHtml() {
     return "";
   }
 }

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    //{ path: "/posts", view: () => console.log("viewing Posts") },
    //{ path: "/settings", view: () => console.log("viewing Settings") },
  ];

  // test each route for potenial match
  const potenialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
 });
  
  let match = potenialMatches.find(potenialMatch => potenialMatch.isMatch);

  if (!match) {
    match = {
        route: routes[0],
        isMatch: true
    }
  }
  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

  console.log(match.route.view());
};

//windon.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
           e.preventDefault();
           navigateTo(e.target.href); 
        }
    });
  
    router();
});


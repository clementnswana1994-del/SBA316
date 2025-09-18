const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
  const routes = [
    { path: "/dashboard", view: () => console.log("viewing Dashboard") },
    { path: "/posts", view: () => console.log("viewing Posts") },
    { path: "/settings", view: () => console.log("viewing Settings") },
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

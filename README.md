# React-Router-Params-Queries
React Router Params Queries

* We can define sub routes using /: in the Routes profile
    e.g. <Route path="services/:service" component={Services}></Route>

* We can also make sub routes optional using ()
    e.g. <Route path="services(/:service)" component={Services}></Route>

* We all pulling variables to const to clean the html returned inside each Class

* We use this to grab an object of the same name and create an object in this scope
*   e.g. this.props contains params and we have created an object here called params

* On a link we can make active class names for links with  activeClassName="test"

* History is always available in the props
    e.g. const { history } = this.props; console.log(history.isActive("about"));

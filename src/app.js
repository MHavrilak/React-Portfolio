import React from "react";

function App() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Mike Havrilak} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
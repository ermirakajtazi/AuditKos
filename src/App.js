import React from 'react';
import Home from "./components/pages/Home"
import AboutUs from "./components/pages/AboutUs"
import InternalAudit from "./components/pages/InternalAudit"
import ExternalAuditor from "./components/pages/ExternalAuditor"
import InternshipAccountant from "./components/pages/InternshipAccountant"
import CMACertification from "./components/pages/CMACertification"
import AccountingTechnician from "./components/pages/AccountingTechnician"
import Entrepreneurship from "./components/pages/Entrepreneurship"



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/internal-auditor" component={InternalAudit} />
        <Route path="/external-auditor" component={ExternalAuditor} />
        <Route path="/internship-accounting" component={InternshipAccountant} />
        <Route path="/cma-certification" component={CMACertification} />
        <Route path="/accounting-technician" component={AccountingTechnician} />
        <Route path="/entrepreneurship" component={Entrepreneurship} />
      </Switch>
    </Router>
  );
}

export default App;

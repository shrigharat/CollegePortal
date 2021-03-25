import './App.scss';

import Banner from "./components/landing-page/banner/banner.component";
import SocialProof from "./components/landing-page/social/social-proof.component";

function App() {
  return (
    <div className="App">
      <section className="banner-cmp"><Banner/></section>
      <section className="one"><SocialProof/></section>
      <section className="two">World!</section>
    </div>
  );
}

export default App;

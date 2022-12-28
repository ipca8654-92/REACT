import foto1 from "./images/looks01.png"
import foto2 from "./images/looks02.png"
import foto3 from "./images/looks03.png"
import foto4 from "./images/looks04.png"
import "./Looks.css"


function Looks() {
  return (
    <div className="looks_container">
      <h2 className="textcenter marginbottomfull">Looks</h2>
      <div className="gridrow">
        <div className="col-6 col-t-3">
          <a href="#" title="View Look" className="look-card">
            <div className="look-card-image">
              <img
                sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"
                src={foto1}
                alt=""
              />
            </div>
            <p className="fancytext">Look 1</p>
          </a>
        </div>
        <div className="col-6 col-t-3">
          <a href="#" title="View Look" className="look-card">
            <div className="look-card-image">
              <img
                sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"
                src={foto2}
                alt=""
              />
            </div>
            <p className="fancytext">Look 2</p>
          </a>
        </div>
        <div className="col-6 col-t-3">
          <a href="#" title="View Look" className="look-card">
            <div className="look-card-image">
              <img
                sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"
                src={foto3}
                alt=""
              />
            </div>
            <p className="fancytext">Look 3</p>
          </a>
        </div>
        <div className="col-6 col-t-3">
          <a href="#" title="View Look" className="look-card">
            <div className="look-card-image">
              <img
                sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"
                src={foto4}
                alt=""
              />
            </div>
            <p className="fancytext">Look 4</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Looks;

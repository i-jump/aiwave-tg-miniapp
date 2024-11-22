import "./index.less";
const Earn = () => {
  return (
    <div className="miniapp-earn">
      <div className="earn-link-list">
        <div className="earn-item">
          <div className="earn-item-title">Link to APP</div>
          <div className="earn-item-desc">Link to AI wave App account.</div>
          <div className="earn-coin-wrap">
            <img
              src="https://static.wdabuliu.com/86818d50-8363-4c9a-aa2e-bf0e6d5fddf91731575470662.png"
              alt=""
            />
            <div className="earn-coin-num">300</div>
          </div>
        </div>
        <div className="earn-link-btn">Link</div>
        {/* <div className="earn-link-icon">
          <img
            src="https://static.wdabuliu.com/56a4963c-9d7d-4726-8edc-b4c2eaa950841731645438699.png"
            alt=""
          />
        </div> */}
      </div>
      <div className="earn-link-list earn-link-list-active">
        <div className="earn-item">
          <div className="earn-item-title">Link to APP</div>
          <div className="earn-item-desc">Link to AI wave App account.</div>
          <div className="earn-coin-wrap">
            <img
              src="https://static.wdabuliu.com/86818d50-8363-4c9a-aa2e-bf0e6d5fddf91731575470662.png"
              alt=""
            />
            <div className="earn-coin-num">300</div>
          </div>
        </div>
        {/* <div className="earn-link-btn">Link</div> */}
        <div className="earn-link-icon">
          <img
            src="https://static.wdabuliu.com/56a4963c-9d7d-4726-8edc-b4c2eaa950841731645438699.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Earn;

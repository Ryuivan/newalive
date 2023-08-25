import "./FlowRangkaian.css";

export default function FlowRangkaian() {
  return (
    <div className="background-flow">
      <div className="noisy">
        <div className="TopSection">
          <div className="JudulRangkaian">
            <p>31 Oktober 2023</p>
          </div>
          <div className="RangkaianDetail">
            <p>Health Check Up</p>
            <p>Booth</p>
          </div>
        </div>

        <div className="JudulRangkaian">
          <p>2 November 2023</p>
        </div>
        <div className="RangkaianDetail">
          <p>Work Out</p>
          <p>Workshop</p>
        </div>

        <div className="BottomSection">
          <div className="JudulRangkaian">
            <p>8 November 2023</p>
          </div>
          <div className="RangkaianDetail">
            <p>Talkshow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

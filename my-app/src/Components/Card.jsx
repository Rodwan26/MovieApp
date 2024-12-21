import Buttons from "./Buttons";

export default function Card({ Movie, type }) {
  let list = [];
  if (type === "watchlist") {
    list = Movie.watchlist;
  } else if (type === "watched") {
    list = Movie.watched;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {list.map((el, index) => (
        <div key={index}>
          <div className="card" style={{ width: "18rem" }}>
            {el.Poster ? (
              <img
                className="card-img-top"
                src={el.Poster}
                alt="Card image cap"
              />
            ) : (
              <div> film Photo</div>
            )}

            <div className="card-body">
              <h5 className="card-title">{el.Title}</h5>
              <p className="card-text">
                <span>{el.Type}</span>
                <span>{el.Year}</span>
              </p>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "20px",
                }}
              >
                <Buttons type={type} el={el}></Buttons>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

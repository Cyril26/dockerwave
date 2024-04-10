import "../tile.css";

const Tile = ({ title, detail }) => {
  let detailContent;

  if (typeof detail === "object") {
    detailContent = Object.entries(detail).map(([key, value]) => (
      <p key={key}>
        <strong>{key}:</strong> {value[0].HostIp}:{value[0].HostPort}
      </p>
    ));
  } else {
    detailContent = <>{detail}</>;
  }

  return (
    <div className="tile">
      <div className="tile-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="icon"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h5 className="tile-title">{title}</h5>
        <div className="tile-detail">{detailContent}</div>
      </div>
    </div>
  );
};

export default Tile;

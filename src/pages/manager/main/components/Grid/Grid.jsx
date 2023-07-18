import CellsBar from "./CellsBar";

import InfoCards from "./InfoCards";

import SiloReport from "./SiloReport";

const Grid = () => {
  return (
    <>
      <div className="container flex-grow-1">
        <div className="row flex-grow-1">
          <InfoCards />

          <CellsBar />

          <div className="w-100"></div>

          <SiloReport />
        </div>
      </div>
    </>
  );
};

export default Grid;

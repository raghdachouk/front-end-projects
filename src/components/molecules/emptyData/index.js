import { WrapperContainer } from "./emptyData.styles";

const EmptyData = () => {
  return (
    <WrapperContainer>
      <h2>No Reports</h2>
      <p className="description-text">
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </p>
      <img
        src="./assets/emptydata.png"
        alt="emptyreports"
        width={400}
        height={170}
      />
    </WrapperContainer>
  );
};
export default EmptyData;

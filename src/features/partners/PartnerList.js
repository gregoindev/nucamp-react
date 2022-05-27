import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { PARTNERS } from "../../app/shared/PARTNERS";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);

  return (
    <Col className="mt-4">
      <Row>
        {PARTNERS.map((partner) => {
          return (
            <div className="d-flex mb-5" key={partner.id}>
              <Partner partner={partner} />
            </div>
          );
        })}
      </Row>
    </Col>
  );
};

export default PartnersList;

import { Button, Table } from "react-bootstrap";

const NameList = ({ names }) => {
  return (
    <div>
      <Table striped bordered style={{ width: "600px" }}>
        {names.map((name, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>
              <Button variant="primary">Xem</Button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};
export default NameList;

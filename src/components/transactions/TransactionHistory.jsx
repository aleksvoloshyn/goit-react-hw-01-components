import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const TransactionHistory = ({ items }) => {
  return (
    // <table class="transaction-history">

    //   <tbody>
    //     {items.map(item => (
    //       <tr key={item.id}>
    //         <td>{item.type}</td>
    //         <td>{item.amount}</td>
    //         <td>{item.currency}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <Table striped bordered hover>
      <thead style={{ backgroundColor: 'salmon' }}>
        <tr>
          <th>Type</th>
          <th>amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;

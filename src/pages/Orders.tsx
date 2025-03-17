import useOrders from "@hooks/useOrders";

import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import { Table, Modal } from "react-bootstrap";
import { ProductInfo } from "@components/eCommerce";

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    closeModalHandler,
    viewOrderDetails,
  } = useOrders();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginTop: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>

      <Heading title="Your Orders" />
      <Loading status={loading} error={error} type="Table">
        <Table striped bordered hover style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Item</th>
              <th>QTY</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((el) => (
              <tr key={el.id}>
                <td>#{el.id}</td>
                <td>
                  <span
                    onClick={() => viewOrderDetails(el.id)}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Product details
                  </span>
                </td>
                <td>{el.items.length}</td>
                <td>{el.subTotal.toFixed(2)} EGP</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
    </>
  );
};

export default Orders;

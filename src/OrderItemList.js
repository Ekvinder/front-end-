export default function OrderItemList() {
    const getOrderItems = localStorage.getItem("orderItem")?JSON.parse(localStorage.getItem("orderItem")):null;
    console.log(getOrderItems);

  return (

    
        <div className=" container-fluid">
            <h5 className="position-relative text-uppercase mb-3 text-success text-center">
                Order Item List
            </h5>
            <div className="row px-xl-5">
                <div className="col-lg-12 table-resposive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Items</th>
                                <th>Quantity</th>
                                <th>unit Price</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {getOrderItems.map((o) =>(
                                <tr key={o.id}>
                                    <td className="align-middle">{o.description}</td>
                                    <td className="align-middle">{o.quantity}</td>
                                    <td className="align-middle">{o?.price?.unit_amount}</td>
                                    <td className="align-middle">{o.amount_total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    
 
  )
}

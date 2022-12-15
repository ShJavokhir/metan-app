import React, {useEffect, useState} from 'react';
import {ClientsTableWrapper} from "./ClientsTable.style";
import DeleteSvg from "../../../../Common/Svgs/DeleteSvg";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import {Input} from "antd";
import UserProvider from "../../../../../Data/Providers/UserProvider";
import Message from "../../../../../utils/Message";
import Pagination from "rc-pagination";
import MinLoader from "../../../../Common/MinLoader";

const Modal=()=>{
  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Barcha mijozlarga push-xabarnoma yuborish</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            <div className="input">
              <label>Nomi<span>*</span></label>
              <Input size="large"/>
            </div>
            <div className="input">
              <label>Ta'rif<span>*</span></label>
              <Input size="large"/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Bekor qilish</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ClientsTable = () => {
  const [user, setUser] = useState([])
  const [loading2, setLoading2] = useState(false);

  const [totalElements, setTotalElements]=useState(10)
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = page => {
    setCurrentPage(page);
  };


  useEffect(()=>{
    setLoading2(true)
    UserProvider.getClients(currentPage-1, 10)
      .then(({data})=>{
        console.log("clients",data)
        setUser(data.data)
      })
      .catch(err => {
        console.log(err)
        Message.serverError()
      }).finally(() => {
      setLoading2(false);
    })
  }, [])
  return (
    <ClientsTableWrapper>
      <div className="top">
        <h3 className="title">Mijozlar</h3>
        <div className="modal-wrapper">
          <button className="btn btn-primary" style={{fontFamily:"Inter"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Barcha mijozlarga push-xabarnoma yuborish
          </button>
          {/*====MODAL====*/}
          <Modal/>
        </div>

      </div>

      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th style={{width: "15%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">Mijoz</th>
          <th style={{width: "15%"}} className="col">Telefon</th>
          <th style={{width: "8%"}} className="col">Avto raqami</th>
          <th style={{width: "8%"}} className="col">Chek summasi</th>
          <th style={{width: "8%"}} className="col">Balans</th>
          <th style={{width: "8%"}} className="col">Qarz</th>
          <th style={{width: "15%"}} className="col">Oxirgi faoliyat</th>
          <th style={{width: "8%"}} className="col">Umumiy ballar</th>
          <th style={{width: "8%"}} className="col">Tashriflar soni</th>
        </tr>
        </thead>
        <tbody>
        {
          !loading2 ?
            user.length ?
              user.map((obj, index)=>(
                <tr key={obj.id}>
                  <td style={{width: "15%", display: "flex", justifyContent:"start", alignItems:"center", textAlign:"start"}} className="col">{index+1}.{obj.fullName}</td>
                  <td style={{width: "15%"}} className="col">{obj.phoneNumber}</td>
                  <td style={{width: "8%"}} className="col">{obj.plateNumber}</td>
                  <td style={{width: "8%"}} className="col">{obj.totalSpendings}</td>
                  <td style={{width: "8%"}} className="col">{obj.balance}</td>
                  <td style={{width: "8%"}} className="col">{obj.totalDebt}</td>
                  <td style={{width: "15%"}} className="col">{new Date(obj.lastVisit).toLocaleString("en-GB")}</td>
                  <td style={{width: "8%"}} className="col">{obj.totalPoints}</td>
                  <td style={{width: "8%"}} className="col">{obj.numberOfVisits}</td>
                </tr>
              )): <div style={
                {
                  textAlign: "center",
                  padding: 30,
                }
              }><h3 style={{fontFamily:"Inter"}}>Cheklar mavjud emas!</h3></div>
            : <MinLoader/>
        }

        </tbody>
      </table>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
      />
    </ClientsTableWrapper>
  );
};

export default ClientsTable;
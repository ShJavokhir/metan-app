import styled from "styled-components";

const DebtorsTableWrapper=styled.div`
  .title{
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: #1F3C88;
  }
  .filter{
    display: flex;
    background: #fff;
    padding: 22px 13px 0;

  }

  .table{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    thead{
      width: 100%;
      tr{
        display: flex;
        //justify-content: space-between;
        //background: rgba(31, 60, 136, 0.1);
        background: #fff;
        border-radius: 6px 6px 0px 0px;
        padding: 15px 22px;
        th.col{
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: "Inter";
        }
        th.row{
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: #1F3C88;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
          font-family: "Inter";

        }
      }
    }

    tbody{
      background: #fff;
      tr{
        display: flex;
        justify-content: space-between;
        padding: 0px 22px;
        td.col{
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          text-align: center;
          font-family: "Inter";

        }
        &:nth-child(even) {
          background-color: #f2f2f2;
        }
        
        td.row{
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
          font-family: "Inter";
        }
      }
    }
  }
`

export{DebtorsTableWrapper}
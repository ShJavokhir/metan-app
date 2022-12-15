import styled from "styled-components";

const PosTableWrapper = styled.div`
  .top {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: #1F3C88;
      font-family: "Inter";

    }
  }

  .table {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);

    thead {
      width: 100%;

      tr {
        display: flex;
        //justify-content: space-between;
        //background: rgba(31, 60, 136, 0.1);
        background: #fff;
        border-radius: 6px 6px 0px 0px;
        //padding: 15px 22px;

        th.col {
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
          padding: 15px 12px 10px;
        }

        th.row {
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

    tbody {
      background: #fff;
      
      img{
        width: 50px;
        height: 50px;
      }

      tr {
        display: flex;
        //justify-content: space-between;

        td.col {
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


          .btns {
            width: 40%;
            display: flex;
            justify-content: space-between;
            button {
              background: transparent;
              border: 1px solid #000;
              border-radius: 10px;
              cursor: pointer;
              transition: 300ms;

              &:hover {
                background: rgba(31, 60, 136, 0.75);

              }

              svg {
                fill: none;
                stroke: none;
              }
            }
          }
        }
      }
    }
  }
`

export {PosTableWrapper}
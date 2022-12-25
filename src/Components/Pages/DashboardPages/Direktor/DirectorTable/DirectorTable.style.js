import styled from "styled-components";

const DirectorTableWrapper = styled.div`
  .top{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.7);
      font-family: "Rubik";
    }
  }
  .filter{
    display: flex;
    background: #fff;
    padding: 22px 13px 0;

  }

  .table{
    margin-top: 20px;
    //box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.03);
    box-shadow: rgb(20 21 33 / 18%) 0px 2px 10px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Inter";
    thead{
      width: 100%;
      tr{
        display: flex;
        background: #F5F5F7;
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        padding: 5px 0;
        
        th.col{
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: start;
          text-align: center;
          font-family: "Inter";
          padding: 15px 12px 10px 20px;

        }
        
      }
    }

    tbody{
      background: #fff;
      tr{
        display: flex;
        border-bottom: 1px solid rgba(159, 160, 184, 0.3);
        justify-content: space-between;
        td.col {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          display: flex;
          align-items: center;
          justify-content: start;
          color: rgba(0, 0, 0, 0.7);
          text-align: center;
          font-family: "Inter";
          padding-left: 20px;

        }
         

          img{
            width: 50px;
            height: 50px;
          }

        .btns {
          width: 40%;
          display: flex;
          margin-left: 20px;
          justify-content: start;

          button {
            cursor: pointer;
            transition: 300ms;
            background: transparent;

            svg {
              fill: none;
              width: 20px;
              height: 20px;
              fill: rgb(253, 181, 40);
            }
          }
        }
        }
       
      }
    }
  
`

const ModalHeader = styled.header`
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f6f8;
  padding: 20px 20px 5px 20px;
  h2.title{
    margin-bottom: 0;
    font-size: 25px !important;
  }
    svg{
      height: 20px;
      width: 20px;
      color:#000;
    }
  
  button.closeSvg{
    background: transparent;
    border: none;
  }
`


const ModalContent = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f5f6f8;
  background: #fff;
  font-family: "Inter" !important;
  
  form{
    background: #fff;
    .label {
      width: 100%;
      display: block;
      margin-bottom: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      margin-bottom: 30px;

      span.label-text {
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 18px;
        color: #000000;
        margin-bottom: 8px;
      }

      input {
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 16px;
        color: #000000;
        border: 2px solid rgba(31, 60, 136, 0.4);
        border-radius: 6px;
        padding: 10px 10px;
      }

      span.err-text {
        color: red !important;
        position: absolute;
        left: 0;
        top: 70px;
      }
      .select{
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 20px;
        color: #000000;
        .css-319lph-ValueContainer{
          padding: 15px 10px;
        }
        .css-1s2u09g-control{
          height: 60px;
        }
        .css-1okebmr-indicatorSeparator{
          display: none;
        }
      }
    }
    
    .btns{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      button{
        width: 100%;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 18px;
        border-radius: 4px;
        padding: 12px 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Inter";

        &:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }
      }
    }
  }
  
`




const ModalFooter = styled.footer`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
    button{
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 18px;
      color: #FFFFFF;
      background: #1F3C88;
      border-radius: 8px;
      border: none;
      padding: 12px 22px;
      display: inline-flex;
      gap: 10px;
      align-items: center;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
      }
    }
`

export {
  DirectorTableWrapper,
  ModalHeader,
  ModalContent,
  ModalFooter
}
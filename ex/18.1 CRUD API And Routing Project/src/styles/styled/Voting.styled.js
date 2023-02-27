import styled from "styled-components";

const Wrapper = styled.section`
  .page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto;
    }
    .dashboard-page {
      width: 90%;
    }

    label {
      margin: auto;
      color: red;
      font-size: larger;
    }

    /* .data-msg {
      border: solid 0.2rem var(--primary-200);
      padding: 0.5rem;
      background-color: var(--primary-200);
      margin-bottom: 2.7rem;
      font-weight: bold;
      position:relative;
      font-size: 1.6rem;
      border-radius:0.3rem;
    }
    .center {
      text-align: center;
    }

    .thanks-msg{
      padding: 0.5rem;
      margin-bottom: 2.7rem;
      font-weight: bold;
      position:relative;
      font-size: 1.9rem;
    }

    .logout-btn{
      position: absolute;
      right: 1rem;
    } */
  }
`;
export default Wrapper;

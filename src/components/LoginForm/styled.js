import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  padding: 60px 50px 100px;
  border-radius: 30px;

  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: -16px 22px 20px -15px rgba(0, 0, 0, 0.3);

  form {
    width: 100%;
  }

  .form-wrapper {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(1fr);
    gap: 30px;
  }
`;

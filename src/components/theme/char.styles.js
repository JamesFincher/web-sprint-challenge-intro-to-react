import styled from 'styled-components';

const charStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  &:hover {
    background: #eaeaea;
    box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

export default charStyle;

import styled from 'styled-components'
import Form from './Form.js'
import bgImg from '../assets/background.png'

function App() {
  return (
    <div className="App">
      <Container>
        <Wrapper>
          <Form></Form>
        </Wrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`

  background: #F7F7F7;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

`

const Wrapper = styled.div`

  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

`

export default App;

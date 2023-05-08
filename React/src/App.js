import './App.css';
import Header from './Components/Header';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

function App() {
  return (
    <div>
      <Header name="Atharv" title="Sample Title"/>
      <br />
      <Header name="Test" title="Test Title"/>
      <br />
      <Button color='dark' size='lg' disabled>Click</Button>
      <br />
      <Button color='success' size='md' active>Click</Button>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;

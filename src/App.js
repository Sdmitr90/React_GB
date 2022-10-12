import './index.css';
import { Form } from "./components/Form/Form";
import { Form as FormClass } from "./class-components/Form";
import { Count as CountClass } from "./class-components/Count";
import {Count} from "./components/Count";
import {Message} from "./components/Message";

import {useState} from "react";

export const App = () => {
  const [text, setText] = useState('props message from parent');

  return (
      <div className="App">
        <h3 style={{ color: 'red'}}>First Lesson GB</h3>
        <Form />
        <CountClass count={10}/>
        <hr />
        <Count />
        <hr />
        <FormClass/>
        <hr />
        <Message message={ text }/>
      </div>
  );
}


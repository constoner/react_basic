import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button/Button';
import { ButtonsGroup } from './components/Buttons-group/Buttons-group';
import { ProgressBar } from './components/Progress-bar/progress-bar';

const App = () => {
  const [percent, setPercent] = useState(0);
  const interval = setInterval(() => {
    if (percent >= 100) {
      setPercent(0);
      clearInterval(interval)
    } else {
      setPercent(percent + 10);
    }
    clearInterval(interval);
  }, 500);

  return (
    <>
      <h1 className='title'>Making Bootstrap components</h1>
      <div>
        <Button>default</Button>
        <Button mode='secondary' size='small'>secondary</Button>
        <Button mode='success'>success</Button>
        <Button mode='danger' size='large'>danger</Button>

        <Button disabled className='one-more-class'>Error</Button>
        <Button counter={4}>counter</Button>
      </div>

      <br></br>

      <ButtonsGroup>
            <Button>Left</Button>
            <Button>Midle</Button>
            <Button>Right</Button>
      </ButtonsGroup>

      <br></br>

      <ProgressBar percent={percent}></ProgressBar>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


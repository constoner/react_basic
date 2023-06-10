import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button/Button';
import { ButtonsGroup } from './components/Buttons-group/Buttons-group';
import { ProgressBar } from './components/Progress-bar/progress-bar';
import { Tag } from './components/Tag/Tag';

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

  const [reload, reloadTags] = useState(0.1);

  return (
    <>
      <h1 className='title'>Making Bootstrap components</h1>

      <div style={{marginBottom: '20px', padding: '10px', border: '1px solid lightgrey', borderRadius: '10px'}}>
        <p>Different buttons</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Button>default</Button>
          <Button mode='secondary' size='small'>secondary</Button>
          <Button mode='success'>success</Button>
          <Button mode='danger' size='large'>danger</Button>

          <Button disabled className='one-more-class'>Error</Button>
          <Button counter={4}>counter</Button>
        </div>
      </div>

      <div style={{marginBottom: '20px', padding: '10px', border: '1px solid lightgrey', borderRadius: '10px'}}>
        <p>Buttons group (tabs)</p>
        <ButtonsGroup>
              <Button>Left</Button>
              <Button>Midle</Button>
              <Button>Right</Button>
        </ButtonsGroup>
      </div>

      <div style={{marginBottom: '20px', padding: '10px', border: '1px solid lightgrey', borderRadius: '10px'}}>
        <p>Progress bar</p>
        <ProgressBar percent={percent}></ProgressBar>
      </div>

      <div style={{marginBottom: '20px', padding: '10px', border: '1px solid lightgrey', borderRadius: '10px'}}>
        <p>Tags group</p>
        <ButtonsGroup className="tag-group" key={reload}>
        <Tag className="search-tag">Popular</Tag>
        <Tag className="search-tag" isClickable={true}>New</Tag>
        <Tag className="search-tag" isClickable={true}>React</Tag>
        <Tag className="search-tag" isClickable={true}>JS</Tag>
        <Tag className="search-tag" isClickable={true}>Frontend</Tag>
        </ButtonsGroup>
        <br></br>
        <Button
          className="button--reset"
          mode="success"
          size="small"
          onClick={() => reloadTags(Math.random())}
        >
          Reset tags
        </Button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


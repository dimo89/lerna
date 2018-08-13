import * as React from 'react';

interface App2Props {
  title: string;
}

const App2: React.SFC<App2Props> = ({ title }) => {
  return (
    <div>{title} served from App2</div>
  );
}

export default App2;

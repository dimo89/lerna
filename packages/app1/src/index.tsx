import * as React from 'react';

interface App1Props {
  title: string;
};

class App1 extends React.Component<App1Props, {}> {
  render() {
    const { title } = this.props;

    return (
      <div>{title} served from App1</div>
    )
  }
}

export default App1;

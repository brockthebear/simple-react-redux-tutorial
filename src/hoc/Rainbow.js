import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * 6)];
  const cls = randomColor + '-text';

  return (props) => {
    return (
      <div className={cls}>
        <WrappedComponent {...props} />
      </div>     
    );
  }
}

export default Rainbow;

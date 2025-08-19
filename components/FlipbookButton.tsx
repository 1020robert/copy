import { css } from '@emotion/react';
import React, { useState } from 'react';

const FlipbookButton = (props: {
  source: string;
  flipbookId: string;
  children: React.ReactNode;
}): JSX.Element => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setOpened(true);
          console.log(1);
          (window as any)
            .$('#flipbook-lightbox-' + props.flipbookId)
            .flipBook(props.source, { webgl: true });
          console.log(2);
        }}
      >
        {props.children}
      </div>
      <div
        css={css`
          position: fixed;
          left: 0px;
          top: 0px;
          right: 0px;
          bottom: 0px;
          z-index: 5;
          pointer-events: ${opened ? 'default' : 'none'};
        `}
      >
        <div id={'flipbook-lightbox' + props.flipbookId}></div>
      </div>
    </div>
  );
};

export default FlipbookButton;

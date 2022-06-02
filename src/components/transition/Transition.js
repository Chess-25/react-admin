/**
 * @author zhengji.su
 * @description Transition
 */

import React, {
  useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import transitions from '@material-ui/core/styles/transitions';
import { delayedExecution } from 'utils/helpers';
import useUpdateEffect from 'utils/Hooks/updateEffect/useUpdateEffect';
import { createPortal } from 'react-dom';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    width: '100%',
    zIndex: -1,
    opacity: 0,
    transition: (props) => (props.transition ? transitions : `all ${props.time ?? 0.5}s`),
    display: 'none',
  },
  from: (props) => ({
    top: 102,
    left: 0,
    ...props.from,
  }),
  to: (props) => ({
    top: 85,
    opacity: 1,
    marginTop: -(props.to?.top ?? 85),
    paddingTop: props.to?.top ?? 85,
    ...props.to,
  }),
  animationCover: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 999,
  },
}));

function Transition({
  children,
  visible: propVisible,
  onBackdropClose,
  ...other
}) {
  const classes = useStyles({ ...other });

  const [active, setActive] = useState(false);
  const transitionRef = useRef(null);
  const bodyRef = useRef(document.querySelector('body'));

  useUpdateEffect(() => {
    // const container = document.querySelector('body');

    delayedExecution(() => setActive(propVisible), 100);

    if (propVisible) {
      transitionRef.current.style.display = 'block';

      // const coverNode = document.createElement('div');
      // coverNode.id = 'animation_cover';
      // coverNode.className = classes.animationCover;
      // coverNode.addEventListener('mouseenter', onBackdropClose);
      // container.appendChild(coverNode);
    }

    // return () => {
    //   const cover = document.getElementById('animation_cover');
    //   if (cover) {
    //     cover.removeEventListener('mouseenter', onBackdropClose);
    //     container.removeChild(cover);
    //   }
    // };
  }, [propVisible]);

  const handleTransitionEnd = (e) => {
    e.persist();
    if (!active) {
      transitionRef.current.style.display = 'none';
    }
  };

  return (
    <>
      <Box
        ref={transitionRef}
        className={clsx(classes.root, classes.from, { [classes.to]: active })}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </Box>
      {active && createPortal(<Box
        className={classes.animationCover}
        onMouseEnter={onBackdropClose}
      />, bodyRef.current)}
    </>
  );
}

Transition.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  time: PropTypes.number,
  transition: PropTypes.string,
  from: PropTypes.object,
  to: PropTypes.object,
  onBackdropClose: PropTypes.func,
  trigger: PropTypes.oneOfType([
    PropTypes.oneOf(['click', 'hover']),
    PropTypes.string,
  ]),
};

export default Transition;

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// DOCS
// https://github.com/gaearon/redux-devtools
export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q"
               defaultPosition="right">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);
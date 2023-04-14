import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { VSCodeBrowser, VSCodeFile, VSCodeTerminal, Command, TerminalRunCommand, TerminalVisor, Terminal } from '@shipyardrun/components';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Terminal,
  TerminalRunCommand,
  Command,
  TerminalVisor,
  VSCodeBrowser,
  VSCodeFile,
  VSCodeTerminal
};


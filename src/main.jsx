import React from 'react';
import { createRoot } from 'react-dom/client';
import Top5 from './component/top5/top5';

const content = document.querySelector('#here');

const top5 = <Top5 />;

const root = createRoot(content);
root.render(top5);

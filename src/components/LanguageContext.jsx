import { createContext } from 'react';
import content from './../Languages';

const LanguageContext = createContext([content.FRA, () => {}]);

export default LanguageContext;

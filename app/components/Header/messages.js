/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  portfolioHome: {
    id: `${scope}.portfolioHome`,
    defaultMessage: 'Portfolio Home',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Boilerplate Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Some Features',
  }
  
});

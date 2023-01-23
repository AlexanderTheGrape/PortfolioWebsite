/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Boilerplate Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Boilerplate Features',
  },
  portfolioHome: {
    id: `${scope}`.portfolioHome,
    defaultMessage: 'Home',
  }
});

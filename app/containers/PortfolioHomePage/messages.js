/*
* Portfolio Home Page Messages
*
* This contains all the text for the PortfolioHomePage component.
*/

import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.PortfolioHomePage';

export default defineMessages({
    header: {
        id: `${scope}.header`,
        defaultMessage: 'Portfolio of a Monk'
    },
    startProjectMessage: {
        id: `${scope}.start_project.message`,
        defaultMessage:
          'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
      },
    trymeHeader: {
        id: `${scope}.tryme.header`,
        defaultMessage: 'Try me!',
    },
    trymeMessage: {
        id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
    },
      trymeAtPrefix: {
        id: `${scope}.tryme.atPrefix`,
        defaultMessage: '@',
    },
})
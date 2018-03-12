// import * as React from 'react';
// import { css } from 'glamor';
// const moment = require('moment');

// import { PreviewWrapper } from '../PreviewWrapper';
// import { WebPreviewTopBar } from '../components/WebPreviewTopBar';
// import {
//   Activefont,
//   getDefaultEventFields,
//   PreviewProps,
//   getCoverPhotoForPage
// } from '../util';

// import { WeddingName, CountdownTimer } from '../../../../';

// const previewRules = (height, width) =>
//   css({
//     boxShadow:
//       '0 15.2px 38px 0 rgba(0, 0, 0, 0.24), 0 12px 12px 0 rgba(0, 0, 0, 0.18)',
//     display: 'flex',
//     flexDirection: 'column',
//     height,
//     minWidth: width,
//     margin: '20px 0',
//     position: 'relative',
//     width,
//     background: 'white'
//   });

// const contentRules = css({
//   alignItems: 'center',
//   border: '2px solid #e9e9e9',
//   borderTop: 'none',
//   borderBottom: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   height: '100%',
//   margin: '0 65px',
//   padding: '50px 30px'
// });

// const tabSectionRules = css({
//   display: 'flex',
//   listStyle: 'none',
//   justifyContent: 'space-between',
//   margin: '30px 0 25px 0',
//   padding: 0,
//   width: '100%',
//   ' > li': {
//     background: '#e9e9e9',
//     borderRadius: 20,
//     height: 13,
//     width: 40
//   }
// });

// const coverPhotoRules = image =>
//   css({
//     height: 300,
//     backgroundColor: '#e9e9e9',
//     width: '100%'
//   });

// const bodySectionRules = css({
//   fontSize: '.8em',
//   margin: '25px 0',
//   textAlign: 'center',
//   width: '60%',
//   ' > *': {
//     margin: '15px 0'
//   }
// });

// const logisticsContainerRules = css({
//   transform: 'scale(.8)'
// });

// const locationRules = css({
//   fontSize: '25px',
//   fontWeight: 300,
//   lineHeight: '36px',
//   margin: 0,
//   marginBottom: 10
// });

// const dateRules = css({
//   fontSize: '12px',
//   fontWeight: 400,
//   lineHeight: '17px',
//   margin: '0 0 10px'
// });

// const ctaButtonRules = css({
//   fontWeight: '400',
//   lineHeight: '28px',
//   border: '1.4px solid',
//   borderRadius: '5px',
//   marginTop: 30,
//   minWidth: '80px',
//   fontSize: '11px',
//   padding: '0 20px',
//   textAlign: 'center'
// });

// const getVisibleFields = weddingInfo => {
//   return getDefaultEventFields(weddingInfo);
// };

// export const SimpleLayoutPreview: React.SFC<PreviewProps> = ({
//   children,
//   coverPhotos,
//   previewOptions,
//   theme,
//   eventInfo
// }) => {
//   const {
//     ownerName,
//     fianceeName,
//     // eventDate,
//     location,
//     message
//   } = getDefaultEventFields(eventInfo);

//   // const eventDateMoment = moment(eventDate);

//   const coverPhoto = getCoverPhotoForPage('welcome', coverPhotos);

//   return (
//     <PreviewWrapper previewOptions={previewOptions}>
//       <div {...previewRules(previewOptions.height, previewOptions.width)}>
//         <WebPreviewTopBar />
//         <div {...contentRules}>
//           <div>
//             <WeddingName owner={ownerName} fiancee={fianceeName} />
//           </div>
//           <ul data-section="tabs" {...tabSectionRules}>
//             <li />
//             <li />
//             <li />
//             <li />
//             <li />
//             <li />
//             <li />
//             <li />
//           </ul>
//           <div {...coverPhotoRules(coverPhoto && coverPhoto.url)} />
//           <div data-section="body" {...bodySectionRules}>
//             <div>TWIRLYBIT</div>
//             <div data-section="greeting">{message}</div>
//             <div data-section="logistics" {...logisticsContainerRules}>
//               <h2 {...locationRules}>{location}</h2>
//               <h4 {...dateRules}>
//                 {eventDateMoment.isValid() &&
//                   eventDateMoment.format('dddd, MMMM D, YYYY')}
//               </h4>
//               <CountdownTimer eventDate={eventDate} fontSize="12" />
//               <div {...ctaButtonRules}>RSVP HERE</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PreviewWrapper>
//   );
// };

// SimpleLayoutPreview.defaultProps = {
//   previewOptions: {
//     width: 640,
//     height: 876
//   }
// };

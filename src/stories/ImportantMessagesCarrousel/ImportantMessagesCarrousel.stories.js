
import React from 'react';
import { storiesOf } from '@storybook/react';
import ImportantMessagesCarousel from './ImportantMessagesCarousel';

storiesOf('ImportantMessagesCarousel', module)
  .add('Default', () => (
    <ImportantMessagesCarousel
      messages={[
        "Message 1",
        "Message 2",
        "Message 3"
      ]}
    />
  ))
  .add('With Custom Messages', () => (
    <ImportantMessagesCarousel
      messages={[
        "Custom Message 1",
        "Custom Message 2",
        "Custom Message 3"
      ]}
    />
  ));

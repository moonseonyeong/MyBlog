'use client';
import { FlexBox, FlexColumnBox } from '@/styles/common';
import { useState } from 'react';
import Markdown from 'react-markdown';

const AddPostPage = ({}: P) => {
  const [value, setValue] = useState('');

  return (
    <FlexBox>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <FlexColumnBox>
        <Markdown>{value}</Markdown>
      </FlexColumnBox>
    </FlexBox>
  );
};

export default AddPostPage;

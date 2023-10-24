'use client';
import Markdown from 'react-markdown';
import { InputChangeEvent } from './types';
import { Container, MarkdownWrapper, Textarea, TextareaWrapper } from './Preview.styles';

interface P {
  onChange: (e: InputChangeEvent) => void;
  content: string;
}

const Preview = ({ onChange, content }: P) => {
  return (
    <Container>
      <TextareaWrapper>
        <Textarea name='content' value={content} onChange={onChange} />
      </TextareaWrapper>
      <MarkdownWrapper>
        <Markdown>{content}</Markdown>
      </MarkdownWrapper>
    </Container>
  );
};

export default Preview;

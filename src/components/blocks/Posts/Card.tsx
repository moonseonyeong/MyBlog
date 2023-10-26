'use client';
import Image from 'next/image';
import { FlexBox } from '@/styles/common';
import { formatDateYYYYMMDD } from '@/utils/date';
import { CardContainer, Description, Title } from './Card.styles';
import { useRouter } from 'next/navigation';

interface P {
  title: string;
  date: string;
  like: number;
  id: number;
}

const Card = ({ date, like, title, id }: P) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/post/${id}`);
  };

  const handleCardKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleCardClick();
    }
  };
  return (
    <CardContainer href={`/post/${id}`} aria-label={`게시물: ${title}`}>
      <Title>{title}</Title>

      <FlexBox gap={16}>
        <Description>{formatDateYYYYMMDD(new Date(date))}</Description>
        <FlexBox gap={8}>
          <Description>Like : {like}</Description>
        </FlexBox>
      </FlexBox>
    </CardContainer>
  );
};

export default Card;

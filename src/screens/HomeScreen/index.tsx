import { useEffect, useRef, useState } from 'react';
import { MatchButton, ToggleButton, UnMatchButton } from '~/assets';
import { CircleButton, Loading } from '~/components';
import { Lottie, Swiper } from '~/modules';
import { useCatStore } from '~/stores';
import { VoteEnum } from '~/utils';
import { Card } from './components';
import {
  ButtonsContainer,
  Container,
  SafeAreaView,
  SizedBox,
  ToggleArea,
  TouchableRow,
  overlayLabels,
} from './styles';

const HomeScreen = () => {
  const [page, setPage] = useState(0);
  const { getCats, cats, clearCats, setVote } = useCatStore();

  const loadingRef = useRef<Lottie>(null);
  const swiperRef = useRef<Swiper<any>>(null);

  const onPressSwipeRight = () => {
    swiperRef.current?.swipeRight();
  };

  const onPressSwipeLeft = () => {
    swiperRef.current?.swipeLeft();
  };

  const onSwipedLeft = async (cardIndex: number) => {
    await setVote({ image_id: cats[cardIndex].image_id, value: VoteEnum.DOWN });
  };

  const onSwipedRight = async (cardIndex: number) => {
    await setVote({ image_id: cats[cardIndex].image_id, value: VoteEnum.UP });
  };

  const onFetch = async () => {
    loadingRef.current?.play();
    try {
      await getCats(page);
      setPage((old) => old + 1);
    } catch (e) {
      console.log(e);
    } finally {
      loadingRef.current?.pause();
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <ToggleArea>
          <ToggleButton />
        </ToggleArea>
        <Loading ref={loadingRef} />

        <Swiper
          ref={swiperRef}
          verticalSwipe={false}
          cards={cats}
          key={cats.length}
          overlayLabels={overlayLabels}
          renderCard={(card) =>
            card && (
              <Card
                image_url={card.image_url}
                id={card.id}
                origin={card.origin}
                name={card.name}
                affection_level={card.affection_level}
              />
            )
          }
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          onSwipedAll={() => {
            clearCats();
            onFetch();
          }}
          backgroundColor={'transparent'}
          stackSize={3}
          stackSeparation={0}
        />
      </Container>

      <ButtonsContainer>
        <TouchableRow>
          <CircleButton onPress={onPressSwipeLeft}>
            <UnMatchButton />
          </CircleButton>
          <SizedBox />
          <CircleButton onPress={onPressSwipeRight}>
            <MatchButton />
          </CircleButton>
        </TouchableRow>
      </ButtonsContainer>
    </SafeAreaView>
  );
};
export default HomeScreen;

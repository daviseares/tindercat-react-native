import { View } from 'react-native';
import { BoxShadow } from '~/components';
import { Cat } from '~/utils/types';
import {
  Container,
  Image,
  Info,
  InfoAffection,
  InfoBreed,
  InfoName,
} from './styles';

type Props = Partial<Cat>;

export const Card = ({ name, origin, affection_level, image_url }: Props) => (
  <BoxShadow>
    <Container>
      <Image source={{ uri: image_url }} />

      <Info>
        <View>
          <InfoName>{name}</InfoName>
          <InfoBreed>{origin}</InfoBreed>
        </View>

        <InfoAffection>{affection_level}</InfoAffection>
      </Info>
    </Container>
  </BoxShadow>
);

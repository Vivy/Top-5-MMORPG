import Ff14 from '../ff14/ff14';
import { Wow } from '../wow';
import * as S from './top5.style';

const Top5 = () => {
  return (
    <S.Top5>
      <h1> The best MMORPG in 2022 </h1>
      <Ff14 />
      <Wow />
    </S.Top5>
  );
};

export default Top5;

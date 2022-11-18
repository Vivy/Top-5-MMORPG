import Ff14 from '../ff14/ff14';
import Gw2 from '../gw2/gw2';
import Lostark from '../lostark/lostark';
import Scroll from '../scroll/scroll';
import { Wow } from '../wow';
import * as S from './top5.style';

const Top5 = () => {
  return (
    <S.Top5>
      <h1> The best MMORPG in 2022 </h1>
      <Ff14 />
      <Wow />
      <Gw2 />
      <Lostark />
      <Scroll />
    </S.Top5>
  );
};

export default Top5;

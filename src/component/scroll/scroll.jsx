import * as S from './scroll.style';
const Scroll = () => {
  return (
    <S.Scroll>
      <a href='https://www.elderscrollsonline.com/en-us/home' target='_blank'>
        The Elder Scrolls Online
      </a>
      <img src='scroll.jpg' />
      <p>Release Date: 2014 | Developer: Zenimax Online Studio</p>
      <span>
        It took The Elder Scrolls Online over a year to finally find its legs,
        but years later it's become one of the best MMOs on the market. That's
        in part thanks to the steady stream of excellent premium expansions that
        have gradually opened up new areas of Tamriel to explore. Fans of
        Morrowind can venture back to Vvardenfell, the home of the dark elves,
        but ESO has also opened up never before seen countries like the high elf
        kingdom of Summerset and the Khajiit homeland of Elsweyr.
      </span>
    </S.Scroll>
  );
};

export default Scroll;

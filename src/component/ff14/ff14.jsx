import * as S from './ff14.style';

const Ff14 = () => {
  return (
    <S.Ff14>
      <a href='https://freetrial.finalfantasyxiv.com/gb/' target='_blank'>
        Final Fantasy 14
      </a>
      <table className='pros'>
        Pros
        <tbody>
          <tr>
            <th> Money </th> Monthly subscription 100/month
          </tr>
          <tr>
            <th>Minimum Requirements </th> Windows 9 5Gb RAM, NVidia G-Force 3,
            20Gb Free on Hard-disk
          </tr>
          <tr>
            <th> Time Spent</th> Minimum 4H/day to enjoy the game
          </tr>
        </tbody>
      </table>
      <table className='cons'>
        Cons
        <tbody>
          <tr>
            <th> Money </th> Monthly subscription 100/month
          </tr>
          <tr>
            <th>Minimum Requirements </th> Windows 9 5Gb RAM, NVidia G-Force 3,
            20Gb Free on Hard-disk
          </tr>
          <tr>
            <th> Time Spent</th> Minimum 4H/day to enjoy the game
          </tr>
        </tbody>
      </table>
      <img src='ff14.jpg' />
      <p> Release Date: 2013 | Developer: Square Enix</p>
      <span>
        Final Fantasy 14's journey has been a long road full of disappointment.
        Launching in 2010 to an overwhelmingly negative response, Square Enix
        refused to give up and rebuilt the whole game with a new team. The
        second iteration, A Realm Reborn, has done a better job of rekindling
        the love fans had for Final Fantasy better than any recent game in the
        series. It's at once unflinchingly dedicated to following in World of
        Warcraft's footsteps while also introducing a host of refreshing
        ideas—the best being the innovative class system.
      </span>
    </S.Ff14>
  );
};

export default Ff14;

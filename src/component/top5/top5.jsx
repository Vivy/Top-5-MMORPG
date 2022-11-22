import Ff14 from '../ff14/ff14';
import Gw2 from '../gw2/gw2';
import Lostark from '../lostark/lostark';
import Scroll from '../scroll/scroll';
import { Wow } from '../wow';
import * as S from './top5.style';
import { sendData, getData } from '../../util/firebase';
import { Field, FieldArray, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { gameData } from '../../util';

const Top5 = () => {
  const [initialValues, modificaValori] = useState(gameData);

  useEffect(() => {
    const display = JSON.parse(window.localStorage.getItem('mmos'));
    if (Array.isArray(display)) {
      modificaValori({ mmos: display });
    }
  }, []);

  // sendData();
  // getData();

  const onSubmit = (values) => {
    window.localStorage.setItem('mmos', JSON.stringify(values.mmos));
  };
  console.log(initialValues);

  return (
    <div>
      <h1> The best MMORPG in 2022 </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name='mmos'
              render={({ remove, insert, push }) => (
                <div>
                  {values.mmos && values.mmos.length > 0 ? (
                    values.mmos.map((mmos, index) => (
                      <div key={index}>
                        <Field name={`mmos.${index}.title`} />
                        <Field
                          placeholder='add subscription'
                          name={`mmos.${index}.subscription`}
                        />
                        <Field
                          placeholder='add requirements'
                          name={`mmos.${index}.requirements`}
                        />
                        <Field
                          placeholder='add requirements'
                          name={`mmos.${index}.time`}
                        />
                        <Field
                          placeholder='add requirements'
                          name={`mmos.${index}.releaseDate`}
                        />
                        <button type='button' onClick={() => remove(index)}>
                          -
                        </button>
                        <button type='button' onClick={() => insert(index, '')}>
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type='button' onClick={() => push('')}>
                      Add a game
                    </button>
                  )}
                  <div>
                    <button type='submit'>Submit</button>
                  </div>
                </div>
              )}
            ></FieldArray>
          </Form>
        )}
      </Formik>
      {/* <S.Top5>
        <Ff14 />
        <Wow />
        <Gw2 />
        <Lostark />
        <Scroll />
      </S.Top5> */}
    </div>
  );
};

export default Top5;

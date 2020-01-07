import React from 'react';

import {returnOrEval as answer} from '../../lib'
import MapArray from './MapArray';
import MapObject from './MapObject';
import If from './If';

export default function Map({ collection, mapFunction, header, footer }) {
  const itens = answer(collection);

  return (<If
    Condition={Array.isArray(itens)}
    Then={<MapArray
      array={itens}
      mapFunction={mapFunction}
      header={header}
      footer={footer}
    />}
    Else={<MapObject
      object={itens}
      mapFunction={mapFunction}
      header={header}
      footer={footer}
    />}
  />);
}
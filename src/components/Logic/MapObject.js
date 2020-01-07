import React from 'react';

import Encapsulated from './Encapsulated';

export default function MapObject({ object={}, mapFunction, header, footer }) {
  const map = (object && mapFunction) ?
    Object.keys(object).map(key => mapFunction(object[key], key)) :
    null;

    return <Encapsulated header={header} body={map} footer={footer}/>
  }
/**
 * Copyright 2019, IntraLinks, Inc, All rights reserved.
 * @author: Cosmin Mihai <cmihai@intralinks.com>
 */

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

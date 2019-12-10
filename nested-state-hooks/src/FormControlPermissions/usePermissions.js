import React, { useState, useEffect } from 'react';

const usePermission = (state) => {
  const [permissions, setPermissions] = useState(['create'], 'PROJECTS_VERSION_PERMISSIONS');
  useEffect(() => {
    setPermissions(oldPermissions => {
      let currentPermission;
      if(state) {
        currentPermission = Object.keys(state).filter((stateKey) => state[stateKey]);
      }
      debugger;
      if(!oldPermissions.includes(currentPermission)) {
        return  [...oldPermissions, currentPermission]
      }
    })
    console.log('persmissions', permissions);
  }, [state]);
  return permissions;
}

export default usePermission;
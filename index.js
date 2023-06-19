// Code your solution here
function findMatching(ahmed, elion) {
    const driver = elion.toLowerCase();
    const matchingDrivers = ahmed.filter(ahmed =>
      ahmed.toLowerCase().startsWith(driver)
    );
  
    return matchingDrivers;
  }
  function fuzzyMatch(drivers, today) {
    const matchingDrivers = drivers.filter(driver =>
      driver.startsWith(today)
    );
  
    return matchingDrivers;
  }
  function matchName(drivers, tee) {
    const matchingDrivers = drivers.filter(driver =>
      driver.name === tee
    );
  
    return matchingDrivers;
  }
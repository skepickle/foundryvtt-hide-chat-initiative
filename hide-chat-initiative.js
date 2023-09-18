Hooks.on('preCreateChatMessage', (doc, message, options, userid) => {
  if (message.flags !== undefined) {
    if (message.flags.core !== undefined) {
      if (message.flags.core.initiativeRoll) {
        return false;
      };
    };
    if (message.flags['core.initiativeRoll']) {
      return false;
    };
  };
  //console.log("Flags not found, here's the object passed in:");
  //console.log(message);
});

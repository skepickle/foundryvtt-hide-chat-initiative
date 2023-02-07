Hooks.on('preCreateChatMessage', (doc, message, options, userid) => {
  if (message.flags !== undefined) {
    //console.log(message);
    if (message.flags['core.initiativeRoll']) {
      //console.log("core.initiativeRoll was TRUE!");
      return false;
    };
  };
});

console.error(error);
                    message.reply('There was an error trying to execute that command!');
                }
            } else {
                message.reply('That command does not exist.');
            }
        } else {
            noPrefixCommands.handleNoPrefixCommand(message, args, client);
        }
    },
};

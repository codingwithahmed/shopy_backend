const { Items } = require('../../db/models/_index')

module.exports = {
    hello: () => 'Hello world!',
    getItem: (parent, args, context, info) => {
      const { id } = args;
      const foundItem = Items.find(item => item.id === String(id)); // Convert to string
      
      if (!foundItem) {
        console.log(`Item with id ${id} not found`);
        return null;
      }
  
      console.log(`Found item: ${JSON.stringify(foundItem)}`);
      return foundItem;
    }
  };
  
  
  
  
  
  
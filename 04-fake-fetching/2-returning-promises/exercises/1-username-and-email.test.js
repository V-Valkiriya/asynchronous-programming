import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---

/** * A function that fetches a user and returns their id, username and email.
 *
 * @param {number} userId - The user ID to fetch.
 * @returns {Promise<string>} A promise that resolves to the user's id, username and email.
 *
 * @throws {Error} {status number}: {status text}
 *
 */
const usernameAndEmail = (id) => fetchUserById(id).then((user) => `${user.id}. ${user.username}, ${user.email}`);

// --- test function ---

describe("usernameAndEmail: returns a user's name", () => {
  it("gets user 2's name", () => {
    return usernameAndEmail(2).then((actual) => {
      expect(actual).toEqual('2. Antonette, Shanna@melissa.tv'); // email has been corrected 
    });
  });
  it("gets user 3's name", () => {
    return usernameAndEmail(4).then((actual) => {
      expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org'); // email has been corrected 
    });
  });
  it("gets user 4's name", () => {
    return usernameAndEmail(7).then((actual) => {
      expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz'); 
    });
  });
  it("gets user 8's name", () => {
    return usernameAndEmail(10).then((actual) => {
      expect(actual).toEqual('10. Moriah.Stanton, Rey.Padberg@karina.biz'); // email has been corrected 
    });
  });
});

log('= = = =  the call stack is empty  = = = =');
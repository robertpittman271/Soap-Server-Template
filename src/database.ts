// Initialize an empty map to store user information
const userMap = new Map();

// Function to add a new user to the map
export function addUser (name: string, email: string, password: string) {
  // Check if the user already exists in the map
  if (userMap.has(email)) {
    const message = `User with email ${email} already exists.`;
    throw {
      Fault: {
        Code: {
          Value: 'soap:Sender',
          Subcode: { value: '7221' }
        },
        Reason: { Text: message }
      }
    };
  }

  // Add the new user to the map
  const userInfo = { name, email, password };
  userMap.set(email, userInfo);

  const message = `User with email ${email} added successfully.`;
  console.log(message);
  return message;
}

// Function to get user information by email
export function getUserByEmail (argEmail: string) {
  // Check if the user exists in the map
  if (!userMap.has(argEmail)) {
    const message = `User with email ${argEmail} not found.`;
    throw {
      Fault: {
        Code: {
          Value: 'soap:Sender',
          Subcode: { value: '7221' }
        },
        Reason: { Text: message }
      }
    };
  }

  // Return the user information
  const {
    email,
    name,
    password
  } = userMap.get(argEmail);

  console.log(`User with email ${email} found. Name: ${name}, Password: ${password}`);
  return {
    email,
    name,
    password
  }
}
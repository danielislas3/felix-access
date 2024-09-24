# Firebase Cloud Functions

This project contains the Firebase Cloud Functions for the IoT project. The functions are responsible for controlling the devices and handling user registration.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```bash
   cd backend/functions
   npm install
   ```

3. Configure Firebase:

   - Create a new Firebase project.
   - Set up the Firebase CLI using `firebase login` and `firebase init`.
   - Update the Firebase project ID in the `.firebaserc` file.

4. Deploy the functions:

   ```bash
   npm run deploy
   ```

## Usage

The following functions are available:

- `openAccessDoor`: Opens the access door to the private property.
- `openGate`: Opens the gate.

To call these functions, make a POST request to the corresponding endpoint:

- `POST /api/devices/access-door/open`
- `POST /api/devices/gate/open`

The request should include the necessary authentication token.

## Documentation

For more information about the project and how to use it, refer to the project's [README.md](../../README.md) file.

```

Please note that you need to replace `<repository-url>` with the actual URL of your repository.